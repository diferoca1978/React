import { GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, updateProfile } from "firebase/auth";
import { FirebaseAuth } from "./config";


const googleProvider = new GoogleAuthProvider();

export const singInWithGoogle = async() => {
   try {

    const result = await signInWithPopup( FirebaseAuth, googleProvider );
    // const credentials = GoogleAuthProvider.credentialFromResult( result );
    // console.log({credentials});
    // const user = result.user //* From here we can extract the info of an user.
  
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

export const registerUserWithEmailPassword = async({displayName, email, password}) => {
  try {

    const result = await createUserWithEmailAndPassword(FirebaseAuth, email, password);
    const {uid, photoURL} = result.user
    
    // ? Update the displayName in firebase

    await updateProfile( FirebaseAuth.currentUser, { displayName } );


    return {
      ok:true,
      uid, photoURL, displayName, email, password
    }
    
  } catch (error) {

    return {
      ok: false,
      errorMessage: error.code
    }
  } 
}

export const signInWithEmailPassword = async({displayName, email, password}) => {
  try {

    const result = await signInWithEmailAndPassword(FirebaseAuth, email, password);
    console.log(result.user);
    const {uid, photoURL} = result.user

    return {
      ok:true,
      uid, photoURL, displayName, email, password
    }
    
  } catch (error) {
    return {
      ok: false,
      errorMessage: error.code
    }
  }
}