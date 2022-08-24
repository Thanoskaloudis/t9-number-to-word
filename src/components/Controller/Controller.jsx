import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../state/index';
import './Controller.scss';

export const Controller = () => {
  const [index, setindex] = useState(1);
  const expansions = useSelector((state) => state.expansions.value);
  const dispatch = useDispatch();
  const { updateScreenOutpout } = bindActionCreators(
    actionCreators,
    dispatch
  );

  const handlePrevious = () => {
    if (index > 0) {
      setindex(index - 1);
    }
  };

  const handleNext = () => {
    if (index < expansions.length - 2) {
      setindex(index + 1);
    }
  };

  const handlePick = (event) => {
    updateScreenOutpout(event.target.textContent)
  };

  return (
    <div className="controller">
      <button className="controller--arrow" onClick={handlePrevious}>❮</button>
      <button className="controller--prediction"onClick={handlePick}>{expansions[index]}</button>
      <button className="controller--prediction"onClick={handlePick}>{expansions[index + 1]}</button>
      <button className="controller--arrow" onClick={handleNext}>❯</button>
    </div>
  );
};
