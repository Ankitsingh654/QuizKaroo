import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Auth.css';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (!name || !email || !password) {
      setError('Please fill in all fields');
      return;
    }

    try {
      const response = await fetch('http://localhost:8080/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password })
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.message || 'Registration failed');
      } else {
        setSuccess('Registration successful! Redirecting to login...');
        setTimeout(() => navigate('/login'), 2000);
      }
    } catch (err) {
      setError('Server error. Please try again.');
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-header">
        <h1 className="logo">Quizkarooo</h1>
        <p className="tagline">Take a Quiz, be more creative in your work</p>
      </div>

      <div className="auth-card">
        <h2>Welcome to Quizkarooo</h2>
        <p className="subtitle">Register your account</p>

        {error && <div className="error-message">{error}</div>}
        {success && <div className="success-message">{success}</div>}

        <form onSubmit={handleSignup}>
          <div className="input-group">
            <label>Enter Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Pranav Kulkarni"
            />
          </div>

          <div className="input-group">
            <label>Enter Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Pranav@gmail.com"
            />
          </div>

          <div className="input-group">
            <label>Enter Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
            />
          </div>

          <button type="submit" className="auth-btn">
            Sign Up
          </button>
        </form>

        <div className="auth-footer">
          <p>
            Already have an account?{' '}
            <Link to="/login" className="auth-link">Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
