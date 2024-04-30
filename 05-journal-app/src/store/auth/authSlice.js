import { createSlice } from '@reduxjs/toolkit';

export const AuthSlice = createSlice({
    name: 'auth',
    initialState: {
        status: 'not-authenticated', // 'cheking' ,'not-authenticated', 'autenticated
        uid: null,
        email: null,
        displayName: null,
        photoURL: null,
        errorMessage: null,
         
    },
    reducers: {
      login: (state, {payload}) => {
        state.status = 'authenticated';
        state.uid= payload.uid;
        state.email= payload.email;
        state.displayName= payload.displayName;
        state.photoURL= payload.photoURL;
        state.errorMessage= null;
      },
      logOut: (state,{payload}) => {
        state.status = 'not-authenticated';
        state.uid= null;
        state.email= null;
        state.displayName= null;
        state.photoURL= null;
        state.errorMessage= payload.errorMessage;
      },
      chekingCredentials: (state) => {
         state.status = 'cheking'
      }
    }
});


// Action creators are generated for each case reducer function
export const { login, logOut, chekingCredentials } = AuthSlice.actions;