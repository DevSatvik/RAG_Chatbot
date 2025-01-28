"use client";

import Image from 'next/image';
import crickgptLogo from './assets/crickgpt.png';

import { useChat } from 'ai/react';
import { Message } from 'ai';

import React from 'react'
import PromptSuggestionsRow from './components/PromptSuggestionsRow';
import LoadingBubble from './components/LoadingBubble';
import Bubble from './components/Bubble';

const Home = () => {
    const { handleInputChange, handleSubmit, input, append, isLoading, messages } = useChat();
    
    const noMessages = false;  

    return (
    <section className='bg-[#E8E8E8] flex flex-col items-center justify-between h-4/6 w-fit rounded-lg p-6 shadow-lg'>
        <Image src={crickgptLogo} width="250" alt='CrickGPT Logo' priority className=''/>
        <section className={noMessages ? '' : 'populated'}>
            {noMessages ? (
                <>
                    <p className='text-center text-gray-700 px-8 py-2'>
                        Ask CrickGPT anything about cricket! <br /> 
                        It will come back with the most up to date answers. Enjoy!
                    </p>
                    <br />
                    <PromptSuggestionsRow />
                </>
            ) : (
                <>
                {/* map message onto text bubbles */}
                {isLoading && <LoadingBubble />}
                </>
            )}
        </section>
        
        <form onSubmit={handleSubmit}
                className='h-10 w-full '
        >
                <hr className="w-full border-t border-gray-300" />
                <input 
                    className='w-5/6 px-4 py-3 text-base border-none shadow focus:outline-none focus:ring-2 focus:ring-blue-300 '
                    onChange={handleInputChange}
                    value={input}
                    placeholder="Ask CrickGPT anything about cricket!"
                />
                <input className='w-1/6 px-4 py-2  bg-blue-500 hover:bg-blue-700 text-white text-center font-bold rounded cursor-pointer transition-colors duration-200 ease-in-out' 
                        type="submit" 
                        value="Submit" />
        </form>
    </section>
  )
}

export default Home