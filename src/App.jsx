
import React, { useState } from "react";
import logo from "./assets/quizsnap-logo-label.png";
import "./index.css";

// Full quiz data
const quizzes = {
  filipinoHistory: [
    { question: "Who is known as the 'Father of the Philippine Revolution'?", options: ["Emilio Aguinaldo", "José Rizal", "Andres Bonifacio", "Apolinario Mabini"], correctAnswer: 2 },
    { question: "What year did the Philippines gain independence from Spain?", options: ["1896", "1898", "1901", "1946"], correctAnswer: 1 },
    { question: "What is the name of the treaty that ended the Spanish-American War?", options: ["Treaty of Manila", "Treaty of Paris", "Treaty of Tordesillas", "Treaty of Versailles"], correctAnswer: 1 },
    { question: "Who was the first president of the Republic of the Philippines?", options: ["Manuel L. Quezon", "Emilio Aguinaldo", "Jose P. Laurel", "Sergio Osmeña"], correctAnswer: 1 },
    { question: "What event marked the beginning of the Philippine-American War in 1899?", options: ["The Battle of Manila Bay", "The signing of the Treaty of Paris", "The Balangiga Massacre", "The San Juan Bridge Incident"], correctAnswer: 3 },
    { question: "What was the name of the secret revolutionary society founded by Andres Bonifacio?", options: ["La Liga Filipina", "Katipunan", "Gomburza", "Sanduguan"], correctAnswer: 1 },
    { question: "Which three priests were executed in 1872 and became martyrs of the Philippine independence movement?", options: ["Rizal, Bonifacio, Mabini", "Gomburza (Gomez, Burgos, Zamora)", "Aguinaldo, Luna, del Pilar", "Magsaysay, Roxas, Laurel"], correctAnswer: 1 },
    { question: "What ancient script was used in the Philippines before Spanish colonization?", options: ["Alibata (Baybayin)", "Hiragana", "Sanskrit", "Latin"], correctAnswer: 0 },
    { question: "When was the People Power Revolution that led to the end of Ferdinand Marcos' regime?", options: ["1983", "1986", "1989", "1991"], correctAnswer: 1 },
    { question: "Which guerilla movement fought against the Japanese occupation during World War II?", options: ["Hukbalahap", "Sanduguan", "Bayanihan", "Makabayan"], correctAnswer: 0 },
  ],
  reactJS: [
    { question: "What is React primarily used for?", options: ["Server-side scripting", "Building user interfaces", "Database management", "Game development"], correctAnswer: 1 },
    { question: "Which company developed React.js?", options: ["Google", "Facebook (Meta)", "Microsoft", "Twitter"], correctAnswer: 1 },
    { question: "What is JSX in React?", options: ["A JavaScript XML-like syntax", "A CSS preprocessor", "A React framework", "A back-end tool"], correctAnswer: 0 },
    { question: "What hook is used to manage component state in React?", options: ["useEffect", "useState", "useContext", "useReducer"], correctAnswer: 1 },
    { question: "Which of these is a correct way to create a functional component in React?", options: ["function MyComponent() {}", "class MyComponent extends React.Component {}", "const MyComponent = () => {}", "Both A and C"], correctAnswer: 3 },
    { question: "What is the virtual DOM in React?", options: ["A copy of the real DOM used for optimization", "A new JavaScript library", "A built-in React database", "A way to manage API requests"], correctAnswer: 0 },
    { question: "Which lifecycle method is used for side effects like API calls?", options: ["componentDidMount", "componentWillUnmount", "useEffect", "Both A and C"], correctAnswer: 3 },
    { question: "What is the purpose of the 'key' prop in React lists?", options: ["To set unique values for styling", "To help React identify which items changed", "To add animations", "To define event handlers"], correctAnswer: 1 },
    { question: "What does React use to render UI updates efficiently?", options: ["Server-side rendering", "The real DOM", "The virtual DOM", "CSS styling"], correctAnswer: 2 },
    { question: "What is the default state management library used in React?", options: ["Redux", "Context API", "MobX", "None, React has built-in state management"], correctAnswer: 3 },
  ],
  greekMythology: [
    { question: "Who is the Greek god of the sea?", options: ["Zeus", "Poseidon", "Hades", "Apollo"], correctAnswer: 1 },
    { question: "In Norse mythology, what is the name of Thor's hammer?", options: ["Gungnir", "Mjölnir", "Excalibur", "Draupnir"], correctAnswer: 1 },
    { question: "Which Egyptian god is known as the god of the underworld?", options: ["Anubis", "Ra", "Osiris", "Horus"], correctAnswer: 2 },
    { question: "Who is the Roman counterpart of the Greek goddess Athena?", options: ["Venus", "Juno", "Minerva", "Diana"], correctAnswer: 2 },
    { question: "What creature in Greek mythology has the body of a lion, the face of a woman, and wings?", options: ["Sphinx", "Chimera", "Hydra", "Griffin"], correctAnswer: 0 },
    { question: "What is the name of the giant wolf in Norse mythology who is foretold to kill Odin?", options: ["Fenrir", "Jörmungandr", "Sleipnir", "Sköll"], correctAnswer: 0 },
    { question: "In Hindu mythology, who is the preserver of the universe?", options: ["Shiva", "Vishnu", "Brahma", "Indra"], correctAnswer: 1 },
    { question: "What is the name of the fire-breathing creature with the head of a lion, the body of a goat, and the tail of a serpent?", options: ["Cerberus", "Chimera", "Pegasus", "Minotaur"], correctAnswer: 1 },
    { question: "Which mythological figure flew too close to the sun, melting his wax wings?", options: ["Daedalus", "Icarus", "Theseus", "Perseus"], correctAnswer: 1 },
    { question: "What tree is considered sacred in Norse mythology and connects the nine worlds?", options: ["Yggdrasil", "Ashvattha", "Baobab", "Banyan"], correctAnswer: 0 },
  ],
  scienceTrivia: [
    { question: "What is the chemical symbol for water?", options: ["H2O", "O2", "CO2", "H2"], correctAnswer: 0 },
    { question: "Which planet is known as the Red Planet?", options: ["Mars", "Venus", "Jupiter", "Saturn"], correctAnswer: 0 },
    { question: "What is the powerhouse of the cell?", options: ["Nucleus", "Mitochondria", "Ribosome", "Chloroplast"], correctAnswer: 1 },
    { question: "What gas do plants absorb from the atmosphere?", options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"], correctAnswer: 1 },
    { question: "What is the most abundant gas in Earth's atmosphere?", options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"], correctAnswer: 1 },
    { question: "What planet is the hottest in our solar system?", options: ["Venus", "Mercury", "Earth", "Mars"], correctAnswer: 0 },
    { question: "What is the hardest natural substance on Earth?", options: ["Gold", "Iron", "Diamond", "Quartz"], correctAnswer: 2 },
    { question: "What is the boiling point of water at sea level?", options: ["100°C", "90°C", "120°C", "80°C"], correctAnswer: 0 },
    { question: "Which part of the human body contains the smallest bones?", options: ["Ear", "Hand", "Foot", "Spine"], correctAnswer: 0 },
    { question: "What type of blood cells help fight infections?", options: ["Red Blood Cells", "White Blood Cells", "Platelets", "Plasma"], correctAnswer: 1 },
  ],
};

function QuizApp() {
  const [selectedQuiz, setSelectedQuiz] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [showReview, setShowReview] = useState(false);
  const [userAnswers, setUserAnswers] = useState([]);

  const handleQuizSelection = (quiz) => {
    setSelectedQuiz(quizzes[quiz]);
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
    setShowReview(false);
    setUserAnswers([]);
  };

  const handleAnswerOptionClick = (index) => {
    setUserAnswers([...userAnswers, index]);
    if (index === selectedQuiz[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < selectedQuiz.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const handleReviewAnswers = () => {
    setShowScore(false);
    setShowReview(true);
  };

  const resetQuiz = () => {
    setSelectedQuiz(null);
  };

  const currentYear = new Date().getFullYear();

  return (
    <div className="app-container">
      <nav className="navbar">
        <img src={logo} alt="QuizSnap Logo" className="quizSnapLogo"/>
      </nav>
      <div className="mainContentContainer">
        <div className="content-container">
          {!selectedQuiz ? (
            <div className="containerText">
              <h1 className="mainTitle">Welcome to QuizSnap!</h1>
              <p className="mainSub">Choose a subject to start your quiz.</p>
              <div className="subjects">
                <button
                  onClick={() => handleQuizSelection("filipinoHistory")}
                  className="filipinoHistoryButton"
                >
                  Filipino History
                </button>
                <button
                  onClick={() => handleQuizSelection("greekMythology")}
                  className="greekMythologyButton"
                >
                  Greek Mythology
                </button>
                <button
                  onClick={() => handleQuizSelection("scienceTrivia")}
                  className="scienceTriviaButton"
                >
                  Science Trivia
                </button>
                <button 
                  onClick={() => handleQuizSelection("reactJS")}
                  className="reactJSButton"
                >
                  React.js
                </button>
              </div>

            </div>
          ) : showReview ? (
            <div>
            <h2 className="reviewTitle">Review Your Answers</h2>
            {/* Display the score at the top */}
            <p className="scoreDisplay">
              Your Score: {score} / {selectedQuiz.length}
            </p>
            <ul className="testContainer">
              {selectedQuiz.map((question, index) => (
                <li key={index} className="questionAndOptions">
                  <p className="question">{question.question}</p>
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
                className="backToHome"
              >
                Back to Home
              </button>
            </div>
          ) : showScore ? (
            <div className="showScoreContent">
              <h2 className="yourScoreHeader">
                Your Score: {score} / {selectedQuiz.length}
              </h2>
              <div className="yourScoreButtons">
                <button
                  onClick={handleReviewAnswers}
                  className="reviewAnswersButton"
                >
                  Review Answers
                </button>
                <button
                  onClick={resetQuiz}
                  className="restartQuizButton"
                >
                  Restart Quiz
                </button>
              </div>
            </div>
          ) : (
            <div>
              <h3 className="quizQuestion" >{selectedQuiz[currentQuestion].question}</h3>
              <div className="optionsContainer">
                {selectedQuiz[currentQuestion].options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswerOptionClick(index)}
                    className="optionsStyles"
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

      <footer>
        <p>&copy; {currentYear} QuizSnap</p>
      </footer>
    </div>
  );
}

export default QuizApp;
