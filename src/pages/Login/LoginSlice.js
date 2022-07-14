import { createSlice } from '@reduxjs/toolkit';


const loginSlice = createSlice({
  name: 'login',
  initialState: {
    user: '',
    isLogged: false,
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload.username;
      state.isLogged = true;
    },

    unsetUser: (state, action) => {
      console.log(state);
    }
  },
});

export const { setUser, unsetUser } = loginSlice.actions;
export default loginSlice.reducer;
