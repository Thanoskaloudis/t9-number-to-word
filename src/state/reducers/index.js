import { combineReducers } from 'redux';
import inputReducer from './inputReducer';

const reducers = combineReducers({
  inputValue: inputReducer,
}); 

export default reducers;