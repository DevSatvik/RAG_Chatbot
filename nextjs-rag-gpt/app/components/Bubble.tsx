import React from 'react'

const Bubble = ({ message }) => {
    const {content, role} = message;

    return (
    // <div className='m-2 p-2 text-base border-none   w-4/5 text-left'>
    //     <div className= {role === 'user' ? 'border- bg-[E1F4FFFF] ml-auto rounded-tl-2xl rounded-tr-2xl rounded-br-none rounded-bl-2xl' : 'bg-[#dce7ff] text-black rounded-tl-2xl rounded-tr-2xl rounded-br-2xl rounded-bl-none'}>
    //         {content}
    //     </div>
    // </div>
    <div className='m-2 p-2 text-base border-none w-4/5 '>
    <div className={role === 'user' ? 
        'border border-blue-300 bg-[#E1F4FF] mr-auto rounded-tl-2xl rounded-tr-2xl rounded-br-none rounded-bl-2xl ' : 
        'border border-gray-300 bg-[#dce7ff] text-black ml-auto rounded-tl-2xl rounded-tr-2xl rounded-br-2xl rounded-bl-none'}>
        {content}
    </div>
</div>
  )
}

export default Bubble