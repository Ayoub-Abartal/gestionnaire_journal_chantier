import React, { useState } from 'react'
import { render } from 'react-dom'

const CreateProject = () => {

  const [step, setStep] = useState(1)
  const [titre,setTitre] = useState("")

  const [numeroMarche,setNumeroMarche] = useState("")


  const renderStep = () =>{
    switch(step){
      case 1 :
        return (
          <div>
            <h2>Project informations</h2>
            <label htmlFor=""></label>
            <input type="text" placeholder='titre' />
            <br />
            <label htmlFor=""></label>
            <input type="text" placeholder='numero_marche' />
          </div>
        )  
      
      case 2 : 
        return (
          <div>
            <h2>Temp informations</h2>
          </div>
        )

      default: 
        return null
    }
  }

  return (
    <div className='min-h-screen m-10'>
      
      <form action="">
        {renderStep()}
        <div className="mt-6 flex justify-between">
            {step > 1 && (
              <button
                type="button"
                onClick={() => setStep(step - 1)}
                className="px-4 py-2 bg-gray-200 text-gray-800 rounded"
              >
                Previous
              </button>
            )}
            {step < 3 ? (
              <button
                type="button"
                onClick={() => setStep(step + 1)}
                className="px-4 py-2 bg-blue-500 text-white rounded"
              >
                Next
              </button>
            ) : (
              <button
                type="submit"
                className="px-4 py-2 bg-green-500 text-white rounded"
              >
                Submit
              </button>
            )}
      </div>
      </form>
    </div>
  )
}

export default CreateProject