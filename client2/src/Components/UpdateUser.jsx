import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const UpdateUser = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [user, setUser] = useState({
        fname: "",
        lname: "",
        email: ""
    });

    useEffect(() => {
        axios.get(`http://localhost:8000/api/getone/${id}`)
            .then((response) => {
                setUser(response.data); // Assuming the API response contains user data
            })
            .catch((error) => {
                console.log(error);
            });
    }, [id]);

    const inputChangeHandler = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    }

    const submitForm = async(e) => {
        e.preventDefault();
        try {
            const response = await axios.put(`http://localhost:8000/api/update/${id}`, user);
            console.log(response);
            toast.success(response.data.msg, { position: "top-right" })
            navigate('/');
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div>
            <div className='adduser'>
                <Link to={"/"}>Back</Link>
                <h3 className='txt'>
                    Update User
                </h3>
                <form className='addUserForm' onSubmit={submitForm}>
                    <div className='inputGroup'>
                        <label htmlFor='fname'>First Name</label>
                        <input type="text" onChange={inputChangeHandler} value={user.fname} id="fname" name="fname" autoComplete='off' placeholder='First Name' />
                    </div>
                    <div className='inputGroup'>
                        <label htmlFor='lname'>Last Name</label>
                        <input type="text" onChange={inputChangeHandler} value={user.lname} id="lname" name="lname" autoComplete='off' placeholder='Last Name' />
                    </div>
                    <div className='inputGroup'>
                        <label htmlFor='email'>Email</label>
                        <input type="email" onChange={inputChangeHandler} value={user.email} id="email" name="email" autoComplete='off' placeholder='Email' />
                    </div>
                    <div className='inputGroup'>
                        <button type='submit'>Update User</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default UpdateUser;
