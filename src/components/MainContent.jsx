import React from 'react'

const MainContent = ({children}) => {
  return (
    <div className='flex-1 grid grid-cols-12 p-4 bg-purple-200 '>
        {children}
    </div>
  )
}

export default MainContent