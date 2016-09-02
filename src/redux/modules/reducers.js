const initialState = {
    user: {
      loggedIn: true,
      username:"john",
      url:"/john"
    },
    content: {
      editing: false
    }
};
const reducer = (state = initialState, action) => {
	switch(action.type) {
		case 'EDIT_CONTENT_TOGGLE':
			return Object.assign({}, state, {
				content: {
					editing: !state.content.editing
				}
			});
		default:
			return state;
	}
}

export default reducer;