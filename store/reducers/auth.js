import { createSlice } from "@reduxjs/toolkit";

// initial state
const initialState = {
  isLoggedIn: false, // 로그인 여부
  user: null, // 로그인한 사용자 정보
};

// ==============================|| SLICE - AUTH ||============================== //

const auth = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state, action) {
      state.isLoggedIn = true;
      state.user = action.payload.user;
    },

    logout(state) {
      state.isLoggedIn = false;
      state.user = null;
    },
  },
});

export default auth.reducer;

export const { login, logout } = auth.actions;
