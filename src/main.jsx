import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App.jsx';
import SignUpScreen from './pages/SignUpScreen.jsx'; 
import ForgotPasswordScreen from './pages/ForgotPassword.jsx';  


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />  
        <Route path="/sign-up" element={<SignUpScreen />} /> 
        <Route path="/forgot-password" element={<ForgotPasswordScreen />} />
        {/* Remove or modify the /login route if needed */}
      </Routes>
    </Router>
  </StrictMode>
);