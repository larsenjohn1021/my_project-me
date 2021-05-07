import React from 'react'
import './App.css';
import {Link} from 'react-router-dom';
import { withRouter } from 'react-router-dom/cjs/react-router-dom.min';
export default function Nav() {

    const navStyle = {
        color: 'white'
    };
      
    


    return ( 
       <nav>
            <h3>MYWEB</h3>
            <ul className ="nav-Link">

                <Link style={navStyle} to="/">
                <li>Home</li>
                </Link>  
               
                <Link style={navStyle} to="/login">
                <li>Login</li>
                </Link>  

                <Link style={navStyle} to="/register">  
                <li>Register</li>
                </Link>

            </ul>

       </nav>
    )
}
