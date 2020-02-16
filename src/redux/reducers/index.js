import { combineReducers } from 'redux';
import persist from './persist';
import home from './home';


export default combineReducers({
  PERSIST: persist,
  HOME: home,
});
