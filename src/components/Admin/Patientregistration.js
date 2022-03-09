import React, { useReducer, useState } from 'react'
import './style.css'
import { useNavigate } from 'react-router-dom'
import Header1 from './Header1'
import Header from './Header'
import { db } from '../../Firebase'
import { addDoc, collection } from 'firebase/firestore'
import Input from './InputType'
import { storage } from '../../Firebase'
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage'


const Patientregistration = () => {

  const [image, setImage] = useState([])
  const [patient, setPatient] = useState({
    name: "",
    email: "",
    date: "",
    disease: "",
    age: "",
    picDetail: "",
  });
  const fileUpload = async (img) => {
    return new Promise((resolve, reject) => {
      const fileRef = ref(storage, `images/${Date.now() + img.name}`);
      console.log({ fileRef });
      const uploadTask = uploadBytesResumable(fileRef, img);
      console.log({ uploadTask });
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
        },
        (error) => {
          console.log(error);
          reject(error);
        },
        async () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            console.log("File available at", downloadURL);
            resolve(downloadURL);
          });
        }
      );
    });
  };

  const register = async (e) => {
    e.preventDefault();
    if (patient.email === "") {
      // alert("please fill data")
    }
    // else {}
    try {
      const imgs = []
      for (let i = 0; i < image.length; i++) {
        const fil = image[i];
        imgs.push(fil)
      }
      const urls = await Promise.all(
        imgs.map((_file) => fileUpload(_file))
      )
      console.log({ urls })
      
      const docRef = addDoc(collection(db, "patientDetail"), {
        ...patient,
        imageUrl: urls,
      });
      console.log("Document written with ID: ", docRef);
      // .then((data) => {
      // })
      // .catch((e) => {
      //   console.log(e);
      // });
    } catch (e) {
      console.error("Error adding document: ", e);
    }
    setPatient((prev) => ({
      ...prev,
      name: "",
      email: "",
      disease: "",
      age: "",
      imageUrl: "",
      date: "",
      picDetail: ""
    }));
    setImage([])
    // navigate('/complaint');
    // alert("Patient Registered..")
  };

  return (
    <>
      <Header1 />
      <div className="loginBox">

        <h1>Registration</h1>
        <form>
          <div className='.loginBox'>
            <label htmlFor='Name' >Patient Name</label>
            <Input
              required={true}
              placeholder="Name"
              type="text"
              value={patient.name}
              onChange={(value) => {
                setPatient((prev) => ({
                  ...prev,
                  name: value,
                }));
              }}
            />
          </div>
          <div className='.loginBox'>
            <label htmlFor='Email'>Patient Email</label>
            <Input
              required={true}
              placeholder="Email"
              type="text"
              value={patient.email}
              onChange={(value) => {
                setPatient((prev) => ({
                  ...prev,
                  email: value,
                }));
              }}
            />
          </div>

          <div className='.loginBox'>
            <label htmlFor='Age'>Patient Age</label>
            <Input
              required={true}
              placeholder="Age"
              type="Number"
              value={patient.age}
              onChange={(value) => {
                setPatient((prev) => ({
                  ...prev,
                  age: value,
                }));
              }}
            />
          </div>

          <div className='.loginBox'>
            <label htmlFor='Disease'>Disease</label>
            <Input
              required={true}
              placeholder="Disease"
              type="text"
              value={patient.disease}
              onChange={(value) => {
                setPatient((prev) => ({
                  ...prev,
                  disease: value,
                }));
              }}
            />
          </div>



          <div className='.loginBox'>
            <label htmlFor='Date'>Date</label>
            <Input
              required={true}
              placeholder="Date"
              type="date"
              vlaue={patient.date}
              onChange={(value) => {
                setPatient((prev) => ({
                  ...prev,
                  date: value,
                }));
              }}
            />
          </div>

          <label htmlFor='Uploadimage'>Upload Image</label>


          <div className='ui'>
            <input className='filename' type="file" name="filename"
              multiple onChange={(e) => { setImage(e.target.files) }} />


            <select className='sel'
              vlaue={patient.picDetail}
              required={true}
              onChange={(e) => {
                setPatient((prev) => ({
                  ...prev,
                  picDetail: e.target.value,
                }));
              }}
            >
              <option className='opt' value="">select</option>
              <option className='opt' value="Blood Report">Blood Report</option>
              <option className='opt' value="Medican Report">Medican Report</option>
              <option className='opt' value="Physical Report">Physical Report</option>
            </select>
          </div>

          <button type='submit' className='btns' onClick={register}>
            Save
          </button>
          {/* <button type='submit' className='btns' onClick={register}>
            See All Patient
          </button> */}
        </form>


      </div>

    </>
  )
}

export default Patientregistration
