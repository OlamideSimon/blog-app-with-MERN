import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import blogReducer from '../features/blogs/blogSlice'
import selectedBlogReducer from '../features/blogs/selectedBlogSlice';
import commentReducer from '../features/comments/commentSlice'

export const store = configureStore({
  reducer: {
    blogs: blogReducer,
    selected: selectedBlogReducer,
    comments: commentReducer
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
