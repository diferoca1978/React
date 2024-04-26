import { createSlice } from '@reduxjs/toolkit';

export const AuthSlice = createSlice({
    name: 'auth',
    initialState: {
        status: 'not-authenticated', // 'cheking' ,'not-authenticated', 'autenticated
        uuid: null,
        email: null,
        displayName: null,
        photoURL: null,
        errorMessage: null,
         
    },
    reducers: {
      login: (state, action) => {

      },
      logOut: (state,payload) => {
        
      },
      chekingCredentials: (state) => {
         state.status = 'cheking'
      }
    }
});


// Action creators are generated for each case reducer function
export const { login, logOut, chekingCredentials } = AuthSlice.actions;