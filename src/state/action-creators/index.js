export const fetchPredictionsSuccess = (value) => {
  return {
    type: 'fetchPredictionsSuccess',
    payload: value,
  };
};

export const fetchPredictionsFailure = (error) => {
  return {
    type: 'fetchPredictionsFailure',
    payload: error,
  };
};

export const changeInput = (value) => {
  return {
    type: 'changeInput',
    payload: value,
  };
};

export const fetchPredictions = () => {
  //TODO
};


export const updateInput = (value) => {
  return (dispatch) => {
    dispatch(changeInput(value))
  };
};