import { combineReducers } from 'redux';

import filter from './filter/filterReducer';
import contacts from './contacts/contactsReducer';
export default combineReducers({
  contacts,
  filter,
});
