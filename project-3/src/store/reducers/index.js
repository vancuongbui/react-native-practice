import { combineReducers } from 'redux';
import inputDataReducer from './InputDataReducer';
import addDataArrayReducer from './AddDataArrayReducer';

export default combineReducers({
    textInput: inputDataReducer,
    arrayData: addDataArrayReducer, //including dataArray and selectedItem states
});