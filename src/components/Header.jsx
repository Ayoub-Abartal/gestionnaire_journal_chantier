import React from 'react'

const Header = () => {
  return (
    <div className="bg-white shadow-md p-4 flex justify-between items-center">
        <div className="text-sm">Dashboard</div>
        <div className="flex items-center">
            <input type="text" placeholder="Search..." className="border rounded-lg p-2"/>
        </div>
    </div>
  )
}

export default Header