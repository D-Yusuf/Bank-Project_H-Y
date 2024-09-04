import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import UserContext from '../../components/Context/UserContext'
const ProfileNav = () => {
    const [user, setUser] = useContext(UserContext)  
  return (
    <div className="navBar flex flex-col p-5 gap-5 justify-center absolute w-screen border-b">
      <NavLink to="edit">Edit</NavLink>
      <NavLink to="transactions">Transactions</NavLink>
      
      <NavLink onClick={()=>setUser(false)}>Logout</NavLink>

      


    </div>
  )
}

export default ProfileNav