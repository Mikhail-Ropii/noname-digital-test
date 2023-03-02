import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyCg_x3B-ADHlHftVw_cjASD8lUQYYLJFpU',
  authDomain: 'noname-digital-test.firebaseapp.com',
  projectId: 'noname-digital-test',
  storageBucket: 'noname-digital-test.appspot.com',
  messagingSenderId: '912477439973',
  appId: '1:912477439973:web:db5d530f70af94cef6d10c',
  measurementId: 'G-DMF08H95L5',
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const provider = new GoogleAuthProvider();

export const googleSignIn = () => signInWithPopup(auth, provider);
