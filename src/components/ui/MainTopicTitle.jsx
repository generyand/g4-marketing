import React from 'react'

function MainTopicTitle({ children }) {
  return (
    <h1 className="mb-6 text-3xl font-bold text-gray-900 sm:text-4xl md:text-5xl dark:text-white">
      {children}
    </h1>
  )
}

export default MainTopicTitle