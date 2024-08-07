import axios from 'axios';
import React, { useRef } from 'react'
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BASE_URL, USER_FORGOTPASSWORD } from '../constnt';

const ForgerPassword = () => {

    let email = useRef();
    let password = useRef();

    let handleSubmit = async (e) => {
        e.preventDefault();

        try {
            let user = {
                email: email.current.value,
                password: password.current.value,
            }
            let res = await axios.patch(BASE_URL + USER_FORGOTPASSWORD, user)
            // console.log(res);
            if (res) {
                toast.success("Password successfully changed. Please log in with your new password.!", {
                    position: "top-right",
                    theme: "light",
                })
            }

            email.current.value = "";
            password.current.value = ""

        } catch (error) {
            console.log(error);
            if (error.response.data) {
                toast.error(error.response.data.error, {
                    position: "top-right",
                    theme: "light",
                })
            }
        }

    }

    return (
        <>
            <div className="forgot password  login">
                <form onSubmit={handleSubmit}>
                    <h2>forgot password</h2>
                    <p>Enter your new password below to reset your password </p>
                    <div className="form-group">
                        <input type="email" className="form-control" name='email' ref={email} placeholder="enter your email" />
                    </div>
                    <div className="form-group">
                        <input type="password" className="form-control" name='password' ref={password} placeholder="enter new Password" />
                    </div>

                    <button type="submit" className="button mb-3 d-block w-100">Reset password</button>
                    <span className='text-center d-block py-2'>back to  ?<Link to={"/"}> log in</Link></span>
                </form>
            </div>
            <ToastContainer />
        </>
    )
}

export default ForgerPassword
