import React, { useContext, useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useAuth } from "../context/Authentiction";
import { adminNavbar, userNavbar } from "./Data"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




let Navbar = () => {
    const [auth, setAuth] = useAuth();
    const [navbar, setNavbar] = useState([])
    let navigate = useNavigate()
    // console.log(auth.user?.role);

    useEffect(() => {
        setNavbar(auth?.user?.role === 'admin' ? adminNavbar : userNavbar);
    }, [])

    let logout = () => {
        setAuth({ ...auth, user: null, token: "" });
        localStorage.removeItem('auth')
        toast.success("logout successful!", {
            position: "top-center",
            autoClose: 1500,
            theme: "light",
            onClose: () => {
                navigate('/');
            }
        });
    }

    return (
        <>
            <nav className="navbar navbar-expand-lg">
                <div className="container">
                    <a className="navbar-brand" href="#"><img src="https://evara-nextjs.vercel.app/assets/imgs/theme/logo.svg" alt="logo image" /></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <div className="hrad-info d-flex flex-grow-1 align-items-center">
                            <ul className="navbar-nav justify-content-center flex-grow-1">
                                {
                                    navbar?.map((val, ind) => {
                                        return (
                                            <React.Fragment key={ind} >
                                                <li className="nav-item">
                                                    <Link className="nav-link" to={val.path}>{val.name}</Link>
                                                </li>
                                            </React.Fragment>
                                        )
                                    })
                                }
                            </ul>
                            <div className="head-icon  d-flex align-items-center">
                                <Link><img src="https://evara-nextjs.vercel.app/assets/imgs/theme/icons/icon-compare.svg" alt="icon image" /></Link>
                                <Link><img src="https://evara-nextjs.vercel.app/assets/imgs/theme/icons/icon-heart.svg" alt="icon image" /></Link>
                                <Link><img src="https://evara-nextjs.vercel.app/assets/imgs/theme/icons/icon-cart.svg" alt="icon image" /><span>0</span></Link>
                                <div className="dropdown">
                                    <Link data-bs-toggle="dropdown">
                                        <i className="fa-regular fa-circle-user ps-3"></i>
                                    </Link>
                                    <div className="profile-data dropdown-menu  dropdown-menu-center mt-3">
                                        <span className="mb-2"><i className="fa-regular fa-user"></i></span>
                                        <h2 className="mb-1"> {auth.user?.name}</h2>
                                        <p> {auth.user?.email}</p>
                                        <button onClick={logout}>logout</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </nav>
            <ToastContainer />
        </>
    )
}


let Heading = ({ content, title }) => (
    <h2 className="heading"><span>{content} </span>{title}</h2>
)

export { Navbar, Heading }