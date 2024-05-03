import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { useDispatch, useSelector } from 'react-redux';
import { FirebaseAuth } from '../firebase/config';
import { logOut, login } from '../store/auth';

export const useCheckAuthentication = () => {
  
  const { status } = useSelector((state) => state.auth);
    const dispatch = useDispatch();
  
    useEffect(() => {
      onAuthStateChanged(FirebaseAuth, (user) => {
        if (!user) return dispatch(logOut());
  
        const { uid, email, displayName, photoURL } = user;
        dispatch(login({ uid, email, displayName, photoURL }));
      });
    }, []);

    return {
      status
    }
}

