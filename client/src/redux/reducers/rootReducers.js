import { combineReducers } from 'redux';
import {
  getMessagesReducer,
  addMessageReducer,
  updateMessageReducer,
} from './messageReducer';

export const rootReducer = combineReducers({
  allMessages: getMessagesReducer,
  addMessage: addMessageReducer,
  updateMessage: updateMessageReducer,
});
