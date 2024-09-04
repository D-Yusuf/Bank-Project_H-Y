import React, { useContext, useState } from 'react'
import { NavLink } from 'react-router-dom'
import UserContext from '../../Context/UserContext'
import Logout from '../../components/Logout'
const ProfileNav = () => {
    const [user, setUser] = useContext(UserContext) 
    const [logoutModal, setLogoutModal] = useState(false) 
  return (
    <div className="border-l-8 mr-auto rounded-sm flex flex-col gap-5 justify-center absolute w-full">
      <NavLink className="bg-accent p-2 text-white rounded-sm" style={({isActive})=>{return {textDecoration: isActive? "underline" : "none"}}} to="." end>Edit</NavLink>
      <NavLink className="bg-accent p-2 text-white rounded-sm" style={({isActive})=>{return {textDecoration: isActive? "underline" : "none"}}} to="transactions">Transactions</NavLink>
      
      <NavLink className="bg-accent p-2 text-white rounded-sm" style={({isActive})=>{return {textDecoration: isActive? "underline" : "none"}}} to={"/"} >Logout</NavLink>
    {logoutModal ? <Logout logoutFn={()=>{setUser(false); setLogoutModal(false)}}/> : <></>}
      


    </div>
  )
}

export default ProfileNav