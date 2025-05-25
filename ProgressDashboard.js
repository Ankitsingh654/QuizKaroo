import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ProgressDashboard.css';

const ProgressDashboard = () => {
  const navigate = useNavigate();

  const [quizzesTaken, setQuizzesTaken] = useState(12);
  const [averageScore, setAverageScore] = useState(82);
  const [recentResults] = useState([
    { title: 'Python Quiz', score: 80 },
    { title: 'Java Quiz', score: 90 },
    { title: 'JavaScript Quiz', score: 75 },
  ]);

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h1>📊 Quiz Dashboard</h1>
        <div className="action-buttons">
          <button onClick={() => navigate('/create-quiz')} className="create-btn">+ Create New Quiz</button>
          <button onClick={() => alert('Starting quiz...')} className="start-btn">Start Quiz</button>
        </div>
      </div>

      <div className="stats-container">
        <div className="stat-card">
          <h2>Quizzes Taken</h2>
          <p>{quizzesTaken}</p>
        </div>
        <div className="stat-card">
          <h2>Average Score</h2>
          <p>{averageScore}%</p>
        </div>
      </div>

      <div className="quiz-section">
        <h2>Programming Quizzes</h2>
        <div className="quiz-list">
          <button className="quiz-tag">Python</button>
          <button className="quiz-tag">JavaScript</button>
          <button className="quiz-tag">Java</button>
          <button className="quiz-tag">C#</button>
        </div>
      </div>

      <div className="results-section">
        <h2>Recent Results</h2>
        <ul>
          {recentResults.map((res, idx) => (
            <li key={idx}>
              <span>{res.title}</span>
              <strong>{res.score}%</strong>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProgressDashboard;
