import React from 'react';
import Header from '../partials/Header';
import Sidebar_Expanded from '../partials/Sidebar_Expanded';
import { motion } from "framer-motion"
import About from './contents/About';
import MenuBar from '../partials/MenuBar';

const Home = () => {
  const [showSideBar, setShowSideBar] = React.useState(false);
  const [showMenuBar, setShowMenuBar] = React.useState(false);
  
  return (
    <main className='h-screen'>
      <div className='block lg:hidden'>
        <Header setShowSideBar={setShowSideBar} showSideBar={showSideBar} setShowMenuBar={setShowMenuBar} showMenuBar={showMenuBar} />
        <Sidebar_Expanded setShowSideBar={setShowSideBar} showSideBar={showSideBar} />
        <MenuBar setShowMenuBar={setShowMenuBar} showMenuBar={showMenuBar}/>
      </div>

      <motion.div className='hidden p-5 lg:flex lg:flex-row lg:gap-0'       
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.9,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01]
      }}>
        <Sidebar_Expanded setShowSideBar={setShowSideBar} showSideBar={true} />
        <div className='w-full p-5 rounded-r-md bg-content border-t border-r-2 border-b border-primary'>
          <About/>
        </div>
      </motion.div>



    </main>
  );
}

export default Home;
