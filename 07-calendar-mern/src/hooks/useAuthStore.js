//* this hook only have the purpose to perform any operation that have related by the auth store

import { useDispatch, useSelector } from 'react-redux';
import { calendarApi } from '../api';
import {
  clearErrorMsg,
  onChecking,
  onLogin,
  onLogout,
} from '../store/auth/auth.Slice';

export const useAuthStore = () => {
  const { status, user, errorMessage } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const startLogin = async ({ email, password }) => {
    dispatch(onChecking());

    try {
      const { data } = await calendarApi.post('/auth', { email, password });

      localStorage.setItem('token', data.user.token);
      localStorage.setItem('token-init-date', new Date().getTime());
      dispatch(onLogin({ name: data.user.name, uid: data.user.userId }));
    } catch (error) {
      dispatch(onLogout('Incorrect credentials'));
      setTimeout(() => {
        dispatch(clearErrorMsg());
      }, 10);
    }
  };

  return {
    // Properties
    status,
    user,
    errorMessage,

    // Methods
    startLogin,
  };
};
