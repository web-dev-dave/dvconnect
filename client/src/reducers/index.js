import { combineReducers } from 'redux';

// import reducers
import alert from './alert';
import auth from './auth';

export default combineReducers({
  alert,
  auth
});
