import { createSlice } from '@reduxjs/toolkit';

const state = {
  userId: null,
  userEmail: null,
  isLoggedIn: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState: state,
  reducers: {
    updateUserProfile: (state, { payload }) => ({
      ...state,
      userId: payload.userId,
      userEmail: payload.userEmail,
    }),
    stateChange: (state, { payload }) => ({
      ...state,
      isLoggedIn: payload.isLoggedIn,
    }),
    authSignOut: () => state,
  },
});
