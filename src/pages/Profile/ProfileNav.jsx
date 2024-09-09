import React, { useContext, useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faMoney } from '@awesome.me/kit-206351b6e9/icons/classic/solid'
const ProfileNav = () => {
  return (
    <div className="bg-white rounded-sm flex flex-col h-full items-center">
      <div className='flex flex-col w-full gap-5 mb-auto'>

      <NavLink className="w-full text-center text-2xl bg-accent p-3 text-white rounded-sm" style={({isActive})=>{return {backgroundColor: isActive? "black" : ""}}} to="." end>
        👤
      </NavLink>
      <NavLink className="w-full text-center text-2xl bg-accent p-3 text-white rounded-sm" style={({isActive})=>{return {backgroundColor: isActive? "black" : ""}}} to="transactions">
      💸
      </NavLink>
      <NavLink className="w-full text-center text-2xl bg-accent p-3 text-white rounded-sm" style={({isActive})=>{return {backgroundColor: isActive? "black" : ""}}} to="/home">
      🏠
      </NavLink>
      <NavLink className="w-full text-center text-2xl bg-accent p-3 text-white rounded-sm" style={({isActive})=>{return {backgroundColor: isActive? "black" : ""}}} to="/users">
      🫂
      </NavLink>
      <NavLink className="w-full text-center text-2xl bg-accent p-3 text-white rounded-sm" style={({isActive})=>{return {backgroundColor: isActive? "black" : ""}}} to="../..">
      ↩️
      </NavLink>
      </div>
      
      <NavLink to={"logout"}  className="w-full text-2xl text-center bg-red-600 p-3 text-white rounded-sm" style={({isActive})=>{return {textDecoration: isActive? "underline" : "none"}}}  >
        👋
        </NavLink>
      


    </div>
  )
}

export default ProfileNav