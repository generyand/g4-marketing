import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import quizData from './quizData';

function QuizResults() {
  const location = useLocation();
  const answers = location.state?.answers || {};

  const calculateScore = () => {
    let score = 0;
    quizData.forEach((question, index) => {
      if (question.correctAnswer === answers[index]) {
        score++;
      }
    });
    return score;
  };

  return (
    <div className="container px-4 py-8 mx-auto">
      <h2 className="mb-8 text-3xl font-bold text-center">Quiz Results</h2>
      <p className="mb-6 text-xl text-center">Your score: {calculateScore()} out of {quizData.length}</p>
      <div className="space-y-6">
        {quizData.map((question, index) => (
          <div key={index} className="p-6 bg-white rounded-lg shadow-md dark:bg-gray-800">
            <p className="mb-2 font-semibold">Question {index + 1}: {question.text}</p>
            <p className="mb-1">Your answer: {answers[index]}</p>
            <p className={answers[index] === question.correctAnswer ? "text-green-500" : "text-red-500"}>
              Correct answer: {question.correctAnswer}
            </p>
          </div>
        ))}
      </div>
      <div className="mt-8 text-center">
        <Link to="/quiz/0" className="px-4 py-2 font-normal text-white bg-blue-500 rounded hover:bg-blue-600">
          Retake Quiz
        </Link>
      </div>
    </div>
  );
}

export default QuizResults;