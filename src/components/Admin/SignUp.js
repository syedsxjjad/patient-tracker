import React, { useEffect, useState } from 'react'
import './style.css';
import { useNavigate } from 'react-router-dom'
import Header from './Header';
import { auth } from '../../Firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth'
import Login from './Login';


const SignUp = () => {
  const [regiterEmail, setRegiterEmail] = useState("");
  const [regiterPassword, setRegisterPassword] = useState("");

  let navigate = useNavigate();

  const register = async (e) => {
    e.preventDefault();


      try {
        const user = await createUserWithEmailAndPassword(
          auth,
          regiterEmail,
          regiterPassword
          );
          
          alert("create successfully")
          navigate("/Patientregistration")
      }
      catch (error) {
        alert(error.message);
      }
  
    }
  

  return (
    <>
      <Header />
      <div className="loginBox">

        <h1>Signup</h1>
        <form>
          <div className='.loginBox'>

          </div>

          <div className='.loginBox'>
            <label htmlFor='Email' >Email</label>
            <input
              type='text'
              // value={user.email}
              placeholder='Enter Your Email'
              onChange={(e) => {
                setRegiterEmail(e.target.value)
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
                setRegisterPassword(e.target.value)
              }}
              // name='password'
              autoComplete='off'
              required
            />
          </div>

          <button type='submit' className='btns' onClick={register}>
            Signup
          </button>

        </form>


      </div>

    </>
  )
}

export default SignUp
