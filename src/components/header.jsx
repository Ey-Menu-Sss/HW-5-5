import React from 'react'
import logo from '../assets/logo.png'
import {Routes, Route, Link, useNavigate} from 'react-router-dom'


const header = () => {
    const navigate = useNavigate()

    function logout(){
        localStorage.removeItem("uchastnik")
        navigate("/login")
    }

  return (
    <div>
      <div className="u-header">
        <div className="logo">
            <img src={logo} width="150px" alt="" />
            <h2>ØяỖcнι𝐌𝔸𝓡ｕ </h2>
        </div>
        <ul className="pages">
            <li> <a href="/uchastnik">Home</a></li>
            <li> <a href="/purchased">purchased</a></li>
            <li> <a href="/login" className='logout' onClick={logout}>Logout<i className='bx bx-log-out'></i></a></li>
        </ul>
      </div>
    </div>
  )
}

export default header
