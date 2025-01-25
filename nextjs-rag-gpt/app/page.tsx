"use client";

import Image from 'next/image';
import crickgptLogo from './assets/crickgpt.png';

import { useChat } from 'ai/react';
import { Message } from 'ai';

import React from 'react'

const Home = () => {
    const { handleInputChange, handleSubmit, input, append, isLoading, messages } = useChat();
    
    const noMessages = true;  

    return (
    <section className='bg-[#E8E8E8] flex flex-col items-center justify-between h-4/6 w-fit rounded-lg  '>
        <Image src={crickgptLogo} width="250" alt='CrickGPT Logo' priority className=''/>
        <section className={noMessages ? '' : ''}>
            {noMessages ? (
                <>
                    <p className='justify-center items-center flex text-center text-gray-700 border-x-8'>
                        Ask CrickGPT anything about cricket! <br /> 
                        It will come back with the most up to date answers. Enjoy!
                    </p>
                    <br />
                    {/* <PromptSuggestionRow /> */}
                </>
            ) : (
                <>
                {/* map message onto text bubbles */}
                {/* <LoadingBubble /> */}
                </>
            )}
        </section>
        <form onSubmit={handleSubmit}
                className='h-10 w-full flex justify-evenly items-center'
        >
                <input 
                    className='w-full mx-5 rounded-lg text-left pl-2 my-2'
                    onChange={handleInputChange}
                    value={input}
                    placeholder="Ask CrickGPT anything about cricket!"
                />
                <input className='' type="submit" />
            </form>
    </section>
  )
}

export default Home