import React, { useState } from 'react';

function QuizQuestion({ question, onSubmit, showFeedback, userAnswer }) {
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const handleSubmit = () => {
    if (selectedAnswer) {
      onSubmit(selectedAnswer);
    }
  };

  return (
    <div className="p-6 mx-auto max-w-2xl bg-white rounded-lg shadow-md dark:bg-gray-800">
      <h2 className="mb-4 text-xl font-semibold">{question.text}</h2>
      <div className="space-y-2">
        {question.options.map((option, index) => (
          <button
            key={index}
            onClick={() => setSelectedAnswer(option)}
            disabled={showFeedback}
            className={`w-full p-3 text-left rounded-md transition-colors ${
              showFeedback
                ? option === question.correctAnswer
                  ? 'bg-green-500 text-white'
                  : option === userAnswer
                  ? 'bg-red-500 text-white'
                  : 'bg-gray-200 dark:bg-gray-700'
                : selectedAnswer === option
                ? 'outline outline-2 outline-blue-500'
                : 'bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600'
            }`}
          >
            {option}
          </button>
        ))}
      </div>
      {!showFeedback && (
        <button
          onClick={handleSubmit}
          disabled={!selectedAnswer}
          className="px-4 py-2 mt-4 w-full font-normal text-white bg-blue-500 rounded font hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Submit
        </button>
      )}
    </div>
  );
}

export default QuizQuestion;