import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../state/index';

export const Button = ({ type = 'button', disabled, value, children }) => {
  const [input, setInput] = useState('');
  const inputValue = useSelector((state) => state.input.value);
  const dispatch = useDispatch();
  const { updateInput, fetchPredictions } = bindActionCreators(
    actionCreators,
    dispatch
  );

  const handleClick = () => {
    updateInput(value);
    setInput(value);
  }

  useEffect(() => {
    fetchPredictions(inputValue);
  });

  return (
    <button type={type} disabled={disabled} onClick={handleClick}>
      {children}
    </button>
  )
}
