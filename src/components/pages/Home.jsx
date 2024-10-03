import React from 'react'
import Header from '../partials/Header'
import Sidebar_Expanded from '../partials/Sidebar_Expanded';

const Home = () => {
  const [showSideBar, setShowSideBar] = React.useState(false);

  return (
    <main className='h-screen'>
        <Header setShowSideBar={setShowSideBar} showSideBar={showSideBar}/>
        {showSideBar === true && <Sidebar_Expanded setShowSideBar={setShowSideBar} showSideBar={showSideBar}/> }
    </main>
  )
}

export default Home