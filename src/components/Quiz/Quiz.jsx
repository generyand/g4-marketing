import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import QuizQuestion from "./QuizQuestion";
import quizData from "./quizData";

function Quiz() {
  const { questionId } = useParams();
  const navigate = useNavigate();
  const [answers, setAnswers] = useState({});
  const [showFeedback, setShowFeedback] = useState(false);

  const currentQuestionIndex = parseInt(questionId, 10);
  const currentQuestion = quizData[currentQuestionIndex];

  useEffect(() => {
    const storedAnswers = JSON.parse(localStorage.getItem("quizAnswers"));
    const quizCompleted = localStorage.getItem("quizCompleted");

    if (quizCompleted === "true") {
      navigate("/quiz/results");
    } else if (storedAnswers) {
      setAnswers(storedAnswers);
      navigate(`/quiz/${Object.keys(storedAnswers).length}`);
    }
  }, [navigate]);

  const handleSubmit = (answer) => {
    const newAnswers = { ...answers, [currentQuestionIndex]: answer };
    setAnswers(newAnswers);
    setShowFeedback(true);
    localStorage.setItem("quizAnswers", JSON.stringify(newAnswers));
  };

  const handleNext = () => {
    setShowFeedback(false);
    if (currentQuestionIndex < quizData.length - 1) {
      navigate(`/quiz/${currentQuestionIndex + 1}`);
    } else {
      localStorage.setItem("quizCompleted", "true");
      navigate("/quiz/results", { state: { answers } });
    }
  };

  return (
    <div className="container px-4 py-8 mx-auto max-w-2xl">
      <h1 className="mb-4 text-2xl font-bold text-center md:text-3xl">
        Short Activity
      </h1>
      <div className="mb-1 text-base text-end">
        <p>
          {currentQuestionIndex + 1} / {quizData.length}
        </p>
      </div>
      <QuizQuestion
        question={currentQuestion}
        onSubmit={handleSubmit}
        showFeedback={showFeedback}
        userAnswer={answers[currentQuestionIndex]}
      />
      {showFeedback && (
        <div className="mt-6 text-center">
          <p className="mb-4 text-lg">
            {currentQuestion.correctAnswer === answers[currentQuestionIndex]
              ? "Correct!"
              : "Incorrect. The correct answer is: " +
                currentQuestion.correctAnswer}
          </p>
          <button
            onClick={handleNext}
            className="px-4 py-2 font-normal text-white bg-blue-500 rounded hover:bg-blue-600"
          >
            {currentQuestionIndex < quizData.length - 1
              ? "Next Question"
              : "See Results"}
          </button>
        </div>
      )}
    </div>
  );
}

export default Quiz;
