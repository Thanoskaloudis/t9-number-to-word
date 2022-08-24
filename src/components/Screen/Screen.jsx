import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import './Screen.scss';

export const Screen = () => {
  const inputValue = useSelector((state) => state.inputValue.inputValue);

  useEffect(() => {
    
  }, [inputValue]);

  return (
    <div className="screen">
    <span className="screen--prev-text"></span>
    <span className="screen--current-text">{inputValue}</span>
  </div>
  )
}
