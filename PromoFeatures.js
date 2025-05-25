import React from 'react';
import './PromoFeatures.css';

const PromoFeatures = () => {
  return (
    <div className="promo-container">
      <div className="promo-content">
        <header className="promo-header">
          <h1>QuizKkaroo</h1>
          <p>Sharpen your skills with fun and challenging quizzes on various topics.</p>
        </header>

        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">🧠</div>
            <h3>Interactive Quizzes</h3>
            <p>Choose from hundreds of quizzes with timer-based challenges to test your knowledge under pressure.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">📊</div>
            <h3>Progress Tracking</h3>
            <p>Track your scores, improve over time, and see detailed results after each quiz attempt.</p>
          </div>
        </div>

        <div className="chat-options">
          <h3>Quick Links</h3>
          <div className="options-grid">
            <button className="option-button" onClick={() => window.location.href = '/dashboard'}>Dashboard</button>
            <button className="option-button" onClick={() => window.location.href = '/create-quiz'}>Create Quiz</button>
            <button className="option-button" onClick={() => window.location.href = '/about'}>About</button>
            <button className="option-button" onClick={() => window.location.href = '/contact'}>Contact</button>
          </div>
        </div>

        <div className="blog-section">
          <h3>Blog & Tips:</h3>
          <p>Stay updated with quiz strategies, coding tips, and learning hacks.</p>
          <div className="auth-buttons">
            <button className="auth-button" onClick={() => window.location.href = '/signup'}>Join Now</button>
            <button className="auth-button" onClick={() => window.location.href = '/login'}>Sign In</button>
          </div>
        </div>

        <div className="features-grid">
          <div className="feature-card">
            <h3>Challenge Friends</h3>
            <p>Invite friends and challenge them to beat your high scores in exciting quiz battles.</p>
          </div>

          <div className="feature-card">
            <h3>Multiple Topics</h3>
            <p>Explore quizzes from general knowledge, coding, history, science, and many more categories.</p>
          </div>
        </div>

        <div className="cta-section">
          <h2>Ready to boost your knowledge?</h2>
          <div className="pricing-box">
            <p>Get started for free with unlimited quizzes.</p>
            <button className="auth-button" onClick={() => window.location.href = '/signup'}>Start Quiz Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromoFeatures;
