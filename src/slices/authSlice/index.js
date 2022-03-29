import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: 'auth',
  initialState: {  
    userData: {},
},
  reducers: {
    authSuccess: (state, action) => {
      state.userData = action.payload;
    },
  }
})

export const { authSuccess } = authSlice.actions;
export default authSlice.reducer;