import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';
import './CreateQuiz.css';

const CreateQuiz = () => {
  const [quizTitle, setQuizTitle] = useState('');
  const [questions, setQuestions] = useState([
    { questionText: '', options: ['', '', '', ''], correctAnswerIndex: 0 },
  ]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);
  
  const navigate = useNavigate();
  const { isLoggedIn, user } = useAuth();

  // Redirect to login if not authenticated
  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/login', { state: { from: '/create-quiz' } });
    }
  }, [isLoggedIn, navigate]);

  const addQuestion = () => {
    setQuestions([
      ...questions,
      { questionText: '', options: ['', '', '', ''], correctAnswerIndex: 0 },
    ]);
  };

  const removeQuestion = (index) => {
    if (questions.length > 1) {
      setQuestions(questions.filter((_, i) => i !== index));
    }
  };

  const handleQuestionChange = (index, value) => {
    const newQuestions = [...questions];
    newQuestions[index].questionText = value;
    setQuestions(newQuestions);
  };

  const handleOptionChange = (qIndex, optionIndex, value) => {
    const newQuestions = [...questions];
    newQuestions[qIndex].options[optionIndex] = value;
    setQuestions(newQuestions);
  };

  const handleCorrectAnswerChange = (qIndex, optionIndex) => {
    const newQuestions = [...questions];
    newQuestions[qIndex].correctAnswerIndex = optionIndex;
    setQuestions(newQuestions);
  };

  const validateQuiz = () => {
    if (!quizTitle.trim()) {
      setError('Quiz title is required');
      return false;
    }
    
    for (const [index, question] of questions.entries()) {
      if (!question.questionText.trim()) {
        setError(`Question ${index + 1} cannot be empty`);
        return false;
      }
      
      for (const [optIndex, option] of question.options.entries()) {
        if (!option.trim()) {
          setError(`Option ${optIndex + 1} in Question ${index + 1} cannot be empty`);
          return false;
        }
      }
    }
    
    setError(null);
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateQuiz()) return;
    
    setIsSubmitting(true);
    
    try {
      const quizData = { 
        title: quizTitle, 
        questions,
        createdBy: user?.userId // Include creator info if available
      };

      const response = await fetch('/api/quizzes', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify(quizData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to save quiz');
      }

      // Success handling
      alert('Quiz saved successfully!');
      setQuizTitle('');
      setQuestions([{ questionText: '', options: ['', '', '', ''], correctAnswerIndex: 0 }]);
      
    } catch (err) {
      console.error('Error saving quiz:', err);
      setError(err.message || 'Error saving quiz');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="quiz-container">
      <h1 className="quiz-header">📝 Create a New Quiz</h1>
      
      {error && <div className="error-message">{error}</div>}
      
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="quiz-title"
          placeholder="Enter Quiz Title"
          value={quizTitle}
          onChange={(e) => setQuizTitle(e.target.value)}
          required
        />

        {questions.map((q, qIndex) => (
          <div key={qIndex} className="question-card">
            <input
              type="text"
              className="question-input"
              placeholder={`Question ${qIndex + 1}`}
              value={q.questionText}
              onChange={(e) => handleQuestionChange(qIndex, e.target.value)}
              required
            />
            
            {q.options.map((option, oIndex) => (
              <div key={oIndex} className="option-row">
                <input
                  type="radio"
                  name={`correctAnswer-${qIndex}`}
                  checked={q.correctAnswerIndex === oIndex}
                  onChange={() => handleCorrectAnswerChange(qIndex, oIndex)}
                />
                <input
                  type="text"
                  className="option-input"
                  placeholder={`Option ${oIndex + 1}`}
                  value={option}
                  onChange={(e) => handleOptionChange(qIndex, oIndex, e.target.value)}
                  required
                />
              </div>
            ))}
            
            <button
              type="button"
              className="remove-btn"
              onClick={() => removeQuestion(qIndex)}
              disabled={questions.length === 1}
            >
              ❌ Remove Question
            </button>
          </div>
        ))}

        <div className="button-group">
          <button 
            type="button" 
            className="add-btn" 
            onClick={addQuestion}
          >
            ➕ Add Question
          </button>
          
          <button 
            type="submit" 
            className="submit-btn" 
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Saving...' : '💾 Save Quiz'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateQuiz;