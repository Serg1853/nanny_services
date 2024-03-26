import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import App from './App.jsx'; 
import './index.css';
import SignUp from './components/Auth/SignUp.jsx';
import SignIn from './components/Auth/SignIn.jsx';
import AuthDetails from './components/Auth/AuthDetails.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/nanny_services">
      <SignUp />
      <SignIn />
      <AuthDetails />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
