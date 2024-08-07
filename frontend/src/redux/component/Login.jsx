import axios from 'axios';
import React, { useContext, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { BASE_URL, USER_LOGIN, USER_PROFILE } from '../constnt';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAuth } from '../context/Authentiction';

const Login = () => {

    let email = useRef();
    let password = useRef();
    let navigate = useNavigate();
    const [auth, setAuth] = useAuth();

    let handleSubmit = async (e) => {
        e.preventDefault();

        let user = {
            email: email.current.value,
            password: password.current.value,
        }
        try {

            let response = await axios.post(BASE_URL + USER_LOGIN, user, { withCredentials: true })
            const data = response.data;
            localStorage.setItem('auth', JSON.stringify(data));

            setAuth({
                ...auth,
                user: response.data.user,
                token: response.data.token
            });
            axios.defaults.headers.common["Authorization"] = data.token;

            toast.success("Login successful!", {
                position: "top-right",
                autoClose: 1500,
                theme: "light",
                onClose: () => {
                    if (data.user?.role == "admin") {
                        navigate('/dashboard')
                    } else {
                        navigate('/home')
                    }
                }
            });
        } catch (error) {
            if (error.response.data) {
                toast.error(error.response.data.error, {
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
            <div className="login">
                <form onSubmit={handleSubmit}>
                    <h2>login</h2>
                    <div className="form-group">
                        <input type="email" className="form-control" name='email' ref={email} placeholder="Enter email" />
                    </div>
                    <div className="form-group">
                        <input type="password" className="form-control" name='password' ref={password} placeholder="Password" />
                    </div>
                    <div className="forget d-flex justify-content-between  align-items-center my-4 ">
                        <div className="form-check">
                            <input type="checkbox" className="form-check-input my-0  " id="checkbtn" />
                            <label className="htmlForm-check-label m-0 ms-1" htmlFor="checkbtn">Remember me</label>
                        </div>
                        <div className="rember">
                            <Link to={"/forgetpassword"} className='text-capitalize pt-2'>forgot password ? </Link>
                        </div>
                    </div>
                    <button type="submit" className="button mb-3 d-block w-100">Login</button>
                    <span className='text-center d-block py-2'>Not a Member ?<Link to={"/register"}> create Account</Link></span>
                </form>
            </div>
            <ToastContainer />
        </>
    )
}

export default Login
