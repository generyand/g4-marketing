import React, { useEffect, useState, useCallback, useRef } from "react";
import ReactDOM from "react-dom";
import { motion, AnimatePresence } from "framer-motion";

function QuestionAnalysisModal({ isOpen, onClose, quizData, answers }) {
  const [isBrowser, setIsBrowser] = useState(false);
  const modalRef = useRef(null);

  const handleKeyDown = useCallback((event) => {
    if (event.key === "Escape") {
      onClose();
    }
  }, [onClose]);

  const handleOutsideClick = useCallback((event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      onClose();
    }
  }, [onClose]);

  useEffect(() => {
    setIsBrowser(true);

    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      document.addEventListener("mousedown", handleOutsideClick);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handleOutsideClick);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, handleKeyDown, handleOutsideClick]);

  if (!isBrowser) return null;

  return ReactDOM.createPortal(
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center overflow-x-hidden overflow-y-auto bg-black bg-opacity-50 p-2 outline-none focus:outline-none md:p-8 text-gray-900"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="relative w-full max-w-lg mx-auto sm:max-w-xl md:max-w-2xl lg:max-w-3xl"
          >
            <div
              ref={modalRef}
              className="flex relative flex-col w-full max-h-[75svh] md:max-h-[80svh] md:mt-12 bg-white rounded-lg border-0 shadow-lg outline-none focus:outline-none dark:bg-gray-800"
            >
              <div className="flex items-center justify-between p-5 border-b border-solid rounded-t border-blueGray-200 dark:border-gray-700">
                <h3 id="modal-title" className="text-xl font-semibold sm:text-2xl dark:text-white">
                  Question Analysis
                </h3>
                <button
                  className="flex items-center self-center justify-center p-1 ml-auto text-3xl font-semibold leading-none text-gray-900 bg-transparent border-0 outline-none dark:text-white focus:outline-none"
                  onClick={onClose}
                  aria-label="Close modal"
                >
                  <span className="flex items-center justify-center w-6 h-6 text-2xl bg-transparent outline-none focus:outline-none">
                    ×
                  </span>
                </button>
              </div>
              <div className="relative flex-auto p-4 sm:p-6 overflow-y-auto max-h-[60vh] sm:max-h-[70vh]">
                <div className="space-y-2">
                  {quizData.map((question, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
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
                              ? "text-emerald-500 ml-1 font-semibold"
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
                    </motion.div>
                  ))}
                </div>
              </div>
              <div className="flex items-center justify-end p-2 bg-transparent border-t border-solid rounded-b sm:p-4 border-blueGray-200 dark:border-gray-700">
                <button
                  className="px-4 py-2 mb-1 mr-1 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear bg-blue-500 rounded shadow outline-none sm:px-6 hover:shadow-lg focus:outline-none dark:bg-blue-600 dark:hover:bg-blue-700"
                  type="button"
                  onClick={onClose}
                >
                  Close
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}

export default QuestionAnalysisModal;
