import React, { useContext } from 'react'
import ModalContext from '../../Context/ModalContext'
const CloseModal = () => {
    const setOn = useContext(ModalContext)
  return (
    <button onClick={()=> setOn(false)} className='close-modal absolute top-0 right-0 m-3 text-xl'>X</button>

  )
}

export default CloseModal