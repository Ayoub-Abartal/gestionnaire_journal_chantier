import React from 'react'

import SideBar from '../components/SideBar';
import MainContent from '../components/MainContent';
import Header from '../components/Header';
const Dashbaord = () => {
  return (
    <div className='flex h-screen'>
        <SideBar></SideBar>
        <div className='flex flex-1 flex-col'>

         <Header/>
            
            <MainContent>
                <div>Card 1 </div>
                <div>Card 2</div>
                <div>Card 3 </div>
            </MainContent>
        </div>
    </div>
  )
}

export default Dashbaord