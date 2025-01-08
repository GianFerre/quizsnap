import React, { useState } from "react";

// List of quiz questions with answers and options.
const quizQuestions = [
  {
    question: "What event is generally considered the start of World War II?",
    options: [
      "The bombing of Pearl Harbor",
      "Germany's invasion of Poland",
      "The Battle of Britain",
      "The Treaty of Versailles signing",
    ],
    correctAnswer: 1,
  },
  {
    question: "Which countries formed the Axis Powers during World War II?",
    options: [
      "Germany, Italy, Japan",
      "Germany, France, Italy",
      "United States, Soviet Union, Britain",
      "Japan, China, Britain",
    ],
    correctAnswer: 0,
  },
  {
    question: "What was the main purpose of the D-Day invasion on June 6, 1944?",
    options: [
      "To assassinate Adolf Hitler",
      "To liberate Western Europe from Nazi control",
      "To stop Japan from expanding in the Pacific",
      "To defend North Africa",
    ],
    correctAnswer: 1,
  }
];

function QuizApp() {
  const [showQuiz, setShowQuiz] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [userAnswers, setUserAnswers] = useState([]);
  const [showReview, setShowReview] = useState(false);

  const handleAnswerOptionClick = (index) => {
    setUserAnswers([...userAnswers, index]);
    if (index === quizQuestions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < quizQuestions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const resetQuiz = () => {
    setScore(0);
    setCurrentQuestion(0);
    setShowScore(false);
    setUserAnswers([]);
    setShowReview(false);
    setShowQuiz(false);
  };

  const handleReviewAnswers = () => {
    setShowScore(false);
    setShowReview(true);
  };

  const handleStartQuiz = () => {
    setShowQuiz(true);
  };

  const currentYear = new Date().getFullYear();

  return (
    <div style={{ fontFamily: "Arial, sans-serif", minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      {/* Navbar */}
      <nav style={{ display: "flex", justifyContent: "space-between", padding: "10px 20px", backgroundColor: "#333", color: "white" }}>
        <div style={{ cursor: "pointer", fontWeight: "bold" }} onClick={resetQuiz}>
          WW2 Page
        </div>
      </nav>

      <div style={{ flex: "1" }}>
        {!showQuiz ? (
          <div style={{ padding: "20px", textAlign: "center" }}>
            <h1>Welcome to the World War II Quiz</h1>
            <button onClick={handleStartQuiz} style={{ padding: "10px 20px", cursor: "pointer", marginTop: "20px" }}>
              Start Quiz
            </button>
          </div>
        ) : showReview ? (
          <div style={{ padding: "20px" }}>
            <h2>Review Your Answers</h2>
            <ul>
              {quizQuestions.map((question, index) => (
                <li key={index} style={{ marginBottom: "20px" }}>
                  <p><strong>Q{index + 1}: {question.question}</strong></p>
                  {question.options.map((option, optionIndex) => (
                    <p key={optionIndex} style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "5px",
                      color: optionIndex === question.correctAnswer ? "green" : userAnswers[index] === optionIndex ? "red" : "#333",
                    }}>
                      {optionIndex === question.correctAnswer ? (
                        <span style={{ color: "green" }}>✔</span>
                      ) : userAnswers[index] === optionIndex ? (
                        <span style={{ color: "red" }}>✖</span>
                      ) : null}
                      {option}
                    </p>
                  ))}
                </li>
              ))}
            </ul>
            <button onClick={resetQuiz} style={{ padding: "10px 20px", cursor: "pointer" }}>
              Back to Home
            </button>
          </div>
        ) : showScore ? (
          <div style={{ padding: "20px" }}>
            <h2>Your Score: {score} / {quizQuestions.length}</h2>
            <button onClick={resetQuiz} style={{ marginTop: "10px", padding: "10px 20px", cursor: "pointer" }}>
              Restart Quiz
            </button>
            <button onClick={handleReviewAnswers} style={{ marginLeft: "10px", padding: "10px 20px", cursor: "pointer" }}>
              Review Answers
            </button>
          </div>
        ) : (
          <div style={{ padding: "20px" }}>
            <h3>Question {currentQuestion + 1} of {quizQuestions.length}</h3>
            <p>{quizQuestions[currentQuestion].question}</p>
            <div>
              {quizQuestions[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswerOptionClick(index)}
                  style={{
                    display: "block",
                    margin: "10px 0",
                    padding: "10px",
                    backgroundColor: "#f0f0f0",
                    border: "1px solid #ccc",
                    cursor: "pointer",
                  }}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer style={{ textAlign: "center", padding: "10px 0", backgroundColor: "#f0f0f0" }}>
        <p>&copy; {currentYear} WW2 Quiz Page</p>
      </footer>
    </div>
  );
}

export default QuizApp;
