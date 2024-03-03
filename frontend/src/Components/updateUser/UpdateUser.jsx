import React from 'react'
import Navbar from '../Navbar'
import { Link } from 'react-router-dom'
import Footer from '../Footer'
import '../addUser/AddUser.css';

const UpdateUser = () => {
  return (
    <div>
      <Navbar />
      <div className='adduser'>
        <Link to={"/"}>Back</Link>
        <h3 className='txt'>
Update User
        </h3>
        <form className='addUserForm' >
          <div className='inputGroup'>
            <label htmlFor='fname'>First Name</label>
            <input type="text" id="fname" name="fname" autoComplete='off' placeholder='First Name'/>
          </div>
          <div className='inputGroup'>
            <label htmlFor='lname'>Last Name</label>
            <input type="text" id="lname" name="lname" autoComplete='off' placeholder='Last Name' />
          </div>
          <div className='inputGroup'>
            <label htmlFor='email'>Email</label>
            <input type="email" id="email" name="email" autoComplete='off' placeholder='Email' />
          </div>
          
          <div className='inputGroup'>
                      <button type='submit'>Update User</button>
          </div>

        </form>
      </div>
      <Footer />
    </div>
  )
}

export default UpdateUser
