import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import rootReducer from '../slices';

const store = configureStore({ reducer: rootReducer });

export const AppDispatch = store.dispatch;
export const AppThunk = (thunkAction) => {
  return thunkAction;
};

export const useAppDispatch = () => useDispatch(AppDispatch);

export default store;