import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import QuizQuestion from './QuizQuestion';
import quizData from './quizData';

function Quiz() {
  const { questionId } = useParams();
  const navigate = useNavigate();
  const [answers, setAnswers] = useState({});
  const [showFeedback, setShowFeedback] = useState(false);

  const currentQuestionIndex = parseInt(questionId, 10);
  const currentQuestion = quizData[currentQuestionIndex];

  const handleSubmit = (answer) => {
    setAnswers({ ...answers, [currentQuestionIndex]: answer });
    setShowFeedback(true);
  };

  const handleNext = () => {
    setShowFeedback(false);
    if (currentQuestionIndex < quizData.length - 1) {
      navigate(`/quiz/${currentQuestionIndex + 1}`);
    } else {
      navigate('/quiz/results', { state: { answers } });
    }
  };

  return (
    <div className="container px-4 py-8 mx-auto">
      <h1 className="mb-4 text-3xl font-bold text-center">Marketing Quiz</h1>
      <div className="mb-6 text-center">
        <p>Question {currentQuestionIndex + 1} of {quizData.length}</p>
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
              : "Incorrect. The correct answer is: " + currentQuestion.correctAnswer}
          </p>
          <button
            onClick={handleNext}
            className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-600"
          >
            {currentQuestionIndex < quizData.length - 1 ? "Next Question" : "See Results"}
          </button>
        </div>
      )}
    </div>
  );
}

export default Quiz;