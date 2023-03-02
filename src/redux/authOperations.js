import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';
import { auth, googleSignIn } from '../firebase/config';
import { authSlice } from './authReducer';

export const signInWithGoogle = async ({ dispatch }) => {
  try {
    const { user } = await googleSignIn();
    dispatch(
      authSlice.actions.updateUserProfile({
        userEmail: user.email,
        userId: user.uid,
      })
    );
  } catch (error) {}
};

export const authSignIn =
  ({ email, password }) =>
  async (dispatch, getState) => {
    try {
      const { user } = await signInWithEmailAndPassword(auth, email, password);
      dispatch(
        authSlice.actions.updateUserProfile({
          userEmail: user.email,
          userId: user.uid,
        })
      );
      dispatch(authSlice.actions.stateChange({ isLoggedIn: true }));
    } catch (error) {
      console.log(error);
    }
  };

export const authSignUp =
  ({ email, password }) =>
  async (dispatch, getState) => {
    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      dispatch(
        authSlice.actions.updateUserProfile({
          userId: user.uid,
          userEmail: user.email,
        })
      );
      dispatch(authSlice.actions.stateChange({ isLoggedIn: true }));
    } catch (error) {
      console.log(error);
    }
  };

export const authChangeUser = () => async (dispatch, getState) => {
  try {
    onAuthStateChanged(auth, user => {
      if (user) {
        dispatch(
          authSlice.actions.updateUserProfile({
            userId: user.uid,
            userEmail: user.email,
          })
        );

        dispatch(authSlice.actions.stateChange({ isLoggedIn: true }));
      }
    });
  } catch (error) {
    console.log(error);
  }
};

export const authSignOut = () => async (dispatch, getState) => {
  try {
    await signOut(auth);
    dispatch(authSlice.actions.authSignOut());
  } catch (error) {
    console.log(error);
  }
};
