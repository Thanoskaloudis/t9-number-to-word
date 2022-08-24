import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../state/index';

export const Button = ({ type = 'button', disabled, value, children }) => {
  const inputValue = useSelector((state) => state.inputValue.inputValue);
  const dispatch = useDispatch();
  const { updateInput, fetchPredictions } = bindActionCreators(
    actionCreators,
    dispatch
  );

  const handleClick = () => {
    updateInput(value)
    console.log(inputValue);
    fetchPredictions(inputValue);
  }

  return (
    <button type={type} disabled={disabled} onClick={handleClick}>
      {children}
    </button>
  )
}
