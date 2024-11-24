import React from 'react'
import avatarImg from  "../../src/assets/image1.png"
import TextChanger from './TextChanger'
const Home = () => {
  return (
    <div className='text-white flex w-full justify-between items-start p-10 md:p-20'>
      <div className='md:w-2/4 md:pt-10'>
       <h className=' text-2xl md:text-6xl font-bold flex leading-normal tracking-tighter text-orange-300'> <TextChanger /></h>
      <p className=' text-sm  p-3 md:text-2xl tracking-tight'>
      Highly motivated Frontend Developer with a Diploma in Information Technology <br />
      I am very interested in web devolopment and I am Beginner Frontend Devoloper, <br />
      I am increasing my knowleadge in it and will perform well by paying close<br />
      attention to it


      </p>
      <button    className='mt-5 md:mt-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85
       duration-300 hover:scale-105 font-semibold rounded-xl bg-[#465697]
      '>
        Contact Me <br />
        9730913696
      </button>
      </div>
      <img className='md:w-96 w-60' src={avatarImg} alt=''></img>
    
    </div>
  )
}

export default Home
