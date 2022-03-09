import React from 'react'
import { Link } from 'react-router-dom';
import './style.css';

const Header2 = () => {
    return (
        <>
            <header className="header">
            <Link to="#" className="logo">Logo</Link>
        
            <ul>
              
                <li><Link to="/Patientregistration">Patient Registration</Link></li>
                <li><Link to="/Login">Logout</Link></li>
            </ul>
        </header>
          
        </>
      )
}

export default Header2
