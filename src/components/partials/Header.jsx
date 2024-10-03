import React from 'react'
import { IoMdMore } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";

const Header = ({setShowSideBar, showSideBar}) => {
    
  const handleSideBarShow = () => setShowSideBar(!showSideBar);

  return (
    <header className='bg-secondary flex justify-between p-5 fixed w-full top-0'>
        <button type='button' onClick={handleSideBarShow}> 
            <IoMdMore  className='text-icons size-6'/>
        </button>
                
        <button>
            <GiHamburgerMenu className='text-icons size-6'/>
        </button>
    </header>
  )
}

export default Header