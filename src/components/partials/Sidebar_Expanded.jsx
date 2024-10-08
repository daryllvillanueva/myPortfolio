import React from 'react'
import { IoMdMore } from "react-icons/io";
import { Link } from 'react-router-dom';
import { LuFileSearch2 } from "react-icons/lu";

const Sidebar_Expanded = ({setShowSideBar, showSideBar}) => {
  const handleSideBarShow = () => setShowSideBar(!showSideBar);

  return (
    <div className={`${showSideBar ? 'translate-x-0' : '-translate-x-full'} fixed top-0 h-screen bg-secondary lg:relative lg:translate-x-0 lg:h-[95vh] w-[290px] min-w-[290px] z-[999] transition-all duration-500 rounded-l-xl flex flex-col gap-4`}>
      <div className='h-[29vh] bg-gradient p-5 relative lg:rounded-tl-lg'>
          <button type='button' onClick={handleSideBarShow} className='absolute right-3 top-4 lg:hidden z-[999]'> 
              <IoMdMore className='text-icons size-6'/>
          </button>
          <div className='flex flex-col items-center relative'>
            <div className='size-[8rem] overflow-hidden'>
              <img src="img/banner_pic.png" alt="profile" loading="lazy" className='object-cover object-center w-full h-full rounded-full'/>
            </div>
            <h1 className='text-white font-kanit_m mt-2'>Daryll Villanueva</h1>
            <p className='font-kanit text-sm text-[#7f7f82]'>Aspiring Dev</p>
            <span className='absolute bottom-14 right-[5rem] h-4 w-4 rounded-full bg-green-500 tooltip' data-tooltip="I'm ready to work!"></span>
          </div>
      </div>
      <div className='px-5 font-kanit'>
        <ul className='flex justify-between'>
          <li className='text-white/80'>Country:</li>
          <li className='text-icons'>Philippines</li>
        </ul>
        <ul className='flex justify-between'>
          <li className='text-white/80'>City:</li>
          <li className='text-icons'>Tanauan City</li>
        </ul>
        <ul className='flex justify-between'>
          <li className='text-white/80'>Age:</li>
          <li className='text-icons'>23</li>
        </ul>
        <ul className='flex justify-between border-b pb-3'>
          <li className='text-white/80'>Education:</li>
          <li className='text-icons'>De La Salle Lipa</li>
        </ul>
      </div>
      <p className='text-white/70 px-5 tracking-wide font-kanit_m'>As a fresh grad, I'm motivated to develop website or software that will improve my knowledge and allow me to continually learn about the industry.</p>
      <div className='px-5 font-kanit'>
        <h1 className='border-t pt-3 text-white'>Non-Technical</h1>
        <ul className='text-sm flex flex-wrap gap-3 text-white/70 mt-1'>
          <li>Resourceful</li>
          <li>Adaptable Programmer</li>
          <li>Continuous Learning</li>
          <li>Responsible</li>
          <li>Collaboration</li>
        </ul>
      </div>
      
      <button className='btn w-[110px] rounded-md text-black text-lg font-kanit_m bg-white p-1 mt-auto mx-auto hover:bg-icons'>
        <Link to='/Villanueva_Daryll.pdf' target='_blank' className='flex gap-2 items-center text-lg'><LuFileSearch2 className='text-2xl'/>View CV</Link>
      </button>
      <p className='text-white/80 text-center mt-auto px-5 mb-5'>This portfolio is an <Link to={"https://github.com/daryllvillanueva/myPortfolio"} target='_blank'className='text-blue-300'>open source</Link></p>
    </div>
  )
}

export default Sidebar_Expanded