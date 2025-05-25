import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Result = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { score, total } = location.state || { score: 0, total: 0 };

  return (
    <div style={{ padding: '30px', textAlign: 'center' }}>
      <h2>Quiz Completed!</h2>
      <p>Your Score: <strong>{score} / {total}</strong></p>
      <button
        onClick={() => navigate('/dashboard')}
        style={{
          marginTop: '20px',
          padding: '10px 20px',
          backgroundColor: '#4a6baf',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer'
        }}
      >
        Back to Dashboard
      </button>
    </div>
  );
};

export default Result;
