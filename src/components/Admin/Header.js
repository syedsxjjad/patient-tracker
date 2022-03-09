import { Link } from 'react-router-dom';
import './style.css';


const Header=(props)=> {
  return (
    <>
        <header className="header">
        <Link to="#" className="logo">Logo</Link>
    
        <ul>
            <li><Link to="/Admin">Home</Link></li>
            <li><Link to="/Login">Login</Link></li>
            {/* <li>{props.change === null ? <Link to="/Login">Login</Link>: <Link to="/Login">logouteeeee</Link>}</li> */}
            <li><Link to="/SignUp">Contact</Link></li>
            <li><Link to="/Login">About</Link></li>
           
            
        </ul>
    </header>
      
    </>
  )
}

export default Header
