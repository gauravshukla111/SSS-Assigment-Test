import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './user.css';
import axios from 'axios';
import toast from "react-hot-toast"

const User = () => {
  const [users, setUsers] = useState([]);  // Initial state is an empty array
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://crud-application-backend-5qja.onrender.com/api/getall');
        // Check if response.data.data is an array and set it
        if (Array.isArray(response.data.data)) {
          setUsers(response.data.data);
        } else {
          console.error('Expected an array in response.data.data, but got:', response.data.data);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);  // Fetch data once when the component mounts

  const deleteUser = async (userId)=>{
    await axios.delete(`https://crud-application-backend-5qja.onrender.com/api/delete/${userId}`)
    .then((response)=>{
      setUsers((prevUser)=>prevUser.filter((user)=>user._id !== userId))
      console.log(response)
      toast.success(response.data.message, { position: "top-right" });


    }).catch((error)=>{
      console.log(error)
    })


  }

  return (
    <div className="userTable">
      <Link to="/add" className="addButton">
        Add User
      </Link>
      <table border={1} cellPadding={10} cellSpacing={0}>
        <thead>
          <tr>
            <th>S.No.</th>
            <th>User Name</th>
            <th>User Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(users) && users.length > 0 ? (
            users.map((user, index) => (
              <tr key={user._id || index}>
                <td>{index + 1}.</td>
                <td>{user.fname} {user.lname}</td>
                <td>{user.email}</td>
                <td className="actionButtons">
                  <button onClick={()=>deleteUser(user._id)}>
                    <i className="fa-solid fa-trash"></i>
                  </button>
                  <Link to={`/edit/${user._id}`}>
                    <i className="fa-solid fa-pen-to-square"></i>
                  </Link>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4">No users found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default User;

