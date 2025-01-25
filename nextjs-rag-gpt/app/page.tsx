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
    <>
        <Image src={crickgptLogo} width="250" alt='CrickGPT Logo' priority/>
        <section className={noMessages ? '' : ''}>
            {noMessages ? (
                <>
                    <p>Ask CrickGPT anything about cricket! It will come back with the most up to date answers. Enjoy!</p>
                    <br />
                    {/* <PromptSuggestionRow /> */}
                </>
            ) : (
                <>
                {/* map message onto text bubbles */}
                {/* <LoadingBubble /> */}
                </>
            )}
            <form onSubmit={handleSubmit}>
                <input 
                    className=''
                    onChange={handleInputChange}
                    value={input}
                    placeholder="Ask CrickGPT anything about cricket!"
                />
                <input type="submit" />
            </form>
        </section>
    </>
  )
}

export default Home