export const addTodo = (text, id) => {
  return {
    type: "ADD_TODO",
    id:id,
    text
  }
}

export const toggleTodo = (id) => {
  return {
    type: "TOGGLE_TODO",
    id
  }
}

export const setVisibilityFilter = (filter) => {
  return {
    type: "SET_VISIBILITY_FILTER",
    filter
  }
}

export const removeTodo = (id) => {
  return {
    type: "REMOVE_TODO",
    id
  }
}