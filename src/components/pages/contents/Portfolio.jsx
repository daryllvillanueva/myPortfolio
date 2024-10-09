import React from 'react'
import { Link } from 'react-router-dom'

const Portfolio = () => {
  return (
    <>
      <h1 className='text-white text-4xl mb-4'>Projects</h1>
      <div className='flex flex-col flex-wrap gap-5 relative'>
        <div className='h-[20rem] w-[70%] rounded-lg overflow-hidden bg-cards flex flex-row p-2 gap-3 mx-auto'>
          <img src="img/homely.png" alt="homely" className='rounded-lg w-[55%] h-full object-cover'/>
          <div className='flex flex-col gap-1 w-[30rem]'>
            <h1 className='text-2xl text-white font-kanit_m'>Homely</h1>
            <p className='text-white/80 font-kanit_m'>Welcome to Homely - Your Home Awaits!</p>
            <p className='text-white/75 tracking-wide font-kanit'>Finding your perfect home should feel as comfortable as stepping into your own living room.</p>
            <h1 className='text-white/90 text-xl'>Tech Tools:</h1>
            <ul className='flex gap-3 px-1 font-kanit_m'>
              <li className='skills'>HTML</li>
              <li className='skills'>Tailwind</li>
              <li className='skills'>PHP</li>
              <li className='skills'>WordPress</li>
            </ul>
            <div className='flex gap-4 mt-8 font-kanit_m'>
              <Link to={"https://wp-homely.netlify.app"} target='_blank' className='btn-projects'>Live Demo</Link>
              <Link to={"https://github.com/RonK-0/tw-homely"} target='_blank' className='btn-projects'>Source Code</Link>
            </div>          
          </div>
        </div>
        <div className='h-[13rem] w-[60%] rounded-lg overflow-hidden bg-cards flex flex-row p-2 gap-3'>
            <img src="img/dashboard.png" alt="homely" className='rounded-lg w-[55%] h-full object-fill'/>
            <div className='flex flex-col gap-1 w-[30rem]'>
              <h1 className='text-2xl text-white font-kanit_m'>Data Admin - CRUD</h1>
              <p className='text-white/75 tracking-wide font-kanit'>Handle and Modify data</p>
              <h1 className='text-white/90 text-xl'>Tech Tools:</h1>
              <ul className='flex gap-3 px-1 font-kanit_m'>
                <li className='skills'>React</li>
                <li className='skills'>Tailwind</li>
                <li className='skills'>PHP</li>
                <li className='skills'>MySQL</li>
              </ul>
              <Link to={"https://github.com/daryllvillanueva/react-school"} target='_blank' className='btn-projects mx-auto mt-1'>Source Code</Link>        
            </div>
        </div>
        <div className='h-[8rem] w-[200px] rounded-lg overflow-hidden bg-cards absolute right-32 bottom-20 p-3 flex flex-col gap-1'>
          <h1 className='text-2xl text-white font-kanit_m'>C++ Program</h1>
          <Link to={"https://github.com/daryllvillanueva/SimpleProjects"} target='_blank' className='btn-projects mx-auto mt-1'>Source Code</Link>        
        </div>
      </div>
    </>
  )
}

export default Portfolio