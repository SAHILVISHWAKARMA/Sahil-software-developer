import { initializeApp, getApps, getApp } from 'firebase/app';
import { getAnalytics, isSupported } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: "AIzaSyD-_boG2iB8SfUF_8GfQiaK9Ny_pp7VIrQ",
  authDomain: "sahil-vishwakarma-dev.firebaseapp.com",
  projectId: "sahil-vishwakarma-dev",
  storageBucket: "sahil-vishwakarma-dev.firebasestorage.app",
  messagingSenderId: "1017543392187",
  appId: "1:1017543392187:web:fd620096bfa0ba877de29e",
  measurementId: "G-BGM71HW8K9"
};

// Prevent duplicate initialization (important for Next.js)
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

// Initialize Analytics only in client-side environment if supported
let analytics = null;
if (typeof window !== 'undefined') {
  isSupported().then((supported) => {
    if (supported) {
      analytics = getAnalytics(app);
    }
  });
}

export { app, analytics };
export default app;
