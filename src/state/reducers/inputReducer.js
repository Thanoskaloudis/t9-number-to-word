const initialState = {
  inputValue: '',
  error: '',
};

const reducer = (state = initialState, action) => {
  const newState = { ...state };

  switch (action.type) {
    case 'changeInput':
      newState.inputValue += action.payload;
      break;
    default:
      return newState;
  }

  return newState;
};

export default reducer;
