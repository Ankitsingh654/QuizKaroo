import React from 'react';
import Quiz from './Quiz';

const QuizPage = () => {
  // Sample questions - you would fetch these based on the language param
  const jsQuestions = [
    {
      question: "What is the output of '2' + 2 in JavaScript?",
      options: ["4", "22", "NaN", "Error"],
      correctAnswer: "22"
    },
    // Add more questions...
  ];

  return (
    <div className="quiz-page">
      <h1>JavaScript Quiz</h1>
      <Quiz questions={jsQuestions} />
    </div>
  );
};

export default QuizPage;