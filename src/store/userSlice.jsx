import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    name: "abc",
  },
  reducers: {
    addUser: (state, action) => {
      state.name = action.payload;
    },
  },
});

const { addUser } = userSlice.actions;
export default userSlice.reducer;
