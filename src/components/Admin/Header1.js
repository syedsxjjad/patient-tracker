import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';



const Header1=()=> {
    return (
        <>
            <header className="header">
            <Link to="#" className="logo">Logo</Link>
        
            <ul>
                <li><Link to="/Admin">Home</Link></li>
                <li><Link to="/PatientView">See Patient</Link></li>
                {/* <li><Link to="/SignUp">Singup</Link></li> */}
                <li><Link to="/Login">Logout</Link></li>
            </ul>
        </header>
          
        </>
      )
}

export default Header1
