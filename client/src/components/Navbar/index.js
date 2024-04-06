import React, { Component, useState } from 'react'
import "./index.css"
import { Link, useHistory } from 'react-router-dom'

function Navbar({user}) {

  // const [user,setUser] = useState(null)

  const history = useHistory()
  const logout=()=>{
    localStorage.removeItem("token")
    history.push("/")
    window.location.reload()
  }

  const changePasswordPage=()=>{
    history.push("/changePassword")
    window.location.reload()
  }

  const redirectTOHome=()=>{
    history.push("/products")
    window.location.reload()
  }
  const contactPage=()=>{
    history.push("/contact")
    window.location.reload()
  }

  const addUser=()=>{
    history.push("/add")
    window.location.reload()
  }

    return (
      <div id="navbar">
        {
          localStorage.getItem("token")?(
          <Link to="/products" className="home-link" onClick={redirectTOHome}>
            <h3>E-Commerce</h3>
          </Link>
          ):(
            <Link className="home-link" to="/">
            <h3>E-Commerce</h3>
          </Link>
          )
        }
        
        <ul id="list">
          {user&&(<li>Hello {user.name}</li>)}
          {user&&(user.isAdmin&&(
            <Link to="/add" onClick={addUser}><li>Add User</li></Link>
          ))}
          {localStorage.getItem("token")&&(<Link to="/changePassword" onClick={changePasswordPage}><li>Change Password</li></Link>)}
          {localStorage.getItem("token")&&(<Link to="/contact" onClick={contactPage}><li>Contact Us</li></Link>)}
          {localStorage.getItem("token")&&(<li onClick={logout} >Logout</li>)}
        </ul>
      </div>
    )
  }


export default Navbar
