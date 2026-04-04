import { initializeApp, getApps } from 'firebase/app';

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY ?? 'AIzaSyDkKlLT-Ucj2A-Rw3CANy5O56q_USFl_Fs',
  authDomain: 'sahil-vishwakarma.firebaseapp.com',
  projectId: 'sahil-vishwakarma',
  storageBucket: 'sahil-vishwakarma.firebasestorage.app',
  messagingSenderId: '502537642856',
  appId: '1:502537642856:web:7e37127de8c6c412752cdd',
  measurementId: 'G-79REJ5XRBQ',
};

// Prevent duplicate initialization (important for Next.js)
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

export default app;
