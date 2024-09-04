import React, { useContext, useState } from 'react'
import { NavLink } from 'react-router-dom'
import UserContext from '../../Context/UserContext'
import Logout from '../../components/Logout'
const ProfileNav = () => {
    const [user, setUser] = useContext(UserContext) 
    const [logoutModal, setLogoutModal] = useState(false) 
  return (
    <div className="navBar flex flex-col p-5 gap-5 justify-center absolute w-screen border-b">
      <NavLink to="edit">Edit</NavLink>
      <NavLink to="transactions">Transactions</NavLink>
      
      <NavLink onClick={()=>setLogoutModal(true)}>Logout</NavLink>
    {logoutModal ? <Logout logoutFn={()=>{setUser(false); setLogoutModal(false)}}/> : <></>}
      


    </div>
  )
}

export default ProfileNav