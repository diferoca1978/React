import { GoogleAuthProvider, createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { FirebaseAuth } from "./config";


const googleProvider = new GoogleAuthProvider();

export const singInWithGoogle = async() => {
   try {

    const result = await signInWithPopup( FirebaseAuth, googleProvider );
    // const credentials = GoogleAuthProvider.credentialFromResult( result );
    const {displayName, email, photoURL ,uid} = result.user;

    return {
      ok: true,
      displayName, email, photoURL, uid
    }
   } catch (error) {
    
    const errorCode = error.code;
    const errorMessage = error.message;

    return {
      ok:false,
      errorCode,
      errorMessage
    }
   }
}

export const registerUserByEmailPassword = async({displayName, email, password}) => {
  try {

    const resp = await createUserWithEmailAndPassword(FirebaseAuth, email, password);
    const {uid, photoURL} = resp.user;
    console.log(resp);

    
  } catch (error) {
    
    const errorCode = error.code;
    const errorMessage = error.message;

    return {
      ok:false,
      errorCode,
      errorMessage
    }
  }
}   