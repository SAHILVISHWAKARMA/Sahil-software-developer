import { initializeApp, getApps } from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyBcYMc4yYJSfpwTerh8LdCOKVAW6Kf9RXQ',
  authDomain: 'sahil-vishwakarma-50e27.firebaseapp.com',
  projectId: 'sahil-vishwakarma-50e27',
  storageBucket: 'sahil-vishwakarma-50e27.firebasestorage.app',
  messagingSenderId: '1001664083108',
  appId: '1:1001664083108:web:dde307829ece7956202231',
  measurementId: 'G-5CXV2EY074',
};

// Prevent duplicate initialization (important for Next.js)
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

export default app;
