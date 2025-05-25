import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Quiz = ({ questions }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const navigate = useNavigate();

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const handleNext = () => {
    if (selectedOption === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
    
    setSelectedOption(null);
    
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  const handleRetake = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
    setSelectedOption(null);
  };

  if (showResult) {
    return (
      <div className="quiz-result">
        <h2>Quiz Completed!</h2>
        <p>Your Score: {score}/{questions.length}</p>
        <button onClick={handleRetake}>Retake Quiz</button>
        <button onClick={() => navigate('/dashboard')}>Back to Dashboard</button>
      </div>
    );
  }

  return (
    <div className="quiz-container">
      <h2>Question {currentQuestion + 1}/{questions.length}</h2>
      <p>{questions[currentQuestion].question}</p>
      
      <div className="options">
        {questions[currentQuestion].options.map((option, index) => (
          <button
            key={index}
            className={`option ${selectedOption === option ? 'selected' : ''}`}
            onClick={() => handleOptionSelect(option)}
          >
            {option}
          </button>
        ))}
      </div>
      
      <button 
        className="next-btn" 
        onClick={handleNext}
        disabled={!selectedOption}
      >
        {currentQuestion === questions.length - 1 ? 'Finish' : 'Next'}
      </button>
    </div>
  );
};

export default Quiz;