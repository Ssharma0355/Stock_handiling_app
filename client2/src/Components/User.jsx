import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import "./User.css";
import Graph from './Graph';

const User = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("http://localhost:8000/api/getAll");
                setUsers(response.data);
            } catch (error) {
                console.log(error);
            }
        }
        fetchData();
    }, []);

    const deleteUser = async (userId) => {
        try {
            await axios.delete(`http://localhost:8000/api/delete/${userId}`);
            setUsers(prevUsers => prevUsers.filter(user => user._id !== userId));
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div>
            <div className='userTable'>
                <Link to={"/add"} className='addButton'><i className="fas fa-user-plus"></i></Link>
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
                        {users.map((user, index) => (
                            <tr key={user._id}>
                                <td>{index + 1}</td>
                                <td>{user.fname} {user.lname}</td>
                                <td>{user.email}</td>
                                <td className='actionButtons'>
                                    <button onClick={() => deleteUser(user._id)}><i className="fas fa-trash"></i></button>
                                    <Link to={`/edit/${user._id}`}><i className="fas fa-pen-to-square"></i></Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            {/* <Graph /> */}
        </div>
    )
}

export default User;
