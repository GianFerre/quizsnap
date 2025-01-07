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
    correctAnswer: 1, // Index of the correct answer in the options array.
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
    question: "What was the name of the secret U.S. project to develop the atomic bomb?",
    options: [
      "Operation Overlord",
      "The Manhattan Project",
      "Operation Torch",
      "The Enigma Code",
    ],
    correctAnswer: 1,
  },
  {
    question: "Who was the Prime Minister of the United Kingdom for most of World War II?",
    options: ["Neville Chamberlain", "Winston Churchill", "Clement Attlee", "Franklin D. Roosevelt"],
    correctAnswer: 1,
  },
  {
    question: "Which battle is considered a turning point for the Allies in the Eastern Front?",
    options: [
      "The Battle of Midway",
      "The Battle of the Bulge",
      "The Battle of Stalingrad",
      "The Invasion of Normandy",
    ],
    correctAnswer: 2,
  },
  {
    question: "Which country was invaded by Germany during Operation Barbarossa?",
    options: ["France", "The Soviet Union", "Greece", "Finland"],
    correctAnswer: 1,
  },
  {
    question: "What agreement allowed Germany to annex the Sudetenland in 1938?",
    options: [
      "The Yalta Conference",
      "The Treaty of Versailles",
      "The Munich Agreement",
      "The Potsdam Conference",
    ],
    correctAnswer: 2,
  },
  {
    question: "Which major World War II battle took place in the Pacific Theater and is known for the famous image of soldiers raising the U.S. flag?",
    options: ["The Battle of Okinawa", "The Battle of Midway", "The Battle of Iwo Jima", "The Battle of Guadalcanal"],
    correctAnswer: 2,
  },
  {
    question: "When did World War II officially end?",
    options: [
      "September 1, 1945",
      "May 8, 1945",
      "August 6, 1945",
      "September 2, 1945",
    ],
    correctAnswer: 3,
  },
];

function QuizApp() {
  // State to track the current question index.
  const [currentQuestion, setCurrentQuestion] = useState(0);
  // State to track the user's score.
  const [score, setScore] = useState(0);
  // State to determine if the score should be shown.
  const [showScore, setShowScore] = useState(false);

  // Function to handle when a user selects an answer option.
  const handleAnswerOptionClick = (index) => {
    // Check if the selected option is correct.
    if (index === quizQuestions[currentQuestion].correctAnswer) {
      setScore(score + 1); // Increment score if the answer is correct.
    }

    // Move to the next question or show the score if it was the last question.
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < quizQuestions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true); // End of quiz.
    }
  };

  // Function to reset the quiz.
  const resetQuiz = () => {
    setScore(0); // Reset score to 0.
    setCurrentQuestion(0); // Start back at the first question.
    setShowScore(false); // Hide the score display.
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>World War II Quiz</h1>
      {showScore ? (
        <div>
          {/* Display the final score and a button to restart the quiz. */}
          <h2>Your Score: {score} / {quizQuestions.length}</h2>
          <button onClick={resetQuiz} style={{ marginTop: "10px", padding: "10px 20px", cursor: "pointer" }}>
            Restart Quiz
          </button>
        </div>
      ) : (
        <div>
          {/* Display the current question and its options. */}
          <h3>Question {currentQuestion + 1} of {quizQuestions.length}</h3>
          <p>{quizQuestions[currentQuestion].question}</p>
          <div>
            {quizQuestions[currentQuestion].options.map((option, index) => (
              <button
                key={index} // Unique key for each option button.
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
  );
}

export default QuizApp;
