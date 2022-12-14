const initialState = {
  value: '',
  error: '',
};

const reducer = (state = initialState, action) => {
  const newState = { ...state };
  const inputLength = state.value.length;

  switch (action.type) {
    case 'changeInput':
      newState.value += action.payload;
      break;
    case 'reduceString':
      if (inputLength) {
        newState.value = newState.value.substring(0, inputLength - 1);
      }
      break;
    default:
      return newState;
  }

  return newState;
};

export default reducer;
