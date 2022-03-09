import React, { useEffect, useState } from 'react'
import { collection, doc, onSnapshot } from 'firebase/firestore'
import { db } from '../../Firebase'
import './style.css';
import Header2 from './Header2';
import { Link } from 'react-router-dom';
import button from './Button';
import Input from './InputType';

const PatientView = () => {

  const [patientView, setPatientView] = useState([]);
  const [searchterm, setSearchTerm] = useState('');

  useEffect(() => {
    onSnapshot(collection(db, "patientDetail"), (snapshoot) => {
      setPatientView(
        snapshoot.docs.map((doc) => {
          return {
            ...doc.data(),
            id: doc.id,
          }
        })
      )
    })
  }, [])

  // const deleteDoc = (id) => {
  //   db.collection('patientDetail').doc(id).delete()
  //     .then(() => {
  //       alert("Successfully Delete")
  //     }).catch(err =>
  //       console.log(err.message)
  //     )

  // }


  return (
    <>
      <Header2 />
      <div>
        <h2>Patient List</h2>
      </div>
      <input className='search'
        required={true}
        placeholder="Search"
        type="Search"
        onChange={(e) => {
          setSearchTerm(e.target.value)
        }}
      />

      {patientView.filter((val) => {
        if (searchterm === "") {
          return val;
        } else if (val.name.toLowerCase().includes(searchterm.toString().toLowerCase())) {
          return val
        }
      })
        .map((patient, ind) => {
          console.log(patient);
          return (
            
            <div className="patientDetail" key={ind}>
              <img className='dlt' src='delete.png' onClick={deleteDoc} />

              {
                patient.imageUrl.map((ims,pre) => {

                   
                  return <a href={ims} key={pre} target='_blank' rel='noreferrer' >
                    <img className='image' src={ims}
                    />
                  </a>
                })
              }


              {/* console.log({patient.imageUrl}); */}
              <span>
                {patient.picDetail}
              </span>
              <ul className="patient" >
                <li >
                  Patient Name: <b> {patient.name}</b>
                </li>
                <li>
                  Patient Email: <b> {patient.email}</b>
                </li>
                <li>
                  Patient Age: <b>{patient.age}</b>
                </li>
                <li>
                  Patient Disease: <b>{patient.disease}</b>
                </li>
                <li>
                  Date of Registration: <b> {patient.date}</b>
                </li>
                <li>

                </li>
              </ul>
            </div>
          );
        })}
    </>
  )
}

export default PatientView
