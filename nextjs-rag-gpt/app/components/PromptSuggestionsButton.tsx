import React from 'react'

const PromptSuggestionsButton = ({ text, onClick }) => {
  return (
    <button 
        onClick={onClick}
        className='m-2 p-2 text-base border-none bg-white  rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-200 ease-in-out text-gray-700'>
            {text}
        </button>
  )
}

export default PromptSuggestionsButton