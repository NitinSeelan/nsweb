'use client'
import React, { useState, useEffect } from 'react';

const Quiz = () => {
  const [time, setTime] = useState(30); // Timer set for 30 seconds
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [userAnswers, setUserAnswers] = useState({});
  
  const questions = [
    {
      question: "What is SSD",
      type: "multipleChoice",
      options: ["Solid State Drive", "SSolid Drive", "State Solid Driver", "Solid State Driver"],
      answer: "Solid State Drive"
    },
    {
      question: "What is HD",
      type: "multipleChoice",
      options: ["Hard Driver", "Resolution", "1080p", "Hard Drive"],
      answer: "Hard Drive"
    },
    {
      question: "Fill in the blank: What is Storage?",
      type: "shortAnswer",
      answer: "Not Memory["
    },
    {
      question: "Choose your favorite color:",
      type: "dropdown",
      options: ["Red", "Blue", "Green", "Yellow"],
      answer: "Blue"
    },
    {
      question: "Who wrote 'Hamlet'?",
      type: "shortAnswer",
      answer: "Shakespeare"
    }
  ];

  useEffect(() => {
    if (time > 0 && !quizCompleted) {
      const timer = setInterval(() => {
        setTime(prevTime => prevTime - 1);
      }, 1000);
      return () => clearInterval(timer);
    } else if (time === 0) {
      handleSubmit();
    }
  }, [time, quizCompleted]);

  const handleAnswer = (option) => {
    if (!answered) {
      setAnswered(true);
      const currentQuestion = questions[currentQuestionIndex];
      const correct = option === currentQuestion.answer;
      if (correct) setScore(prevScore => prevScore + 1);
      setUserAnswers({
        ...userAnswers,
        [currentQuestionIndex]: { answer: option, correct }
      });
    }
  };

  const handleTextInput = (e) => {
    const value = e.target.value;
    const currentQuestion = questions[currentQuestionIndex];
    const correct = value.toLowerCase() === currentQuestion.answer.toLowerCase();
    setUserAnswers({
      ...userAnswers,
      [currentQuestionIndex]: { answer: value, correct }
    });
    setAnswered(value.length > 0);  // Enable Next button if the input is not empty
  };

  const handleDropdown = (e) => {
    const value = e.target.value;
    const currentQuestion = questions[currentQuestionIndex];
    const correct = value === currentQuestion.answer;
    setUserAnswers({
      ...userAnswers,
      [currentQuestionIndex]: { answer: value, correct }
    });
    setAnswered(value !== ""); // Enable Next button when a valid option is selected
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prevIndex => prevIndex + 1);
      setAnswered(false);
    } else {
      handleSubmit();
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && answered) {
      handleNext();
    }
  };

  const handleSubmit = () => {
    setQuizCompleted(true);
  };

  const getMasteryLevel = () => {
    switch (score) {
      case 5:
        return "Mastery(4)";
      case 4:
        return "Proficient(3)";
      case 3:
      case 2:
        return "Approaching(2)";
      case 1:
        return "Beginning(1)";
      default:
        return "No Evidence(0)";
    }
  };

  const questionStyle = {
    fontSize: '22px',
    marginBottom: '20px',
    color: '#34495e',
    fontWeight: 'bold',
    textAlign: 'center',
  };

  const timerStyle = {
    fontSize: '30px',
    color: '#e74c3c',
    fontWeight: 'bold',
    marginBottom: '20px',
    textAlign: 'center',
  };

  const inputStyle = {
    padding: '12px',
    fontSize: '16px',
    marginBottom: '15px',
    width: '80%',
    borderRadius: '5px',
    border: '1px solid #ccc',
  };

  const buttonStyle = {
    padding: '12px 25px',
    fontSize: '18px',
    margin: '10px',
    backgroundColor: '#3498db',
    color: 'white',
    border: 'none',
    cursor: 'pointer',
    borderRadius: '5px',
    fontWeight: 'bold',
    transition: 'background-color 0.3s ease',
  };

  const submitButtonStyle = {
    ...buttonStyle,
    backgroundColor: '#27ae60',
    fontSize: '20px',
    marginTop: '30px',
  };

  const nextButtonStyle = {
    ...buttonStyle,
    backgroundColor: '#f39c12',
    fontSize: '18px',
    marginTop: '20px',
  };

  const quizContainerStyle = {
    maxWidth: '650px',
    margin: '0 auto',
    padding: '40px',
    backgroundColor: '#ecf0f1',
    borderRadius: '15px',
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
  };

  const questionBoxStyle = {
    backgroundColor: '#ffffff',
    padding: '25px',
    borderRadius: '10px',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
    marginBottom: '30px',
  };

  return (
    <div style={quizContainerStyle}>
      {!quizCompleted ? (
        <>
          <div style={timerStyle}>
            Time Remaining: {time}s
          </div>
          <div style={questionBoxStyle}>
            <div style={questionStyle}>
              <h2>{questions[currentQuestionIndex].question}</h2>
            </div>

            {questions[currentQuestionIndex].type === "multipleChoice" && (
              <div style={{ textAlign: 'center' }}>
                {questions[currentQuestionIndex].options.map((option, index) => (
                  <button
                    key={index}
                    style={buttonStyle}
                    onClick={() => handleAnswer(option)}
                    disabled={answered}
                  >
                    {option}
                  </button>
                ))}
                {userAnswers[currentQuestionIndex] && userAnswers[currentQuestionIndex].answer && (
                  <p>Selected answer: {userAnswers[currentQuestionIndex].answer}</p>
                )}
              </div>
            )}

            {questions[currentQuestionIndex].type === "fillInTheBlank" && (
              <div>
                <input
                  style={inputStyle}
                  type="text"
                  placeholder="Your answer"
                  onBlur={handleTextInput}
                  onKeyDown={handleKeyPress}  // Add event handler to allow Enter key
                />
                {userAnswers[currentQuestionIndex] && userAnswers[currentQuestionIndex].answer && (
                  <p>Selected answer: {userAnswers[currentQuestionIndex].answer}</p>
                )}
              </div>
            )}

            {questions[currentQuestionIndex].type === "dropdown" && (
              <div>
                <select
                  style={inputStyle}
                  onChange={handleDropdown}
                >
                  <option value="">Select an option</option>
                  {questions[currentQuestionIndex].options.map((option, index) => (
                    <option key={index} value={option}>{option}</option>
                  ))}
                </select>
                {userAnswers[currentQuestionIndex] && userAnswers[currentQuestionIndex].answer && (
                  <p>Selected answer: {userAnswers[currentQuestionIndex].answer}</p>
                )}
              </div>
            )}

            {questions[currentQuestionIndex].type === "shortAnswer" && (
              <div>
                <input
                  style={inputStyle}
                  type="text"
                  placeholder="Your answer"
                  onBlur={handleTextInput}
                  onKeyDown={handleKeyPress}  // Add event handler to allow Enter key
                />
                {userAnswers[currentQuestionIndex] && userAnswers[currentQuestionIndex].answer && (
                  <p>Selected answer: {userAnswers[currentQuestionIndex].answer}</p>
                )}
              </div>
            )}

            <button
              style={nextButtonStyle}
              onClick={handleNext}
              disabled={!answered}
            >
              Next
            </button>
          </div>
        </>
      ) : (
        <div style={{ textAlign: 'center', fontSize: '20px', fontWeight: 'bold' }}>
          <h2>Quiz Completed!</h2>
          <p>Your score is {score} out of {questions.length}</p>
          <p>{getMasteryLevel()}</p>
        </div>
      )}
    </div>
  );
};

export default Quiz;
