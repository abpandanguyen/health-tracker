import { useState } from 'react';
import './AuthPage.css';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import LoginForm from '../../components/LoginForm/LoginForm';

export default function AuthPage({ setUser }) {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);

  return (
    <div className="AuthPage">
      <h1>HealthTracker</h1>
      <button onClick={() => setShowLogin(currentShowLogin => !currentShowLogin)}>
      Log In
      </button>
        { showLogin ? <LoginForm setUser={setUser} /> : '' }
      <button onClick={() => setShowSignUp(currentShowSignUp => !currentShowSignUp)}>
      Sign Up
      </button>
        { showSignUp ? <SignUpForm setUser={setUser} /> : '' }
    </div>
  );
}

