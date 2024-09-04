import React, { useState } from 'react'
import ModalContext from '../../Context/ModalContext'
import CloseModal from './CloseModal'
const Modal = ({children, className}) => {
    const [on, setOn] = useState(true)
    function closeModal(){
        setOn(false)
    }
    return on ? (
        <ModalContext.Provider value={setOn}>
        {/* this is the black bg behind modal */}
        <div onClick={closeModal} className='fixed top-0 left-0 min-h-screen w-screen bg-[rgba(0,0,0,0.3)]'></div>
        {/* <modal>  */}
        <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 overflow-y-hidden ">
          <div className={`relative m-auto bg-white py-10 px-2 flex flex-col items-center rounded-lg z-[9999] ${className}`}>
            <CloseModal />
            {children}
          </div>
        </div>
        {/* <modal/>  */}
        </ModalContext.Provider>
      ) : <></>
}

export default Modal