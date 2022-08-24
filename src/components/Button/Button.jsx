import React from 'react'
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../state/index';

export const Button = ({ type = 'button', disabled, value, children }) => {
  const dispatch = useDispatch();
  const { updateInput } = bindActionCreators(
    actionCreators,
    dispatch
  );

  const handleClick = () => {
    updateInput(value);
  }

  return (
    <button type={type} disabled={disabled} onClick={handleClick}>
      {children}
    </button>
  )
}
