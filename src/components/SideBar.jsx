import React from 'react'

const SideBar = () => {
  return (
    <div className='h-screen w-48 bg-purple-300 text-white'>
        <div className='p-4'>
            <h2 className='text-black mb-12'>Journal Genarator</h2>
            <ul className='text-indigo-900'>
                <li className='pb-2'> <a href=""> Home </a> </li>
                <li className='pb-2'><a href=""> Projects </a> </li>
                <li className='pb-2'><a href=""> Settings </a></li>
            </ul>
        </div>
    </div>
  )
}

export default SideBar