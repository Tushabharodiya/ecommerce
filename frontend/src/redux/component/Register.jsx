import axios from 'axios';
import React, { useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { BASE_URL, USER_REGISTER } from '../constnt';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Register = () => {

    let name = useRef();
    let email = useRef();
    let password = useRef();

    // user register
    let handleSubmit = async (e) => {
        e.preventDefault();
        try {
            let user = {
                name: name.current.value,
                email: email.current.value,
                password: password.current.value,
            }
            let res = await axios.post(BASE_URL + USER_REGISTER, user)
            // console.log(res);

            if (res.status == 201) {
                toast.success("Registration successful ! Please log in to continue.", {
                    position: "top-right",
                    theme: "light",
                })
            }
            name.current.value = "";
            email.current.value = "";
            password.current.value = "";

        } catch (error) {
            if (error.response.data) {
                toast.warn(error.response.data.error, {
                    position: "top-right",
                    theme: "light",
                })
            } else {
                console.log("Error message:", error);
                toast.error("An unexpected error occurred. Please try again.", {
                    position: "top-right",
                    theme: "light",
                });
            }
        }
    }
    return (
        <>
            <div className="register login">
                <form onSubmit={handleSubmit}>
                    <h2>Register</h2>
                    <div className="form-group">
                        <input type="text" className="form-control" name='name' ref={name} placeholder="Enter username" />
                    </div>
                    <div className="form-group">
                        <input type="email" className="form-control" name='email' ref={email} placeholder="Enter email" />
                    </div>
                    <div className="form-group">
                        <input type="password" className="form-control" name='password' ref={password} placeholder="Password" />
                    </div>
                    <button type="submit" className="button mb-3 d-block w-100">Register</button>
                    <span className='text-center d-block py-2'>alreay have an account ?<Link to={"/"}> Log in</Link></span>
                </form>
            </div>
            <ToastContainer />
        </>
    )
}

export default Register
