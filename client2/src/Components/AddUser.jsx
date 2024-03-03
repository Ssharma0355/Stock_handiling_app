import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";
import "./AddUser.css";
import { toast } from 'react-hot-toast';


const AddUser = () => {
    const [user, setUser] = useState({
        fname: "",
        lname: "",
        email: "",
        password: ""
    });
const navigate = useNavigate();
    const inputHandler = (e) => {
        const { name, value } = e.target;
        setUser(prevState => ({ ...prevState, [name]: value }));
    }

    const submitForm = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:8000/api/create", user);
            console.log(response);
            toast.success(response.data.msg,{position:"top-right"})
            navigate('/');
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div>
            <div className='adduser'>
                <Link to={"/"}>Back</Link>
                <h3 className='txt'>Add New User</h3>
                <form className='addUserForm' onSubmit={submitForm}>
                    <div className='inputGroup'>
                        <label htmlFor='fname'>First Name</label>
                        <input type="text" onChange={inputHandler} id="fname" name="fname" autoComplete='off' placeholder='First Name' />
                    </div>
                    <div className='inputGroup'>
                        <label htmlFor='lname'>Last Name</label>
                        <input type="text" onChange={inputHandler} id="lname" name="lname" autoComplete='off' placeholder='Last Name' />
                    </div>
                    <div className='inputGroup'>
                        <label htmlFor='email'>Email</label>
                        <input type="email" onChange={inputHandler} id="email" name="email" autoComplete='off' placeholder='Email' />
                    </div>
                    <div className='inputGroup'>
                        <label htmlFor='password'>Password</label>
                        <input type="password" onChange={inputHandler} id="password" name="password" autoComplete='off' placeholder='Password' />
                    </div>
                    <div className='inputGroup'>
                        <button type='submit'>Add User</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddUser;
