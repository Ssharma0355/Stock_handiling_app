import React from 'react'
import "./User.css";
import Navbar from '../Navbar.jsx'
import Footer from '../Footer.jsx'
import{Link} from 'react-router-dom'

const User = () => {
  return (
    <div>
        <Navbar />
        <div className='userTable'>
              <Link to={"/add"} className='addButton'><i className="fa-solid fa-user-plus"></i></Link>
           <table border={1} cellPadding={10} cellSpacing={0}>
            <thead>
                <tr>
                    <th>S.No</th>
                    <th>Name</th>
                    <th>E-mail</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1.</td>
                    <td>Sachin Sharma</td>
                    <td>ssharma0355@gmail.com</td>
                          <td className='actionButtons'>
                              <button ><i className="fa-solid fa-trash"></i></button>
                              <Link to={"/edit"}><i className="fa-solid fa-pen-to-square"></i></Link>
                    </td>
                </tr>
            </tbody>
           </table>
        </div>
          <div className='userTable'>
              <Link to={"/add"} className='addButton'><i className="fa-solid fa-user-plus"></i></Link>
              <table border={1} cellPadding={10} cellSpacing={0}>
                  <thead>
                      <tr>
                          <th>S.No</th>
                          <th>Name</th>
                          <th>E-mail</th>
                          <th>Stocks</th>
                          <th>Actions</th>
                      </tr>
                  </thead>
                  <tbody>
                      <tr>
                          <td>1.</td>
                          <td>Sachin Sharma</td>
                          <td>ssharma0355@gmail.com</td>
                          <td>Apple, Microsoft, LensKart</td>
                          <td className='actionButtons'>
                              <button ><i className="fa-solid fa-trash"></i></button>
                              <Link to={"/edit"}><i className="fa-solid fa-pen-to-square"></i></Link>
                          </td>
                      </tr>
                  </tbody>
              </table>
          </div>
          <div className='userTable'>
              <Link to={"/add"} className='addButton'><i className="fa-solid fa-user-plus"></i></Link>
              <table border={1} cellPadding={10} cellSpacing={0}>
                  <thead>
                      <tr>
                          <th>S.No</th>
                          <th>Name</th>
                          <th>E-mail</th>
                          <th>Actions</th>
                      </tr>
                  </thead>
                  <tbody>
                      <tr>
                          <td>1.</td>
                          <td>Sachin Sharma</td>
                          <td>ssharma0355@gmail.com</td>
                          <td className='actionButtons'>
                              <button ><i className="fa-solid fa-trash"></i></button>
                              <Link to={"/edit"}><i className="fa-solid fa-pen-to-square"></i></Link>
                          </td>
                      </tr>
                  </tbody>
              </table>
          </div>
        <Footer />
    </div>
  )
}

export default User
