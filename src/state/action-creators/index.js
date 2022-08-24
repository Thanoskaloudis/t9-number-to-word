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

export const reduceInput = () => {
  return {
    type: 'reduceInput',
    payload: '',
  };
};

export const fetchPredictions = (input) => {
    return (dispatch) => {
      fetch(`http://localhost:8000?input=${input}`)
      .then(function(response) {
        let temp = response.json();
        return temp
      }).then(function(data) {
        console.log(data);
      })
      .catch(() => {
        console.log('Server Error')
        return []
      })
    };
};


export const updateInput = (value) => {
  return (dispatch) => {
    dispatch(changeInput(value))
  };
};

export const backspace = () => {
  return (dispatch) => {
    dispatch(reduceInput())
  };
};