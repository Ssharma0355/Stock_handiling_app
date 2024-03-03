import React from 'react'
import "./AddUser.css";


function Login() {
  return (
      <div>
          <div className='adduser'>
              {/* <Link to={"/"}>Back</Link> */}
              <h3 className='txt'>Login</h3>
              <form className='addUserForm' >
                  <div className='inputGroup'>
                      <label htmlFor='fname'>First Name</label>
                      <input type="text"  id="fname" name="fname" autoComplete='off' placeholder='First Name' />
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
                      <input type="password"  id="password" name="password" autoComplete='off' placeholder='Password' />
                  </div>
                  <div className='inputGroup'>
                      <button type='submit'>Add User</button>
                  </div>
              </form>
          </div>
      </div>
  )
}

export default Login