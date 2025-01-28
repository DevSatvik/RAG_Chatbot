import React from 'react'

const Bubble = ({ message }) => {
    const {content, role} = message;

    return (
    <div className='m-2 p-2 text-base border-none bg-[#383838] shadow-lg w-4/5 text-left'>
        <div className= {role === 'user' ? 'bg-[E1F4FFFF] ml-auto rounded-tl-2xl rounded-tr-2xl rounded-br-none rounded-bl-2xl' : 'bg-[#dce7ff] text-black rounded-tl-2xl rounded-tr-2xl rounded-br-2xl rounded-bl-none'}>
            {content}
        </div>
    </div>
  )
}

export default Bubble