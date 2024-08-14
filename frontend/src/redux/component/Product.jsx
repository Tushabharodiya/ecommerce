import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';


const Product = ({ img, backimage, name, brand, price, sale, id }) => {
    // Initialize all tooltips
    useEffect(() => {
        const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
        tooltipTriggerList.forEach((tooltipTriggerEl) => {
            new window.bootstrap.Tooltip(tooltipTriggerEl);
        });
    }, []);

    return (
        <>
            <div className="product-card position-relative">
                <Link to={`/${id}`} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} >
                    <div className="product-img">
                        <img src={img} alt="product image" />
                        <img className='hover-img' src={backimage} alt="product image" />
                    </div>
                </Link>
                <div className="product-data">
                    <div className="sale  position-absolute ">
                        {sale && (
                            <div className="sale position-absolute">
                                <span>{sale}</span>
                            </div>
                        )}
                    </div>
                    <Link to={"/shop"} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>{brand}</Link>
                    <h2 className='mb-0'><Link to={`/${id}`} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>{name}</Link></h2>
                    <div className="star">
                        <span><i className="fa-regular fa-star"></i>
                            <i className="fa-regular fa-star"></i>
                            <i className="fa-regular fa-star"></i>
                            <i className="fa-regular fa-star"></i>
                            <i className="fa-regular fa-star"></i></span>
                        <span className='ps-2'>90%</span>
                    </div>
                    <div className="price">
                        <span>${price}</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Product
