import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import Navbar from '../Navbar.jsx'
import Footer from '../Footer.jsx'
// import axios from "axios";
import "./AddUser.css";
// import { response } from 'express';
const AddUser = () => {
  const users={
    fname:"",
    lname:"",
    email:"",
    password:""
  }

  const [user,setUser]=useState(users);
  const inputHandler =(e)=>{
    const {name,value}=e.target;
     setUser({...user,[name]:value})//spread operator prev data still and oppend new data
     console.log(user);
  }

  // const submitForm = async (e)=>{
    // e.preventDefalut();
    // //Axios hiting API with AXIOS communication HTTPs req
    // await axios.post("http://localhost:8000/api/create",user)
    // .then((response)=>{
    //   console.log(response);
    // }).catch(error=>console.log(error))
  // }
  // onChange = { inputHandler }
  // onSubmit = { submitForm }
  return (
    <div>
      <Navbar />
      <div className='adduser'>
        <Link to={"/"}>Back</Link>
        <h3 className='txt'>
          Add New User
        </h3>
        <form className='addUserForm' >
          <div className='inputGroup'>
            <label htmlFor='fname'>First Name</label>
            <input type="text"  id="fname" name="fname" autoComplete='off' placeholder='First Name'/>
          </div>
          <div className='inputGroup'>
            <label htmlFor='lname'>Last Name</label>
            <input type="text"  id="lname" name="lname" autoComplete='off' placeholder='Last Name' />
          </div>
          <div className='inputGroup'>
            <label htmlFor='email'>Email</label>
            <input type="email"  id="email" name="email" autoComplete='off' placeholder='Email' />
          </div>
          <div className='inputGroup'>
            <label htmlFor='password'>Password</label>
            <input type="password" id="password" name="password" autoComplete='off' placeholder='Password' />
          </div>
          <div className='inputGroup'>
            <button type='submit' >Add User</button>
          </div>

        </form>
      </div>
      <Footer />
    </div>
  )
}

export default AddUser
