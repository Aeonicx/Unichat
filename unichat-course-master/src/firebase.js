import firebase from 'firebase/app';
import 'firebase/auth';

export const auth = firebase
  .initializeApp({
    apiKey: 'AIzaSyB8p9wgj_JxPc_HYmZql-XELHdWukfCiG8',
    authDomain: 'unichat-38873.firebaseapp.com',
    projectId: 'unichat-38873',
    storageBucket: 'unichat-38873.appspot.com',
    messagingSenderId: '928128431743',
    appId: '1:928128431743:web:86db8155b2b4540a3f314a',
  })
  .auth();
