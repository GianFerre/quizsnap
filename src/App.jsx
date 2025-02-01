
import React, { useState } from "react";
import logo from "./assets/quizsnap-logo-label.png";
import "./index.css";

// Full quiz data
const quizzes = {
  html: [
    { question: "What does HTML stand for?", options: ["Hyperlinks and Text Markup Language", "Hyper Text Markup Language", "Home Tool Markup Language", "Hyper Tool Markup Logic"], correctAnswer: 1 },
    { question: "Which HTML tag is used to define an unordered list?", options: ["<ul>", "<ol>", "<li>", "<list>"], correctAnswer: 0 },
    { question: "Fill in the blank: The `<____>` tag is used to create a line break in HTML.", options: ["br", "lb", "break", "newline"], correctAnswer: 0 },
    { question: "What is the correct way to create a hyperlink in HTML?", options: ["<a>www.example.com</a>", "<link>www.example.com</link>", "<a href='www.example.com'>Click Here</a>", "<a url='www.example.com'>Click Here</a>"], correctAnswer: 2 },
    { question: "Which HTML tag is used for the largest heading?", options: ["<h6>", "<h1>", "<heading>", "<head>"], correctAnswer: 1 },
    { question: "Fill in the blank: The `<____>` tag is used to display an image in HTML.", options: ["img", "image", "src", "picture"], correctAnswer: 0 },
    { question: "What is the purpose of the <meta> tag in HTML?", options: ["To add metadata about the document", "To create a navigation bar", "To style elements", "To include JavaScript"], correctAnswer: 0 },
    { question: "Which attribute is used to open a link in a new tab?", options: ["target='_new'", "target='_blank'", "target='new-tab'", "open='new'"], correctAnswer: 1 },
    { question: "What is the default display property of a <div>?", options: ["inline", "block", "flex", "grid"], correctAnswer: 1 },
    { question: "Fill in the blank: The `<!____ html>` declaration is used to specify the document type in HTML5.", options: ["DOCTYPE", "DOCTYPE5", "HTMLTYPE", "DOCTYPE HTML"], correctAnswer: 0 }
  ],
  css: [
    { question: "What does CSS stand for?", options: ["Computer Style Sheets", "Creative Style Sheets", "Cascading Style Sheets", "Colorful Style Sheets"], correctAnswer: 2 },
    { question: "Which property is used to change the text color of an element?", options: ["text-color", "font-color", "color", "background-color"], correctAnswer: 2 },
    { question: "What is the correct way to apply a class in CSS?", options: [".classname { }", "#classname { }", "classname { }", "<classname> { }"], correctAnswer: 0 },
    { question: "Which CSS property controls the spacing between elements?", options: ["padding", "margin", "border-spacing", "gap"], correctAnswer: 1 },
    { question: "Fill in the blank: The `____` property is used to set the background color of an element.", options: ["background-color", "bg-color", "color", "background"], correctAnswer: 0 },
    { question: "Which CSS property makes text bold?", options: ["font-style", "text-weight", "font-weight", "bold"], correctAnswer: 2 },
    { question: "Fill in the blank: The `____` property is used to make an element invisible but still take up space.", options: ["visibility", "display", "opacity", "hidden"], correctAnswer: 0 },
    { question: "How do you make a background image repeat?", options: ["background-repeat: no-repeat;", "background-repeat: repeat;", "background-image: repeat;", "repeat: background;"], correctAnswer: 1 },
    { question: "Which property is used to make an element responsive?", options: ["position", "flex", "media-query", "display"], correctAnswer: 2 },
    { question: "Fill in the blank: To make text italic, use the `____` property.", options: ["font-italic", "text-style", "font-style", "italic"], correctAnswer: 2 }
  ],
  javascript: [
    { question: "Which keyword is used to declare a variable in JavaScript?", options: ["var", "let", "const", "All of the above"], correctAnswer: 3 },
    { question: "Which function is used to print something in the console?", options: ["console.print()", "console.log()", "log.console()", "print.console()"], correctAnswer: 1 },
    { question: "Fill in the blank: The `____` keyword is used to define a function in JavaScript.", options: ["function", "def", "fn", "method"], correctAnswer: 0 },
    { question: "Which operator is used for strict equality?", options: ["==", "===", "=", "!=="], correctAnswer: 1 },
    { question: "What does 'typeof' return for an array?", options: ["array", "object", "list", "string"], correctAnswer: 1 },
    { question: "Which method adds an element to the end of an array?", options: ["push()", "pop()", "shift()", "unshift()"], correctAnswer: 0 },
    { question: "Fill in the blank: The `____` method converts a string into an integer in JavaScript.", options: ["parseInt()", "toInteger()", "int()", "parseNumber()"], correctAnswer: 0 },
    { question: "Which keyword is used to define an asynchronous function?", options: ["async", "await", "function async", "def async"], correctAnswer: 0 },
    { question: "What does NaN stand for in JavaScript?", options: ["Not a Null", "Not a Number", "Negative and Null", "None of the above"], correctAnswer: 1 },
    { question: "Fill in the blank: The `____` function is used to delay execution in JavaScript.", options: ["setTimeout()", "delay()", "wait()", "pause()"], correctAnswer: 0 }
  ],
  reactJS: [
    { question: "What is React primarily used for?", options: ["Server-side scripting", "Building user interfaces", "Database management", "Game development"], correctAnswer: 1 },
    { question: "Which company developed React.js?", options: ["Google", "Facebook (Meta)", "Microsoft", "Twitter"], correctAnswer: 1 },
    { question: "What is JSX in React?", options: ["A JavaScript XML-like syntax", "A CSS preprocessor", "A React framework", "A back-end tool"], correctAnswer: 0 },
    { question: "What hook is used to manage component state in React?", options: ["useEffect", "useState", "useContext", "useReducer"], correctAnswer: 1 },
    { question: "Fill in the blank: The `____` function is used to return JSX from a React component.", options: ["render()", "display()", "return()", "show()"], correctAnswer: 2 },
    { question: "Which lifecycle method is used for side effects like API calls?", options: ["componentDidMount", "componentWillUnmount", "useEffect", "Both A and C"], correctAnswer: 3 },
    { question: "What is the purpose of the 'key' prop in React lists?", options: ["To set unique values for styling", "To help React identify which items changed", "To add animations", "To define event handlers"], correctAnswer: 1 },
    { question: "Fill in the blank: React components must be wrapped in a single `____` element.", options: ["root", "parent", "container", "div"], correctAnswer: 1 },
    { question: "What does React use to render UI updates efficiently?", options: ["Server-side rendering", "The real DOM", "The virtual DOM", "CSS styling"], correctAnswer: 2 },
    { question: "Fill in the blank: The `____` hook is used to store values across renders without causing re-renders.", options: ["useState", "useMemo", "useRef", "useContext"], correctAnswer: 2 }
  ]
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
              <p className="mainSub">Test your coding knowledge by selecting a topic below. Whether you're a beginner learning the basics or an experienced developer looking for a challenge, QuizSnap has something for you. Choose a subject and see how well you know them!</p>
              <div className="subjects">
                <button
                  onClick={() => handleQuizSelection("html")}
                  className="htmlButton"
                >
                  HTML
                </button>
                <button
                  onClick={() => handleQuizSelection("css")}
                  className="cssButton"
                >
                  CSS
                </button>
                <button
                  onClick={() => handleQuizSelection("javascript")}
                  className="javascriptButton"
                >
                  Javascript
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
