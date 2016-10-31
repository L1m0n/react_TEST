import fetch from 'isomorphic-fetch';

export function selectSubreddit(subreddit) {
  return {
    type: "SELECT_SUBREDDIT",
    subreddit
  }
} 

export function invalidateSubreddit(subreddit) {
  return {
    type:"INVALIDATE_SUBREDDIT",
    subreddit
  }
}

export function requestPosts(subreddit) {
  return {
    type: "REQUEST_POSTS",
    subreddit
  }
}

export function recivePosts(subreddit, json) {
  return {
    type: "RECIVE_POSTS",
    subreddit,
    posts: json.data.children.map(child => child.data),
    receivedAt: Date.now()
  }
}

export function fetchPosts(subreddit) {
  return function(dispatch){
    dispatch(requestPosts(subreddit));

    return fetch(`https://www.reddit.com/subreddits/search.json?q=${subreddit}`)
      .then(response => response.json())
      .then(json => 
        dispatch(recivePosts(subreddit, json))
      )
  }
}

function shouldFetchPosts(state, subredit) {
  const posts = state.postsBySubreddit[subredit];

  if(!posts) {
    return true
  }
  else if (posts.isFetching) {
    return false
  }
  else {
    return posts.didInvalidate
  }

}

export function fetchPostsIfNeeded(subreddit) {
  return (dispatch, getState) => {
    if (shouldFetchPosts(getState(), subreddit)) {
      return dispatch(fetchPosts(subreddit))
    }
    else {
      return Promise.resolve();
    }
  }
}