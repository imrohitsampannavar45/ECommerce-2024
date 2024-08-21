// eslint-disable-next-line no-unused-vars
import React from 'react'

const NewsLetterBox = () => {

const onSubmithandler =(event)=>{
event.preventDefault();
}

  return (
    <div className='text-center'>
        <p className='text-2xl font-medium text-gray-800'>Subscribe Now & get 20% OFF</p>
        <p className='text-gray-400 mt-3' >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi possimus, beatae minus eveniet sapiente sed sit, aut vitae iure facere unde tempore dolore fugiat quibusdam nobis. Ipsum repellat aut voluptates!
        </p>
        <form onSubmit={onSubmithandler} className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3'>
            <input className='w-full sm:flex-1 outline-none' type="email"  placeholder='Enter your email' required/>
            <button className='bg-black text-white text-xs px-10 py-4' type='submit'>Subscribe</button>
        </form>
      
    </div>
  )
}

export default NewsLetterBox
