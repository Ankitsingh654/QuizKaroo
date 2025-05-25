import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Login from './components/Login';
import Dashboard from './components/ProgressDashboard';
import QuizPage from './components/QuizPage';
import Result from './components/Result';
import ForgotPassword from './components/ForgotPassword';
import SignUp from './components/SignUp';
import Navbar from './components/Navbar';
import About from './components/About';
import Contact from './components/Contact';
import CreateQuiz from './components/CreateQuiz';

import PromoFeatures from './components/PromoFeatures';
import { useAuth, AuthProvider } from './components/AuthContext'; // ✅ Add this line

import './CreateQuiz.css';
import './components/Contact.css';

// ✅ Replace localStorage check with context
const ProtectedRoute = ({ children }) => {
  const { isLoggedIn } = useAuth();
  return isLoggedIn ? children : <Navigate to="/login" replace />;
};

const PublicOnlyRoute = ({ children }) => {
  const { isLoggedIn } = useAuth();
  return !isLoggedIn ? children : <Navigate to="/dashboard" replace />;
};

function App() {
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<PromoFeatures />} />

          {/* Public-only routes */}
          <Route
            path="/login"
            element={
              <PublicOnlyRoute>
                <Login />
              </PublicOnlyRoute>
            }
          />
          <Route
            path="/signup"
            element={
              <PublicOnlyRoute>
                <SignUp />
              </PublicOnlyRoute>
            }
          />
          <Route
            path="/forgot-password"
            element={
              <PublicOnlyRoute>
                <ForgotPassword />
              </PublicOnlyRoute>
            }
          />

          {/* Always accessible public routes */}
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />

          {/* Authenticated routes only */}
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/quiz/:id"
            element={
              <ProtectedRoute>
                <QuizPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/result"
            element={
              <ProtectedRoute>
                <Result />
              </ProtectedRoute>
            }
          />
          <Route
            path="/create-quiz"
            element={
              <ProtectedRoute>
                <CreateQuiz />
              </ProtectedRoute>
            }
          />

          {/* Catch-all fallback */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
