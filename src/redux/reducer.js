import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import actionsItems from './items/items-actions';
import filterActions from './filter/filter-actions';

const filter = createReducer('', {
  [filterActions]: (_, { payload }) => payload,
});
// const filter = createReducer('', {
//   [actionsFilter.changeFilter]: (_, { payload }) => payload,
// });
const items = createReducer([], {
  [actionsItems.addContact]: (state, { payload }) => [payload, ...state],
  [actionsItems.deleteContact]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

export default combineReducers({
  items,
  filter,
});
