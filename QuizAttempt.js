// src/pages/QuizAttempt.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const QuizAttempt = () => {
  const { id } = useParams();
  const [quiz, setQuiz] = useState(null);
  const [answers, setAnswers] = useState({});
  const [score, setScore] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:8080/api/quizzes/${id}`)
      .then(res => setQuiz(res.data))
      .catch(err => console.error(err));
  }, [id]);

  const handleChange = (questionId, option) => {
    setAnswers(prev => ({ ...prev, [questionId]: option }));
  };

  const handleSubmit = () => {
    axios.post('http://localhost:8080/api/quizzes/submit', {
      quizId: id,
      answers: answers
    })
    .then(res => setScore(res.data.score))
    .catch(err => console.error(err));
  };

  if (!quiz) return <p>Loading quiz...</p>;
  if (score !== null) return <h2>Your Score: {score}/{quiz.questions.length}</h2>;

  return (
    <div style={{ padding: '30px' }}>
      <h2>{quiz.title}</h2>
      {quiz.questions.map(q => (
        <div key={q.id} style={{ marginBottom: '20px' }}>
          <p><strong>{q.text}</strong></p>
          {q.options.map(option => (
            <label key={option} style={{ display: 'block', marginLeft: '15px' }}>
              <input
                type="radio"
                name={`question-${q.id}`}
                value={option}
                checked={answers[q.id] === option}
                onChange={() => handleChange(q.id, option)}
              /> {option}
            </label>
          ))}
        </div>
      ))}
      <button onClick={handleSubmit}>Submit Quiz</button>
    </div>
  );
};

export default QuizAttempt;
