// import { createStore, applyMiddleware } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
// import thunk from 'redux-thunk';
// import reducers from './reducers/index';

// const store = createStore(
//   reducers,
//   composeWithDevTools(applyMiddleware(thunk)),
// );

// export default store;


import { configureStore, createSlice } from '@reduxjs/toolkit'
import userReducer from './slices/userSlice';

export const store = configureStore({
  reducer: {
    user: userReducer
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
