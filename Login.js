import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Auto-redirect if already authenticated
  useEffect(() => {
    if (localStorage.getItem('isAuthenticated')) {
      navigate('/dashboard');
    }
  }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    // Basic validation
    if (!email.includes('@')) {
      setError('Please enter a valid email');
      setLoading(false);
      return;
    }
    if (password.length < 6) {
      setError('Password must be at least 6 characters');
      setLoading(false);
      return;
    }

    try {
      const response = await fetch('http://localhost:8080/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.message || 'Invalid credentials');
        return;
      }

      // Store token and redirect
      localStorage.setItem('isAuthenticated', 'true');
      localStorage.setItem('userEmail', email);
      if (data.token) localStorage.setItem('token', data.token);

      navigate('/dashboard');
    } catch (err) {
      setError('Error connecting to server. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="dark-login-container">
      <div className="dark-login-card">
        <div className="logo-container">
          <div className="quiz-logo">Q</div>
          <h1>Quizkarooo</h1>
        </div>

        <h2>Welcome back!</h2>
        <p className="subtitle">Login & start playing</p>

        {error && <div className="error-message">{error}</div>}

        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <input
              type="email"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <input
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading || !email || !password}
            className={loading ? 'loading' : ''}
          >
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>

        <div className="forgot-password">
          <Link to="/forgot-password">Forgot password?</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
