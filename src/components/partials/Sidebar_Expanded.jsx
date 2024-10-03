import React from 'react'
import { IoMdMore } from "react-icons/io";

const Sidebar_Expanded = ({setShowSideBar, showSideBar}) => {
  const handleSideBarShow = () => setShowSideBar(!showSideBar);

  return (
    <div className='fixed top-0 left-0 h-screen w-[18rem] transition-all duration-200 z-[999] bg-white'>
        <div className='fixed top-0 right-0 h-screen w-screen'></div>
        <div className='h-[30vh] bg-gradient p-10 relative'>
            <button type='button' onClick={handleSideBarShow} className='absolute right-3 top-4'> 
                <IoMdMore  className='text-icons size-6'/>
            </button>
            <div className='flex flex-col items-center'>
                <img src="img/banner_pic.png" alt=""  className='size-28 rounded-full'/>
                <h1 className='text-white font-kanit_m mt-2'>Daryll Villanueva</h1>
                <p className='font-kanit text-sm text-[#7f7f82]'>Front End Dev</p>
            </div>
        </div>
    </div>
  )
}

export default Sidebar_Expanded