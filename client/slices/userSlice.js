import { createSlice, createAsyncThunk, current  } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  firstName: '',
  lastName: '',
  email: '',
  isFetching: false,
  isSuccess: false,
  isError: false,
  errorMessage: '',
};

export const signup = createAsyncThunk('/api/signup', 
  async ({ first_name, last_name, email, user_password }, thunkAPI) => {
    try {
      const response = await axios.post('/api/signup', {
        first_name: first_name,
        last_name: last_name,
        email: email,
        user_password: user_password,
      });
      return response.data;
    }catch(error){
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  });

export const getUsername = createAsyncThunk('/api/login', 
  async ({ email, password }, thunkAPI) => {
    console.log('email, pass', email, password)
    try {
      const response = await axios.post('/api/login', {
        email: email,
        password: password,
      });
      return response.data;
    }catch(error){
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  });

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    // Redux Toolkit allows us to write "mutating" logic in reducers. It
    // doesn't actually mutate the state because it uses the Immer library,
    // which detects changes to a "draft state" and produces a brand new
    // immutable state based off those changes
  },
  extraReducers: {
    [signup.fulfilled]: (state, {payload}) => {
      state.isFetching = false;
      state.isSuccess = true;
      state.email = payload.email;
      state.firstName = payload.first_name;
      state.lastName = payload.last_name;
      console.log('signup fulfilled');
    },
    [signup.pending]: (state) => {
      state.isFetching = true;
    },
    [signup.rejected]: (state, { payload }) => {
      state.isFetching = false;
      state.isError = true;
      state.errorMessage = payload.message;
    },
    [getUsername.fulfilled]: (state, { payload }) => {
      state.email = payload.email;
      state.email = payload.email;
      state.firstName = payload.first_name;
      state.lastName = payload.last_name;
      state.isFetching = false;
      state.isSuccess = true;
    },
    [getUsername.rejected]: (state, { payload }) => {
      console.log('payload', payload);
      state.isFetching = false;
      state.isError = true;
      state.errorMessage = payload.message;
    },
    [getUsername.pending]: (state) => {
      state.isFetching = true;
    },
  }
});

// Action creators are generated for each case reducer function
//export const {  } = userSlice.actions;

export default userSlice.reducer;