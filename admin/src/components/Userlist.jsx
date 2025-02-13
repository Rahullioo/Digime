/* eslint-disable no-unused-vars */
import React,{useState, useEffect} from 'react'
import instance from '../axios/axiosInstance'
import { Link } from 'react-router-dom'

const Userlist = () => {

    const [users, setUsers] = useState([]);


    useEffect(()=>{
        getUsers();
    },[]);

    const getUsers = async ()=>{
        const response = await instance.get('/users');
        setUsers(response.data);
    }

    const deleteUser = async (userId) =>{
        await instance.delete(`/users/${userId}`);
        getUsers();
    }

  return (
    <div>
        <h1 className="title">Users</h1>
        <h2 className="subtitle">List of Users</h2>
        <Link to={"/users/add"} className='button is-primary mb-2'>Add New</Link>
        <table className='table is-hoverable is-fullwidth'>
            <thead>
                <tr>
                    <th className='has-text-centered is-vcentered'>No</th>
                    <th className='has-text-centered is-vcentered'>Name</th>
                    <th className='has-text-centered is-vcentered'>Email</th>
                    <th className='has-text-centered is-vcentered'>Role</th>
                    <th className='has-text-centered is-vcentered'>Actions</th>
                </tr>
            </thead>
            <tbody>
                {users.map((user, index)=>(
                    <tr key={user.uuid}>
                        <td className='has-text-centered is-vcentered'>{index + 1}</td>
                        <td className='has-text-centered is-vcentered'>{user.name}</td>
                        <td className='has-text-centered is-vcentered'>{user.email}</td>
                        <td className='has-text-centered is-vcentered'>{user.role}</td>
                        <td className='has-text-centered is-vcentered'>
                            <Link to={`/users/edit/${user.uuid}`} className='button is-small is-info'>Edit</Link>
                            <button onClick={()=>deleteUser(user.uuid)} className='button is-small is-danger'>Delete</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}

export default Userlist