import { createSlice } from '@reduxjs/toolkit';

// 
const initialState = {
  user: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    login: (state, action) => {
      // delivers the login user payload
      state.user = action.payload;
    },
    // sets logout user state to null
    logout: (state) => {
      state.user = null;
    },
  },
});

// 
export const { login, logout } = userSlice.actions;

// selector user
export const selectUser = (state) => state.user.user;

export default userSlice.reducer;
