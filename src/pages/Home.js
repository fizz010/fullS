import React, { useEffect, useState } from 'react'
import axios from 'axios'
// import { Link, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function Home() {
    const [users, setUsers] = useState([])

    // const {id}=useParams()

    useEffect(() => {
        loadUsers()
    }, []);

    const loadUsers = async () => {
        const result = await axios.get("http://localhost:8080/user")
        setUsers(result.data);
    }

    const deleteUser=async(id)=>{
        await axios.delete(`http://localhost:8080/user/${id}`)
        loadUsers()
    }

    return (
        <>
        <div className="container" >
            <div className="py-4">
                <table className="table border shadow">
                    <thead className="conts bg-secondary">
                        <tr>
                            <th scope="col">User_Id</th>
                            <th scope="col">User_Name</th>
                            <th scope="col">User_Email</th>
                            <th scope="col">User_Age</th>
                            <th scope="col">Actions</th>

                        </tr>
                    </thead>
                    <tbody>

                        {
                            users.map((user, index) => (
                                <tr key={user.id}>
                                 {/* <th scope="row" > 
                                    {index + 1}
                                </th> */}
                                    <td><b>{user.id}</b></td>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.age}</td>
                                    <td>
                                        {/* <button className="btn btn-dark mx-2">View</button> */}
                                        <Link className="btn btn-outline-dark mx-2" to={`/updateuser/${user.id}`}>Update</Link>
                                        <button className="btn btn-outline-danger mx-2" onClick={()=>deleteUser(user.id)}>Delete</button>
                                    </td>

                                </tr>
                            ))
                        }


                    </tbody>
                </table>
            </div>

        </div>
        </>
    )
}

