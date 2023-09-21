import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    userInfo: localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user"))
      : null,
  },
  reducers: {
    userLogingInfo: (state, action) => {
      state.userInfo = action.payload;
    },
  },
});
export const { userLogingInfo } = userSlice.actions;
export default userSlice.reducer;
