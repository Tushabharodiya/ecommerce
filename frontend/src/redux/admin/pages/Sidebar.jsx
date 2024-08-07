import React from 'react'
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <>
            <div className="sidebar">
                <div className="silebar-data">
                    <ul>
                        <li><i className="fa-solid fa-house"></i><Link to={"/dashboard"} href="#">dashborad</Link></li>
                        <li><i className="fa-solid fa-box-archive"></i><Link to={"/product"} href="#">product</Link></li>
                        <li><i className="fa-solid fa-cart-shopping"></i><Link to={"/order"} href="#">order</Link></li>
                        <li><i className="fa-solid fa-atom"></i><Link to={"/category"} href="#">category</Link></li>
                        <li><i className="fa-solid fa-address-book"></i><Link to={"/userlist"} href="#">userlist</Link></li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Sidebar;
