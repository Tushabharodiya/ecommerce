import React from 'react'
import { Link } from 'react-router-dom'
const Category = ({ img, title }) => {
    return (
        <>
            <div className="card-1">
                <div className="category-list">
                    <div className="category-img">
                        <Link to={"/shop"} ><img src={img} alt="category image" /></Link>
                    </div>
                    <h5><Link to={"/shop"}>{title}</Link></h5>
                </div>
            </div>
        </>
    )
}

export default Category
