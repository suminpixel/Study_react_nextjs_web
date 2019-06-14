import { combineReducers } from 'redux';
import user from './user';
import post from './post';
import axios from 'axios';

const rootReducer = combineReducers({
  user,
  post,
});

export default rootReducer;
