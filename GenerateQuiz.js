import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const GenerateQuiz = () => {
  const [quizzes, setQuizzes] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:8080/api/quizzes')
      .then(res => setQuizzes(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h2>Available Quizzes</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '15px' }}>
        {quizzes.map(quiz => (
          <div key={quiz.id} style={{
            border: '1px solid #ccc',
            padding: '10px',
            borderRadius: '8px',
            width: '200px',
            backgroundColor: '#fff',
          }}>
            <h4>{quiz.title}</h4>
            <p>Category: {quiz.category}</p>
            <button
              style={{ marginTop: '10px', backgroundColor: '#4a6baf', color: 'white', padding: '6px 10px', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
              onClick={() => navigate(`/quiz/${quiz.id}`)}
            >
              Start Quiz
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GenerateQuiz;
