import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-text">
          <h2>About QuizKaroo</h2>
          <p>
            Welcome to <strong>QuizKaroo</strong>, your ultimate destination for fun and challenging quizzes. 
            Test your knowledge across various topics, compete with friends, and learn something new every day.
          </p>
          <p>
            Our platform offers a wide range of quizzes from general knowledge to specialized subjects, 
            designed to entertain and educate users of all ages.
          </p>
          <p>
            Whether you're looking to kill time, prepare for exams, or just challenge yourself, 
            QuizKaroo provides the perfect platform to expand your knowledge in an engaging way.
          </p>
          <div className="quiz-features">
            <h3>Key Features:</h3>
            <ul>
              <li>Diverse quiz categories</li>
              <li>Daily challenges</li>
              <li>Progress tracking</li>
              <li>Leaderboard competition</li>
              <li>Instant feedback</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;