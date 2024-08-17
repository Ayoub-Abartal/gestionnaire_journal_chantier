import './index.css'

function App() {

  return (
    <div className="min-h-screen bg-gray-500 flex items-center justify-center">
      <div className="flex space-x-8">
        <div className="w-64 h-64 bg-white shadow-lg rounded-lg flex items-center justify flex items-center justify-center cursor-pointer  hover:shadow-xl transition duration-300">
            <span className='text-xl font-semibold text-gray-800'>Créer un projet</span>
        </div>
        <div className="w-64 h-64 bg-white shadow-lg rounded-lg flex items-center justify flex items-center justify-center cursor-pointer  hover:shadow-xl transition duration-300">
            <span className='text-xl font-semibold text-gray-800'>Listes des projets </span>
        </div>
      </div>
    </div>
  )
}

export default App
