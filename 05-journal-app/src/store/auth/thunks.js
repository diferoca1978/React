import { singInWithGoogle } from "../../firebase/providers";
import { chekingCredentials, logOut, login } from "./authSlice";


export const chekingAuthentication = ( email, pasword ) => {
  return async(dispatch) => {

    dispatch(chekingCredentials());

  } 
}

export const startGoogleSignIn = () => {
  return async(dispatch) => {
    
    dispatch( chekingCredentials() );

    const result = await singInWithGoogle();
    if ( !result.ok ) return dispatch( logOut(result.errorMessage))

    dispatch ( login( result ) );    

  } 
}