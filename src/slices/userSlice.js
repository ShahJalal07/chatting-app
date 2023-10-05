import { createSlice } from "@reduxjs/toolkit";
export const userSlice = createSlice({
  name: "user",
  initialState: {
    userInfo: localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user"))
      : null,
    blur: false,
  },
  reducers: {
    userLoginInfo: (state, action) => {
      state.userInfo = action.payload;
    },
    blurClassAdd: (state, action) => {
      state.blur = action.payload;
    },
  },
});

export const { userLoginInfo, blurClassAdd } = userSlice.actions;
export default userSlice.reducer;
