import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: [
      {
        name: "Hieu",
        email: "Hieu@gmail.com",
        password: "123456",
      },
      {
        name: "Dat ga",
        email: "Datga@gmail.com",
        password: "123456",
      },
    ],
    isLogin: false,
  },
  reducers: {
    login: (state, action) => {
      state.user.forEach((item) => {
        if (
          item.email === action.payload.email &&
          item.name === action.payload.name &&
          item.password === action.payload.password
        ) {
          state.isLogin = true;
        }
        return { ...state };
      });
    },
    logout: (state) => {
      state.user = null;
    },
  },
});

export const { login, logout } = userSlice.actions;

export const selectUser = (state) => state.user.isLogin;

export default userSlice.reducer;
