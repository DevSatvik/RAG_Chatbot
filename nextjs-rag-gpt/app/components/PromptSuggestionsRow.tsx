import React from 'react'
import PromptSuggestionsButton from './PromptSuggestionsButton';

const PromptSuggestionsRow = ({ onPromptClick }) => {
    const prompts = [
        "Who is the best cricketer in the world?",
        "What is the best cricket shot?",
        "Who is the best cricket team?",
        "What is the best cricket ground?",
        "Who is the best cricket umpire?",
    ];
    return (
    <div className='w-full'>
        {prompts.map((prompt, index) => 
            <PromptSuggestionsButton 
                key={`suggestion-${index}`} 
                text={prompt} 
                onClick={() => onPromptClick(prompt)}
            />)}
    </div>
  )
}

export default PromptSuggestionsRow