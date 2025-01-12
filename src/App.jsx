import React, { useState } from "react";
import logo from "./assets/quizsnap-logo-label.png";

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
  },
  {
    question: "Which country was the first to develop the atomic bomb?",
    options: ["Germany", "United States", "Soviet Union", "Japan"],
    correctAnswer: 1,
  },
  {
    question: "Who was the Prime Minister of the UK during most of World War II?",
    options: ["Neville Chamberlain", "Winston Churchill", "Clement Attlee", "Anthony Eden"],
    correctAnswer: 1,
  },
  {
    question: "What battle is considered a major turning point in the Pacific during WWII?",
    options: ["Battle of Midway", "Battle of Stalingrad", "Battle of the Bulge", "Invasion of Normandy"],
    correctAnswer: 0,
  },
  {
    question: "What year did the United States enter World War II?",
    options: ["1939", "1941", "1942", "1945"],
    correctAnswer: 1,
  },
  {
    question: "Which conference in 1945 decided the post-war fate of Europe?",
    options: ["Yalta Conference", "Munich Conference", "Tehran Conference", "Versailles Conference"],
    correctAnswer: 0,
  },
  {
    question: "Which nation suffered the highest number of casualties in World War II?",
    options: ["United States", "Germany", "Soviet Union", "Japan"],
    correctAnswer: 2,
  },
  {
    question: "Which city was the first to be targeted by an atomic bomb?",
    options: ["Nagasaki", "Tokyo", "Hiroshima", "Kyoto"],
    correctAnswer: 2,
  },
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
    <div style={{ fontFamily: "Arial, sans-serif", minHeight: "100vh", backgroundColor: "#F1FAEE", display: "flex", flexDirection: "column" }}>
      <nav style={{ display: "flex", justifyContent: "center", padding: "10px 20px", backgroundColor: "#1D3557" }}>
        <img src={logo} alt="QuizSnap Logo" style={{ height: "60px" }} />
      </nav>

      <div style={{ flex: 1, display: "flex", justifyContent: "center", alignItems: "center" }}>
        <div className = "content-container" style={{ maxWidth: "700px", width: "100%", backgroundColor: "white", borderRadius: "10px", boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)", padding: "30px" }}>
          {!showQuiz ? (
            <div style={{ textAlign: "center" }}>
              <h1 style={{ fontSize: "36px", color: "#1D3557", marginBottom: "20px" }}>Welcome to QuizSnap!</h1>
              <p style={{ color: "#457B9D" }}>Test your knowledge with our curated quiz.</p>
              <button
                onClick={handleStartQuiz}
                style={{
                  padding: "12px 24px",
                  backgroundColor: "#E63946",
                  color: "white",
                  fontSize: "18px",
                  border: "none",
                  borderRadius: "10px",
                  cursor: "pointer",
                  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                  transition: "transform 0.2s",
                }}
              >
                Start Quiz
              </button>
            </div>
          ) : showReview ? (
            <div>
              <h2 style={{ marginBottom: "20px", color: "#1D3557" }}>Review Your Answers</h2>
              <ul style={{ listStyleType: "none", padding: 0 }}>
                {quizQuestions.map((question, index) => (
                  <li key={index} style={{ marginBottom: "30px", borderBottom: "1px solid #E0E0E0", paddingBottom: "15px" }}>
                    <p style={{ fontWeight: "bold", marginBottom: "10px", color: "#457B9D" }}>{question.question}</p>
                    {question.options.map((option, optionIndex) => {
                      const isCorrect = optionIndex === question.correctAnswer;
                      const isSelected = userAnswers[index] === optionIndex;
                      const backgroundColor = isCorrect ? "#2ECC71" : isSelected ? "#E63946" : "#FFFFFF";
                      const textColor = isCorrect || isSelected ? "white" : "#1D3557";

                      return (
                        <div
                          key={optionIndex}
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            padding: "12px",
                            marginBottom: "10px",
                            backgroundColor: backgroundColor,
                            border: "1px solid #ddd",
                            borderRadius: "8px",
                            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                            color: textColor,
                          }}
                        >
                          <span>{option}</span>
                          {isCorrect ? <span>✔</span> : isSelected ? <span>✖</span> : null}
                        </div>
                      );
                    })}
                  </li>
                ))}
              </ul>
              <button
                onClick={resetQuiz}
                style={{
                  padding: "12px 24px",
                  backgroundColor: "#457B9D",
                  color: "white",
                  fontSize: "18px",
                  border: "none",
                  borderRadius: "10px",
                  cursor: "pointer",
                  marginTop: "10px",
                }}
              >
                Back to Home
              </button>
            </div>
          ) : showScore ? (
            <div style={{ textAlign: "center" }}>
              <h2 style={{ fontSize: "28px", marginBottom: "20px", color: "#1D3557" }}>Your Score: {score} / {quizQuestions.length}</h2>
              <button
                onClick={resetQuiz}
                style={{
                  padding: "12px 24px",
                  backgroundColor: "#457B9D",
                  color: "white",
                  fontSize: "18px",
                  border: "none",
                  borderRadius: "10px",
                  cursor: "pointer",
                  marginRight: "10px",
                }}
              >
                Restart Quiz
              </button>
              <button
                onClick={handleReviewAnswers}
                style={{
                  padding: "12px 24px",
                  backgroundColor: "#A8DADC",
                  color: "#1D3557",
                  fontSize: "18px",
                  border: "none",
                  borderRadius: "10px",
                  cursor: "pointer",
                }}
              >
                Review Answers
              </button>
            </div>
          ) : (
            <div>
              <h3 style={{ marginBottom: "20px", color: "#1D3557" }}>{quizQuestions[currentQuestion].question}</h3>
              <div style={{ display: "grid", gap: "10px" }}>
                {quizQuestions[currentQuestion].options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswerOptionClick(index)}
                    style={{
                      padding: "15px",
                      fontSize: "18px",
                      border: "1px solid #ddd",
                      backgroundColor: "#FFFFFF",
                      borderRadius: "10px",
                      cursor: "pointer",
                      transition: "background-color 0.2s, transform 0.2s",
                      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                      color: "#1D3557",
                    }}
                    onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#A8DADC")}
                    onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#FFFFFF")}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      <footer style={{ textAlign: "center", padding: "10px 0", backgroundColor: "#1D3557", color: "white", marginTop: "auto" }}>
        <p>&copy; {currentYear} QuizSnap</p>
      </footer>
    </div>
  );
}

export default QuizApp;
