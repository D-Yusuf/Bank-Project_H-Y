import React, { useState } from 'react'
const Modal = ({children}) => {
    const [on, setOn] = useState(true)
    function closeModal(){
        setOn(false)
    }
    return on ? (
        <>
        <div onClick={closeModal} className='fixed top-0 left-0 min-h-screen w-screen bg-[rgba(0,0,0,0.3)]'></div>
        <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 overflow-y-hidden">
    
          <div className='relative m-auto z-50 bg-white py-10 px-2 flex flex-col items-center rounded-lg w-[50vw] h-[80vh]'>
            <button onClick={closeModal} className='close-modal absolute top-0 right-0 m-3 text-xl'>X</button>
            {children}
          </div>
        </div>
        </>
      ) : <></>
}

export default Modal