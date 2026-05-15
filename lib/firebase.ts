import { initializeApp, getApps } from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyDkKlLT-Ucj2A-Rw3CANy5O56q_USFl_Fs',
  authDomain: 'sahil-vishwakarma.firebaseapp.com',
  projectId: 'sahil-vishwakarma',
  storageBucket: 'sahil-vishwakarma.firebasestorage.app',
  messagingSenderId: '502537642856',
  appId: '1:502537642856:web:2e7d88e4eaa8091a752cdd',
  measurementId: 'G-WMN9KS3FF4',
};

// Prevent duplicate initialization (important for Next.js)
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

export default app;
