import { combineReducers } from 'redux';
import inputReducer from './inputReducer';
import outputReducer from './outputReducer';
import expansionsReducer from './expansionsReducer';

const reducers = combineReducers({
  input: inputReducer,
  output: outputReducer,
  expansions: expansionsReducer
}); 

export default reducers;