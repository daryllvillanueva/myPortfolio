import React from 'react'
import { motion, AnimatePresence } from "framer-motion";
import Portfolio from './Portfolio';
import Contact from './Contact';
import Info from './Info';

const About = () => {
  const [navBar, setNavBar] = React.useState('about');
  const handleChangeNav = (nav) => {
    setNavBar(nav);
  } 

  return (
    <>
        <div className='flex justify-end items-center gap-8'>
            <button className="border-none bg-transparent transition-all duration-300 ease-in-out" onClick={() => handleChangeNav('about')}>
                <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className='size-10'>
                    <path d="m 8 0 c -4.410156 0 -8 3.589844 -8 8 s 3.589844 8 8 8 s 8 -3.589844 8 -8 s -3.589844 -8 -8 -8 z m 0 2 c 3.332031 0 6 2.667969 6 6 s -2.667969 6 -6 6 s -6 -2.667969 -6 -6 s 2.667969 -6 6 -6 z m 0 1.875 c -0.621094 0 -1.125 0.503906 -1.125 1.125 s 0.503906 1.125 1.125 1.125 s 1.125 -0.503906 1.125 -1.125 s -0.503906 -1.125 -1.125 -1.125 z m -1.523438 3.125 c -0.265624 0.011719 -0.476562 0.230469 -0.476562 0.5 c 0 0.277344 0.222656 0.5 0.5 0.5 h 0.5 v 3 h -0.5 c -0.277344 0 -0.5 0.222656 -0.5 0.5 s 0.222656 0.5 0.5 0.5 h 3 c 0.277344 0 0.5 -0.222656 0.5 -0.5 s -0.222656 -0.5 -0.5 -0.5 h -0.5 v -4 h -2.5 c -0.007812 0 -0.015625 0 -0.023438 0 z m 0 0" fill={navBar === 'about' ? "#808080" : "#fff"}/>
                </svg>
            </button>
            <button className="border-none bg-transparent transition-all duration-300 ease-in-out" onClick={() => handleChangeNav('portfolio')}>      
                <svg fill={navBar === 'portfolio' ? "#808080" : "#fff"} viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" className='size-10'><title>ionicons-v5-e</title>
                    <path d="M298.39,248a4,4,0,0,0,2.86-6.8l-78.4-79.72a4,4,0,0,0-6.85,2.81V236a12,12,0,0,0,12,12Z"/>
                    <path d="M197,267A43.67,43.67,0,0,1,184,236V144H112a64.19,64.19,0,0,0-64,64V432a64,64,0,0,0,64,64H256a64,64,0,0,0,64-64V280H228A43.61,43.61,0,0,1,197,267Z"/>
                    <path d="M372,120h70.39a4,4,0,0,0,2.86-6.8l-78.4-79.72A4,4,0,0,0,360,36.29V108A12,12,0,0,0,372,120Z"/>
                    <path d="M372,152a44.34,44.34,0,0,1-44-44V16H220a60.07,60.07,0,0,0-60,60v36h42.12A40.81,40.81,0,0,1,231,124.14l109.16,111a41.11,41.11,0,0,1,11.83,29V400h53.05c32.51,0,58.95-26.92,58.95-60V152Z"/>
                </svg>
            </button>
            <button className="border-none bg-transparent transition-all duration-300 ease-in-out" onClick={() => handleChangeNav('contact')}>
                <svg fill={navBar === 'contact' ? "#808080" : "#fff"} viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" className='size-10'><title>ionicons-v5-j</title>
                    <path d="M256,48C141.31,48,48,141.31,48,256s93.31,208,208,208,208-93.31,208-208S370.69,48,256,48ZM205.78,164.82C218.45,151.39,236.28,144,256,144s37.39,7.44,50.11,20.94C319,178.62,325.27,197,323.79,216.76,320.83,256,290.43,288,256,288s-64.89-32-67.79-71.25C186.74,196.83,193,178.39,205.78,164.82ZM256,432a175.49,175.49,0,0,1-126-53.22,122.91,122.91,0,0,1,35.14-33.44C190.63,329,222.89,320,256,320s65.37,9,90.83,25.34A122.87,122.87,0,0,1,382,378.78,175.45,175.45,0,0,1,256,432Z"/>
                </svg>
            </button>
        </div>
        <main className='mt-5 p-5'>
            <AnimatePresence mode="wait">
                <motion.div
                    key={navBar}
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -10, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                >
                    {navBar === 'about' && <Info/>}
                    {navBar === 'portfolio' && <Portfolio/>}
                    {navBar === 'contact' && <Contact/>}       
                </motion.div>
            </AnimatePresence>
        </main>
    </>
  )
}

export default About