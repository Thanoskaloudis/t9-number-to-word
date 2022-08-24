export const changeInput = (value) => {
  return {
    type: 'changeInput',
    payload: value,
  };
};

export const reduceString = () => {
  return {
    type: 'reduceString',
    payload: '',
  };
};

export const changeScreenResult = (value) => {
  return {
    type: 'changeScreenResult',
    payload: value,
  };
};

export const setExpansions = (value) => {
  return {
    type: 'setExpansions',
    payload: value,
  };
};

export const fetchPredictions = (input) => {
  return (dispatch) => {
    fetch(`http://localhost:8000?input=${input}`)
      .then((response) => {
        let temp = response.json();
        return temp;
      })
      .then((data) => {
        if (data.length) {
          dispatch(updateScreenOutpout(data[0]));
          dispatch(updateExpansions(data));
        }
      })
      .catch(() => {
        console.log('Server Error Occurred');
        return [];
      });
  };
};

export const updateScreenOutpout = (value) => {
  return (dispatch) => {
    dispatch(changeScreenResult(value));
  };
};

export const updateExpansions = (value) => {
  return (dispatch) => {
    dispatch(setExpansions(value));
  };
};

export const updateInput = (value) => {
  return (dispatch) => {
    dispatch(changeInput(value));
  };
};

export const backspace = () => {
  return (dispatch) => {
    dispatch(reduceString());
  };
};
