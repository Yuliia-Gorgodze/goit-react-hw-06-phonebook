import { createReducer } from '@reduxjs/toolkit';
import actionscontacts from './contacts-actions';
const contacts = createReducer([], {
  [actionscontacts.addContact]: (state, { payload }) => [payload, ...state],
  [actionscontacts.deleteContact]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});
export default contacts;
