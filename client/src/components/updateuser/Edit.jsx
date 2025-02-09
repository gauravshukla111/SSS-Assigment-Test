import React, {useEffect, useState} from 'react'
import { Link, useParams } from 'react-router-dom'
import "../adduser/add.css"
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import toast from "react-hot-toast"

function Edit() {

    const users = {
        fname: '',
        lname: '',
        email: ''
    };
        const navigate = useNavigate();
    
    const {id} = useParams();
    const [user, setUser] = useState(users)
    const inputChange = (e)=>{
        const {name, value} = e.target;
        setUser({...user, [name]: value})
        console.log(user)
    }
    useEffect(()=>{
        axios.get(`https://crud-application-backend-5qja.onrender.com/api/getone/${id}`)
        .then((response)=>{
            setUser(response.data.data)
            console.log(response)

        }).catch((error)=>{
            console.log(error)
        })

    },[id])

    const submitForm = async(e)=>{
        e.preventDefault();
        await axios.put(`https://crud-application-backend-5qja.onrender.com/api/update/${id}`, user)
        .then((response) => {
        toast.success(response.data.message, { position: "top-right" });
        navigate("/");
        setUser(users); // Reset form fields

    })}



  return (
    <div className='addUser'>
        <Link to={"/"}>Back</Link>
        <h3>Update User</h3>
        <form className='addUserForm' onSubmit={submitForm}>
            <div className='inputGroup'>
                <label htmlFor="fname">First name</label>
                <input type="text" value={user.fname} onChange={inputChange} id='fname' name='fname' autoComplete='off' placeholder='First Name' />
            </div>
            <div className='inputGroup'>
                <label htmlFor="lname">Last name</label>
                <input type="text" id='lname' value={user.lname} onChange={inputChange} name='lname' autoComplete='off' placeholder='Last Name' />
            </div>
            <div className='inputGroup'>
                <label htmlFor="email">Email</label>
                <input type="email" id='email' value={user.email} onChange={inputChange} name='email' autoComplete='off' placeholder='Email' />
            </div>
            <div className='inputGroup'>
                <button type="submit">Update User</button>
            </div>

        </form>
      
    </div>
  )
}

export default Edit
