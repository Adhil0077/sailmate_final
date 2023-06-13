import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  first_Name: "",
  last_Name: "",
  email: "",
  phone: "",
  image: "",
  id: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserDetails: (state, action) => {
      state.id = action.payload.id;
      state.phone = action.payload.phone;
      state.first_Name = action.payload.first_Name;
      state.last_Name = action.payload.last_Name;
      state.email = action.payload.email;
      state.image = action.payload.image;
    },
    userLogout: (state, action) => {
      state.id = "";
      state.phone = "";
      state.first_Name = "";
      state.last_Name = "";
      state.email = "";
      state.image = "";
    },
  },
});

export const { setUserDetails,userLogout } = userSlice.actions;
export default userSlice.reducer;
