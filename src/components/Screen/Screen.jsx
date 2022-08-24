import React from 'react';
import { useSelector } from 'react-redux';
import './Screen.scss';

export const Screen = () => {
  const outputValue = useSelector((state) => state.output.value);

  return (
    <div className="screen">
    <span className="screen--prev-text"></span>
    <span className="screen--current-text">{outputValue}</span>
  </div>
  )
}
