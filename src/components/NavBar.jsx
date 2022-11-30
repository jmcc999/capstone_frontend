import React from 'react';
import {NavLink, Link} from 'react-router-dom'

export default function NavBar() {

    let activeStyle = {
        backgroundColor: "lightgrey"
    }
   
    return(
        <nav>
          <Link to="/">HOME</Link>
          <NavLink to="register" style={({isActive})=> isActive ? activeStyle : undefined }>REGISTER</NavLink>
          <br/>
          <NavLink to="login" style={({isActive})=>isActive ? activeStyle : undefined }>LOGIN</NavLink>
          <br/>
          <NavLink to="scripts" style={({isActive})=>isActive ? activeStyle : undefined }>PRESCRIPTIONS</NavLink>
          <br/>
          <NavLink to="api" style={({isActive})=>isActive ? activeStyle : undefined }>DATA</NavLink>
        </nav>
    )
}
