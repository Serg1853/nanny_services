// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBhqBd2ngy0CRLQlQx0I7WP8jGA0BuU564',
  authDomain: 'nanny-services-7b353.firebaseapp.com',
  projectId: 'nanny-services-7b353',
  storageBucket: 'nanny-services-7b353.appspot.com',
  messagingSenderId: '318626049287',
  appId: '1:318626049287:web:750089802fd375e58629a2',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
