import React from 'react'
import Modal from './Modal/Modal'

const Logout = ({logoutFn}) => {
  return (
    <Modal className='min-w-[200px] min-h-[200px] z-50'>
      <h1>You are logging out of your account</h1>
      <button onClick={logoutFn}>logout</button>
    </Modal>
  )
}

export default Logout