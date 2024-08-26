import React from 'react'

import SideBar from '../components/SideBar';
import MainContent from '../components/MainContent';
import Header from '../components/Header';
const Dashbaord = () => {
  return (
    <div className='flex h-screen'>
      <SideBar/>
      <div className='flex flex-1 flex-col'>

        <Header/>
            
        <MainContent>
          
        </MainContent>
      </div>
    </div>
  )
}

export default Dashbaord