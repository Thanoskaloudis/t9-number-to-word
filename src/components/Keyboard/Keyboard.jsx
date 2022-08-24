import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../state/index';
import { Button } from '../Button/Button';
import './Keyboard.scss';

export const Keyboard = () => {
  const inputValue = useSelector((state) => state.input.value);
  const dispatch = useDispatch();
  const { backspace, fetchPredictions } = bindActionCreators(
    actionCreators,
    dispatch
  );

  const handleBackspace = () => {
    backspace();
    if(inputValue.length) {
      fetchPredictions(inputValue.substring(0, inputValue.length - 1));
    }
  }

  return (
    <div className="keyboard">
    <Button disabled="disabled" value="1">1 <small>.,?</small></Button>
    <Button value="2">2 <small>abc</small></Button>
    <Button value="3">3 <small>def</small></Button>
    <Button value="4">4 <small>ghi</small></Button>
    <Button value="5">5 <small>jkl</small></Button>
    <Button value="6">6 <small>mno</small></Button>
    <Button value="7">7 <small>pqrs</small></Button>
    <Button value="8">8 <small>tuv</small></Button>
    <Button value="9">9 <small>wxyz</small></Button>
    <Button disabled="disabled" value="symbol">* #</Button>
    <Button disabled="disabled" value="0">0</Button>
    <button onClick={handleBackspace} value="backspace">⌫</button>
  </div>
  )
}
