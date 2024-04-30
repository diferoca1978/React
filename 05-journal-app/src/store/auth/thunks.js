import { registerUserByEmailPassword, singInWithGoogle } from "../../firebase/providers";
import { chekingCredentials, logOut, login } from "./authSlice";


export const chekingAuthentication = ( email, password ) => {
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

export const startCreatingUserByEmailPassword = ({displayName, email, password }) => {

  return async( dispatch ) =>  {
    
    dispatch(chekingCredentials());

    const resp = await registerUserByEmailPassword({displayName, email, password});
    console.log(resp);

  }

}