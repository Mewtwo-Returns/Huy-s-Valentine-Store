import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: '',
  cart: {}
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    getUsername: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.name = action.payload;
    },
    signup: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.name = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { getUsername, signup } = userSlice.actions;

export default userSlice.reducer;