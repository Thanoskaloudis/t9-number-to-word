import { combineReducers } from 'redux';
import inputReducer from './inputReducer';
import outputReducer from './outputReducer';

const reducers = combineReducers({
  input: inputReducer,
  output: outputReducer
}); 

export default reducers;