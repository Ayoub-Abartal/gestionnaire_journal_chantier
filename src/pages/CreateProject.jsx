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
            <h2 className='pb-2'>Project informations</h2>
            <div className='pb-4'>
              <label htmlFor="" className='block pb-2'>Titre</label>
              <input type="text" className='border border-gray-800 focus:border-blue-500' placeholder='titre' />
            </div>

            <br />

            <div className='pb-4'>
              <label htmlFor="" className="block pb-2">Numero de marché</label>
              <input type="text" className='border border-gray-800 focus:border-teal-500' placeholder='numero_marche' />
            </div>
          </div>
        )  
      
      case 2 : 
        return (
          <div>
            <h2 className='pb-2'>Conditions meteorologique </h2>
            <div className='pb-4'>
              <label htmlFor="" className='block pb-2'>Temperature</label>
              <input type="text"  disabled className='border border-gray-800 ' placeholder='temperature' />
            </div>

            <div className='pb-4'>
              <label htmlFor="" className='block pb-2'>Sec</label>
              <input type="text"  disabled className='border border-gray-800' placeholder='sec' />
            </div>

            <div className='pb-4'>
              <label htmlFor="" className='block pb-2'>Vent</label>
              <input type="text" disabled  placeholder='vent' className='border border-gray-800' />
            </div>

            <div className='pb-4'>
              <label htmlFor="" className='block pb-2'>orageux</label>
              <input type="text"  disabled placeholder='orageux' className='border border-gray-800' />
            </div>

            <div className='pb-4'>
              <label htmlFor="" className='block pb-2'>pluis discontinue</label>
              <input type="text"  disabled placeholder='pluis discontinue' className='border border-gray-800' />
            </div>

            <div className='pb-4'>
              <label htmlFor="" className='block pb-2'>Pluis toute la journé</label>
              <input type="text" disabled placeholder='Pluis toute la journé' className='border border-gray-800' />
            </div>

          </div>
        )

        case 3 : 
        return (
          <div>

          </div>
        )

      default: 
        return null
    }
  }

  return (
    <div className='min-h-screen m-10'>
      
      <form action="" className='bg-gray-200 rounded w-1/2 px-2 py-2'>
        {renderStep()}
        <div className="mt-6 flex justify-between">
            {step > 1 && (
              <button
                type="button"
                onClick={() => setStep(step - 1)}
                className="px-4 py-2 bg-red-500 text-white rounded"
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