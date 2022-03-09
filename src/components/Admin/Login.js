import React, { useState } from 'react'
import './style.css'
import { useNavigate } from 'react-router-dom'
import Header from './Header';
import { auth } from '../../Firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword,
} from 'firebase/auth'
import Header1 from './Header1';



const Login=()=> {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [user, setUser] = useState(null);
  

    let navigate= useNavigate();

  const login = async (e) => {
    e.preventDefault();
    if (loginEmail==="") {
      alert("please Fill data");
    }
    else{

      try {
        const user = await signInWithEmailAndPassword(
          auth,
          loginEmail,
          loginPassword
          );
          setUser(user.user.email)
          
          navigate("/Patientregistration")
          
        }
        catch (error) {
          console.log(error.message)
        }
      }
      }

  return (
    <>
      <Header change={user}/>
      <div className="loginBox">

        <h1>Login</h1>
        <form>

          <div className='.loginBox'>
         
            <label htmlFor='Email' >Email
            </label>
            <input
              type='text'
              // value={user.email}
              placeholder='Enter Your Email'
              onChange={(e) => {
                setLoginEmail(e.target.value)
              }}
              // name='email'
              autoComplete='off'
              required
            />
          </div>
          <div className='.loginBox'>
            <label htmlFor='Password'>Password</label>
            <input
              type='password'
              // value={user.password}
              placeholder='Password'
              onChange={(e) => {
                setLoginPassword(e.target.value)
              }}
              // name='password'
              autoComplete='off'
              required
            />
          </div>

          <button type='submit' className='btns' onClick={login}>
            Login
          </button>

        </form>


      </div>

    </>
  )
 }

export default Login
