const initialState = {
  value: '',
  error: '',
};

const reducer = (state = initialState, action) => {
  const newState = { ...state };
  const outLength = state.value.length;

  switch (action.type) {
    case 'changeScreenResult':
      newState.value = action.payload;
      break;
    case 'reduceString':
      if (outLength) {
          newState.value = newState.value.substring(0, outLength - 1);
      }
      break;
    default:
      return newState;
  }

  return newState;
};

export default reducer;
