import React from 'react'
import {Link} from "react-router-dom"


const Home = () => {
  return (
    <div className="min-h-screen bg-gray-500 flex items-center justify-center">
        <div className="flex space-x-8">
            <div className="w-64 h-64 bg-white shadow-lg rounded-lg justify flex items-center justify-center cursor-pointer  hover:shadow-xl transition duration-300">
                <span className='text-xl font-semibold text-gray-800'> 
                  <Link to="/createProject">Créer un projet</Link> 
                </span>
            </div>

            <div className="w-64 h-64 bg-white shadow-lg rounded-lg  justify flex items-center justify-center cursor-pointer  hover:shadow-xl transition duration-300">
                <span className='text-xl font-semibold text-gray-800'>
                  <Link to="/projects"> Listes des projets </Link>  
                </span>
            </div>
        
        </div>
    </div>
  )
}

export default Home