import React, { useEffect, useState } from "react";
import { useLocation, Link, useNavigate } from "react-router-dom";
import quizData from "./quizData";
import QuestionAnalysisModal from "./QuestionAnalysisModal";
import { useReward } from "react-rewards";

function QuizResults() {
  const location = useLocation();
  const navigate = useNavigate();
  const [answers, setAnswers] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { reward, isAnimating } = useReward("confettiReward", "confetti");

  useEffect(() => {
    const storedAnswers = JSON.parse(localStorage.getItem("quizAnswers"));
    const quizCompleted = localStorage.getItem("quizCompleted");

    if (quizCompleted !== "true" || !storedAnswers) {
      navigate("/quiz/0");
    } else {
      setAnswers(storedAnswers);
    }
  }, [navigate]);

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
      if (score >= 8) {
        reward();
      }
    }, 100);

    return () => clearTimeout(timer);
  }, [percentage, score, reward]);

  const handleRetakeQuiz = () => {
    localStorage.removeItem("quizAnswers");
    localStorage.removeItem("quizCompleted");
    navigate("/quiz/0");
  };

  return (
    <div className="container px-4 py-8 mx-auto max-w-2xl text-emerald">
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
          <div className="flex absolute top-0 left-0 justify-center items-center w-full h-full">
            <span className={`text-3xl font-bold ${getColor()}`}>
              {Math.round((animatedPercentage / 100) * totalQuestions)}/
              {totalQuestions}
            </span>
          </div>
        </div>
        <div
          className="fixed inset-0 pointer-events-none md:ml-48"
          aria-hidden="true"
        >
          <span
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            id="confettiReward"
          />
        </div>
      </div>

      <p className="mb-8 text-xl text-center">
        You scored <span className={`font-bold ${getColor()}`}>{score}</span>{" "}
        out of {totalQuestions} ({percentage.toFixed(1)}%)
      </p>

      <div className="flex flex-col gap-2 justify-center w-full">
        <button
          onClick={() => setIsModalOpen(true)}
          className="px-6 py-3 mx-auto font-bold text-center text-white bg-blue-500 rounded-full transition-colors hover:bg-blue-600"
        >
          Question Analysis
        </button>
        <button
          onClick={handleRetakeQuiz}
          className="px-6 py-3 mx-auto font-bold text-center text-white bg-emerald-400 rounded-full transition-colors dark:bg-emerald-500 hover:bg-emerald-500 dark:hover:bg-emerald-600"
        >
          Retake Quiz
        </button>
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
