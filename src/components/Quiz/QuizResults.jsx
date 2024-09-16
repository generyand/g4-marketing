import React, { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import quizData from "./quizData";
import QuestionAnalysisModal from "./QuestionAnalysisModal";

function QuizResults() {
  const location = useLocation();
  const answers = location.state?.answers || {};
  const [isModalOpen, setIsModalOpen] = useState(false);

  const calculateScore = () => {
    let score = 0;
    quizData.forEach((question, index) => {
      if (question.correctAnswer === answers[index]) {
        score++;
      }
    });
    return score;
  };

  const score = calculateScore();
  const totalQuestions = quizData.length;
  const percentage = (score / totalQuestions) * 100;

  const getColor = () => {
    if (percentage >= 80) return "text-emerald-400 dark:text-emerald-500";
    if (percentage >= 60) return "text-yellow-500";
    return "text-red-500";
  };

  const [animatedPercentage, setAnimatedPercentage] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedPercentage(percentage);
    }, 100);

    return () => clearTimeout(timer);
  }, [percentage]);

  return (
    <div className="container max-w-2xl px-4 py-8 mx-auto text-emerald">
      <h2 className="mb-8 text-3xl font-bold text-center">Quiz Results</h2>

      <div className="flex justify-center mb-8">
        <div className="relative w-48 h-48">
          <svg className="w-full h-full" viewBox="0 0 100 100">
            <circle
              className="text-gray-200 stroke-current"
              strokeWidth="10"
              cx="50"
              cy="50"
              r="40"
              fill="transparent"
            ></circle>
            <circle
              className={`stroke-current ${getColor()} progress-ring__circle`}
              strokeWidth="10"
              strokeLinecap="round"
              cx="50"
              cy="50"
              r="40"
              fill="transparent"
              strokeDasharray="251.2"
              strokeDashoffset={251.2 - animatedPercentage * 2.51}
              style={{
                transition: "stroke-dashoffset 1s ease-in-out",
              }}
            ></circle>
          </svg>
          <div className="absolute top-0 left-0 flex items-center justify-center w-full h-full">
            <span className={`text-3xl font-bold ${getColor()}`}>
              {Math.round((animatedPercentage / 100) * totalQuestions)}/
              {totalQuestions}
            </span>
          </div>
        </div>
      </div>

      <p className="mb-8 text-xl text-center">
        You scored <span className={`font-bold ${getColor()}`}>{score}</span>{" "}
        out of {totalQuestions} ({percentage.toFixed(1)}%)
      </p>

      <div className="flex flex-col justify-center w-full gap-2">
        <button
          onClick={() => setIsModalOpen(true)}
          className="px-6 py-3 mx-auto font-bold text-center text-white transition-colors bg-blue-500 rounded-full hover:bg-blue-600"
        >
          Question Analysis
        </button>
        <Link
          to="/quiz/0"
          className="px-6 py-3 mx-auto font-bold text-center text-white transition-colors rounded-full bg-emerald-400 dark:bg-emerald-500 hover:bg-emerald-500 dark:hover:bg-emerald-600"
        >
          Retake Quiz
        </Link>
      </div>

      <QuestionAnalysisModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        quizData={quizData}
        answers={answers}
      />
    </div>
  );
}

export default QuizResults;
