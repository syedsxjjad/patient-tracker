
import React, { useEffect, useState } from 'react'
import {Routes,Route} from 'react-router-dom';
import Admin from './components/Admin/Admin';
import Header from './components/Admin/Header';
import Login from './components/Admin/Login';
import SignUp from './components/Admin/SignUp';
import Patientregistration from './components/Admin/Patientregistration';
import PatientView from './components/Admin/PatientView';
import PatientDetail from './components/Admin/PatientDetail';

const Routing=()=> {



  return (
    <Routes>
    <Route path='/Admin' element={<Admin/>}/>

    <Route path='/Header' element={<Header />}/>
    <Route path='/SignUp' element={<SignUp/>}/>
    <Route path='/Login' element={<Login/>}/>
    <Route path='/Patientregistration' element={<Patientregistration/>}/>
    <Route path='/PatientView' element={<PatientView/>}/>
    <Route path='PatientDetail' element={<PatientDetail/>}/>
    </Routes>
  )
}

export default Routing
