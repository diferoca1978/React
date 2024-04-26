import { chekingCredentials } from "./authSlice";


export const chekingAuthentication = ( email, pasword ) => {
  return async(dispatch) => {

    dispatch(chekingCredentials());

  } 
}

export const startGoogleSignIn = () => {
  return async(dispatch) => {
    
    dispatch( chekingCredentials() );

  } 
}