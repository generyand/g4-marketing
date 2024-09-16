import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

function QuestionAnalysisModal({ isOpen, onClose, quizData, answers }) {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  if (!isOpen) return null;

  if (isBrowser) {
    return ReactDOM.createPortal(
      <div className="fixed inset-0 z-[9999] flex items-center justify-center overflow-x-hidden overflow-y-auto bg-black bg-opacity-50 p-2 outline-none focus:outline-none md:p-8 text-gray-900">
        <div className="relative mx-auto w-full max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-3xl">
          <div className="flex relative flex-col w-full max-h-[75svh] md:max-h-[80svh] md:mt-12 bg-white rounded-lg border-0 shadow-lg outline-none focus:outline-none dark:bg-gray-800">
            <div className="flex justify-between items-center p-5 rounded-t border-b border-solid border-blueGray-200 dark:border-gray-700">
              <h3 className="text-xl font-semibold sm:text-2xl dark:text-white">
                Question Analysis
              </h3>
              <button
                className="flex justify-center items-center self-center p-1 ml-auto text-3xl font-semibold leading-none text-gray-800 bg-transparent border-0 outline-none dark:text-white focus:outline-none"
                onClick={onClose}
              >
                <span className="flex justify-center items-center w-6 h-6 text-2xl bg-transparent outline-none focus:outline-none">
                  ×
                </span>
              </button>
            </div>
            <div className="relative flex-auto p-4 sm:p-6 overflow-y-auto max-h-[60vh] sm:max-h-[70vh]">
              <div className="space-y-2">
                {quizData.map((question, index) => (
                  <div
                    key={index}
                    className="p-3 bg-white rounded-lg shadow-md sm:p-4 dark:bg-gray-700"
                  >
                    <p className="mb-2 text-sm font-semibold sm:text-base dark:text-white">
                      Question {index + 1}: {question.text}
                    </p>
                    <p className="mb-1 text-sm sm:text-base dark:text-gray-300">
                      Your answer:
                      <span
                        className={
                          answers[index] === question.correctAnswer
                            ? "text-green-500 ml-1 font-semibold"
                            : "text-red-500 ml-1 font-semibold"
                        }
                      >
                        {answers[index]}
                      </span>
                    </p>
                    {answers[index] !== question.correctAnswer && (
                      <p className="text-sm font-semibold sm:text-base dark:text-gray-300">
                        Correct answer: <span className="font-light">{question.correctAnswer}</span>
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-end items-center p-2 bg-transparent rounded-b border-t border-solid sm:p-4 border-blueGray-200 dark:border-gray-700">
              <button
                className="px-4 py-2 mr-1 mb-1 text-sm font-bold text-white uppercase bg-blue-500 rounded shadow transition-all duration-150 ease-linear outline-none sm:px-6 hover:shadow-lg focus:outline-none dark:bg-blue-600 dark:hover:bg-blue-700"
                type="button"
                onClick={onClose}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>,
      document.body
    );
  } else {
    return null;
  }
}

export default QuestionAnalysisModal;
