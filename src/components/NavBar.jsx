import React from 'react';
import {NavLink, Link} from 'react-router-dom'

export default function NavBar() {

    let activeStyle = {
        backgroundColor: "lightPink"
    }
   
    return(
        <nav>
          <Link to="/">HOME</Link>
          {/* NavLink comes with a bool called 'isActive'. True when clicked, false when not clicked */}
          <NavLink to="register" style={({isActive})=> isActive ? activeStyle : undefined }>REGISTER</NavLink>
          <br/>
          <NavLink to="login" style={({isActive})=>isActive ? activeStyle : undefined }>LOGIN</NavLink>
          <br/>
          <NavLink to="scripts" style={({isActive})=>isActive ? activeStyle : undefined }>SEE ALL PRESCRIPTIONS</NavLink>
        </nav>
    )
}
