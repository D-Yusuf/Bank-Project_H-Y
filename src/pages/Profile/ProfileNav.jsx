import React, { useContext, useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import userIcon from "../../images/user-solid.svg"
import usersIcon from "../../images/users-solid.svg"
import moneyIcon from "../../images/money-bill-transfer-solid.svg"
import homeIcon from "../../images/house-solid.svg"
import backIcon from "../../images/arrow-left-solid.svg"
import logoutIcon from "../../images/right-from-bracket-solid.svg"
// import { faMoney } from '@awesome.me/kit-206351b6e9/icons/classic/solid'
const ProfileNav = () => {
  return (
    <div className="bg-secondary rounded-sm flex flex-col h-full items-center">
      <div className='flex flex-col w-full gap-5 mb-auto'>

      <NavLink className="w-full flex justify-center bg-accent p-3 text-white rounded-sm" to="." end>
      {/* style={({isActive})=>{return {backgroundColor: isActive? "black" : ""}}} */}
        <img width={25} height={25} src={userIcon} alt="user" />
      </NavLink>
      <NavLink className="w-full flex justify-center bg-accent p-3 text-white rounded-sm"  to="transactions">
        <img width={25} height={25} src={moneyIcon} alt="user" />
      
      </NavLink>
      <NavLink className="w-full flex justify-center bg-blue-700 p-3 text-white rounded-sm"  to="/home">
        <img width={25} height={25} src={homeIcon} alt="user" />
      
      </NavLink>
      <NavLink className="w-full flex justify-center bg-blue-700 p-3 text-white rounded-sm"  to="/users">
        <img width={25} height={25} src={usersIcon} alt="user" />
      
      </NavLink>
      <NavLink className="w-full flex justify-center bg-blue-700 p-3 text-white rounded-sm"  to="../..">
        <img width={25} height={25} src={backIcon} alt="user" />
      
      </NavLink>
      </div>
      
      <NavLink to={"logout"}  className="w-full flex justify-center bg-red-600 p-3 text-white rounded-sm" style={({isActive})=>{return {textDecoration: isActive? "underline" : "none"}}}  >
        <img width={25} height={25} className='rotate-180' src={logoutIcon} alt="user" />
        
        </NavLink>
      


    </div>
  )
}

export default ProfileNav