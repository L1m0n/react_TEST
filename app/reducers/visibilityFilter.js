const visibilityFilter = (state = {}, action) => {
	switch(action.type) {
		case 'SETVISIBILITY_FILTER':
			return action.filter
		default:
			return state
	}
}

export default visibilityFilter;