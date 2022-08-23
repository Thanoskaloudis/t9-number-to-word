import React from 'react';
import './Keyboard.scss';
import { Button } from '../Button/Button';

export const Keyboard = () => {
  return (
    <div className="keyboard">
    <Button className="key" disabled="disabled" value="1">1</Button>
    <Button className="key" value="2">2 <small>abc</small></Button>
    <Button className="key" value="3">3 <small>def</small></Button>
    <Button className="key" value="4">4 <small>ghi</small></Button>
    <Button className="key" value="5">5 <small>jkl</small></Button>
    <Button className="key" value="6">6 <small>mno</small></Button>
    <Button className="key" value="7">7 <small>pqrs</small></Button>
    <Button className="key" value="8">8 <small>tuv</small></Button>
    <Button className="key" value="9">9 <small>wxyz</small></Button>
    <Button className="key" disabled="disabled" value="symbol">* #</Button>
    <Button className="key" disabled="disabled" value="0">0</Button>
    <Button className="key" value="space"><small>space</small></Button>
  </div>
  )
}
