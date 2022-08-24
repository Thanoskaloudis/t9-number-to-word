const initialState = {
  value: [],
  error: '',
};

const reducer = (state = initialState, action) => {
  const newState = { ...state };

  switch (action.type) {
    case 'setExpansions':
      newState.value = action.payload;
      break;
    default:
      return newState;
  }

  return newState;
};

export default reducer;
