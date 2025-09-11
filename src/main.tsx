import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Global error logging to help diagnose cross-origin script errors
window.addEventListener('error', (e) => {
  console.error('Global error:', {
    message: e.message,
    filename: (e as ErrorEvent).filename,
    lineno: (e as ErrorEvent).lineno,
    colno: (e as ErrorEvent).colno,
    error: (e as ErrorEvent).error,
  });
});

window.addEventListener('unhandledrejection', (e) => {
  console.error('Unhandled promise rejection:', e.reason);
});

createRoot(document.getElementById("root")!).render(<App />);
