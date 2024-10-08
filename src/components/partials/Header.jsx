import React from 'react'
import { IoMdMore } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";

const Header = ({setShowSideBar, showSideBar, setShowMenuBar, showMenuBar}) => {
  const handleSideBarShow = () => setShowSideBar(!showSideBar);
  const handleMenuBarShow = () => setShowMenuBar(!showMenuBar);

  return (
    <header className='bg-secondary flex justify-between p-5 fixed w-full top-0'>
        <button type='button' onClick={handleSideBarShow}> 
            <IoMdMore className='text-icons size-6'/>
        </button>
            
        <button className='block lg:hidden' onClick={handleMenuBarShow}>
            <GiHamburgerMenu className='text-icons size-6'/>
        </button>
    </header>
  )
}

export default Header