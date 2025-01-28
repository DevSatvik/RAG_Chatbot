import React from 'react'

const PromptSuggestionsButton = ({ text, onClick }) => {
  return (
    <button 
        onClick={onClick}
        className=''>
            {text}
        </button>
  )
}

export default PromptSuggestionsButton