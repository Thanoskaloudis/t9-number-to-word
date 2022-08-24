const initialState = {
  inputValue: '',
  error: '',
};

const reducer = (state = initialState, action) => {
  const newState = { ...state };
  const inputLength = state.inputValue.length;

  switch (action.type) {
    case 'changeInput':
      newState.inputValue += action.payload;
      break;
    case 'reduceInput':
      if (inputLength) {
        newState.inputValue = newState.inputValue.substring(0, inputLength - 1);
      }
      break;
    default:
      return newState;
  }

  return newState;
};

export default reducer;
