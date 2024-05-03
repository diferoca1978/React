import { registerUserWithEmailPassword, singInWithGoogle } from "../../firebase/providers";
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
    console.log({result});
    if ( !result.ok ) return dispatch( logOut(result.errorMessage))

    // dispatch ( login( result ) );    

  } 
}

export const startRegisterWithEmailAndPassword = ({displayName, email, password}) => {
  
  return async (dispatch) => {
    
    dispatch( chekingCredentials() );

    const {ok, uid, photoURL, errorMessage} = await registerUserWithEmailPassword({displayName, email, password});

    if (!ok) return dispatch( logOut({ errorMessage }));

    dispatch( login( { uid, displayName, email, photoURL}))

  }

}