// rootReducer.js
import { combineReducers } from 'redux';
import { loginReducer, updateReducer, userReducer } from './user';
import { adminDataReducer } from './stateData.js';

const rootReducer = combineReducers({
  user: userReducer,
  login: loginReducer,
  update: updateReducer,
  adminData:adminDataReducer
  // Add other reducers here if you have more
});

export default rootReducer;
