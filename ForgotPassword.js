import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ForgotPassword.css';
import { Link } from 'react-router-dom';


const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleResetPassword = () => {
    if (!email) {
      setMessage('Please enter your email or Mobile Number');
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setMessage('Please enter a valid email address or Mobile Number');
      return;
    }

    // Normally, you would send the email to your backend to handle the reset process
    setMessage('A password reset link has been sent to your email.');
    setTimeout(() => navigate('/login'), 3000); // Redirect to login after 3 seconds
  };

  return (
    <div className="forgot-password-container">
      <h2>Forgot Password</h2>
      {message && <div className="message">{message}</div>}
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={handleResetPassword}>Reset Password</button>
      <p>Already have an account? <Link to="/">LoginPage</Link></p>
    </div>
  );
};

export default ForgotPassword;
