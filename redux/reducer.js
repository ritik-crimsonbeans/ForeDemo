const initialState = {
  text: '',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_TEXT":
      return { ...state, text: action.data };
     default:
      return state;
  }
};

export default reducer;
