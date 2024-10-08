import React from 'react'

const MenuBar = ({setShowMenuBar, showMenuBar}) => {
  const handleMenuBarShow = () => setShowMenuBar(!showMenuBar);
  return (
    <div className={`${showMenuBar ? 'opacity-100' : 'opacity-0'} fixed top-16 right-0 h-[30vh] -z-1 min-w-[10rem] bg-secondary transition-all duration-500`}>
        qwwqewqe
    </div>
  )
}

export default MenuBar