
import React, { useState } from "react";
import logo from "./assets/quizsnap-logo-label.png";

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
    <div style={{ fontFamily: "Arial, sans-serif", minHeight: "100vh", backgroundColor: "#F1FAEE", display: "flex", flexDirection: "column" }}>
      <nav style={{ display: "flex", justifyContent: "center", padding: "10px 20px", backgroundColor: "#1D3557" }}>
        <img src={logo} alt="QuizSnap Logo" style={{ height: "60px" }} />
      </nav>

      <div style={{ flex: 1, display: "flex", justifyContent: "center", alignItems: "center" }}>
        <div className="content-container" style={{ maxWidth: "700px", width: "100%", backgroundColor: "white", borderRadius: "10px", boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)", padding: "30px" }}>
          {!selectedQuiz ? (
            <div style={{ textAlign: "center" }}>
              <h1 style={{ fontSize: "36px", color: "#1D3557", marginBottom: "20px" }}>Welcome to QuizSnap!</h1>
              <p style={{ color: "#457B9D" }}>Choose a subject to start your quiz.</p>
              <div style={{ display: "flex", justifyContent: "center", gap: "20px", marginTop: "20px" }}>
                <button
                  onClick={() => handleQuizSelection("filipinoHistory")}
                  style={{
                    padding: "12px 24px",
                    backgroundColor: "#457B9D",
                    color: "white",
                    fontSize: "18px",
                    border: "none",
                    borderRadius: "10px",
                    cursor: "pointer",
                  }}
                >
                  Filipino History
                </button>
                <button
                  onClick={() => handleQuizSelection("greekMythology")}
                  style={{
                    padding: "12px 24px",
                    backgroundColor: "#E63946",
                    color: "white",
                    fontSize: "18px",
                    border: "none",
                    borderRadius: "10px",
                    cursor: "pointer",
                  }}
                >
                  Greek Mythology
                </button>
                <button
                  onClick={() => handleQuizSelection("scienceTrivia")}
                  style={{
                    padding: "12px 24px",
                    backgroundColor: "#2ECC71",
                    color: "white",
                    fontSize: "18px",
                    border: "none",
                    borderRadius: "10px",
                    cursor: "pointer",
                  }}
                >
                  Science Trivia
                </button>
              </div>

            </div>
          ) : showReview ? (
            <div>
            <h2 style={{ marginBottom: "20px", color: "#1D3557" }}>Review Your Answers</h2>
            {/* Display the score at the top */}
            <p style={{ fontSize: "20px", marginBottom: "20px", color: "#1D3557" }}>
              Your Score: {score} / {selectedQuiz.length}
            </p>
            <ul style={{ listStyleType: "none", padding: 0 }}>
              {selectedQuiz.map((question, index) => (
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
              <h2 style={{ fontSize: "28px", marginBottom: "20px", color: "#1D3557" }}>
                Your Score: {score} / {selectedQuiz.length}
              </h2>
              <div style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
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
                  }}
                >
                  Restart Quiz
                </button>
              </div>
            </div>
          ) : (
            <div>
              <h3 style={{ marginBottom: "20px", color: "#1D3557" }}>{selectedQuiz[currentQuestion].question}</h3>
              <div style={{ display: "grid", gap: "10px" }}>
                {selectedQuiz[currentQuestion].options.map((option, index) => (
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
