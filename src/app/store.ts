import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import contentReducer from '../features/content-edit/contentEditSlice';

export const store = configureStore({
  reducer: {
    contentedit: contentReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
