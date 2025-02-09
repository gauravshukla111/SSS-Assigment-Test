import React, { useState } from 'react';
import './add.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import toast from "react-hot-toast"
function Add() {
    const users = {
        fname: '',
        lname: '',
        email: '',
        password: ''
    };

    const [user, setUser] = useState(users);
    const navigate = useNavigate();
   

    const inputHandler = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    };

    const submitForm = async (e) => {
        e.preventDefault();
        await axios.post("https://crud-application-backend-5qja.onrender.com/api/create", user)
        .then((response) => {
        toast.success(response.data.message, { position: "top-right" });
        navigate("/");
        setUser(users); // Reset form fields
    })
    .catch((error) => {
        toast.error(error.response.data.message || "An error occurred", { position: "top-right" });
    });

    };
    
    

    return (
        <div className="addUser">
            <Link to="/">Back</Link>
            <h3>Add New User</h3>
            {/* {message && <p className="feedback">{message}</p>} */}
            <form className="addUserForm" onSubmit={submitForm}>
                <div className="inputGroup">
                    <label htmlFor="fname">First Name</label>
                    <input
                        type="text"
                        onChange={inputHandler}
                        id="fname"
                        name="fname"
                        autoComplete="off"
                        placeholder="First Name"
                        required
                        value={user.fname}
                    />
                </div>
                <div className="inputGroup">
                    <label htmlFor="lname">Last Name</label>
                    <input
                        type="text"
                        onChange={inputHandler}
                        id="lname"
                        name="lname"
                        autoComplete="off"
                        placeholder="Last Name"
                        required
                        value={user.lname}
                    />
                </div>
                <div className="inputGroup">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        onChange={inputHandler}
                        id="email"
                        name="email"
                        autoComplete="off"
                        placeholder="Email"
                        required
                        value={user.email}
                    />
                </div>
                <div className="inputGroup">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        onChange={inputHandler}
                        id="password"
                        name="password"
                        autoComplete="off"
                        placeholder="Password"
                        required
                        value={user.password}
                    />
                </div>
                <div className="inputGroup">
                    <button type="submit">
                        Add
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Add;

