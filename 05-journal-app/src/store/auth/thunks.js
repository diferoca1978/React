import { logOutFirebase, registerUserWithEmailPassword, signInWithEmailPassword, singInWithGoogle } from "../../firebase/providers";
import { clearLogOut } from "../journal";
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

export const startLoginWithEmailPassword = ({email, password }) => {

    return async (dispatch) => {
       
      dispatch(chekingCredentials());

      const result = await signInWithEmailPassword({ email, password});
      console.log(result);

      if(!result.ok) return dispatch(logOut(result));

      dispatch(login(result));

    }

  }

export const startLogOut = () => {
  return async( dispatch ) => {

    await logOutFirebase();
    dispatch(clearLogOut())
    dispatch(logOut());

  } 
}