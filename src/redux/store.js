import reducer from '../redux/reducer';
import { logger } from 'redux-logger';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
const middleware = [...getDefaultMiddleware(), logger];
const store = configureStore({
  reducer: { contacts: reducer },
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});
export default store;
