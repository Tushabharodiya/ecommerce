import React, { useEffect } from 'react'


const Product = ({ img,backimage, name, brand, price, sale }) => {
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
                <div className="product-img">
                    <img src={img} alt="product image" />
                    <img className='hover-img' src={backimage} alt="product image" />
                </div>
                <div className="product-data">
                    <div className="sale  position-absolute ">
                        {sale && (
                            <div className="sale position-absolute">
                                <span>{sale}</span>
                            </div>
                        )}
                    </div>
                    <div className="product-action product-services d-flex">
                        <a href="#" className='d-inline-block' data-bs-toggle="tooltip" data-bs-placement="top" data-bs-custom-class="custom-tooltip" data-bs-title="quick view"><i class="fa-regular fa-eye me-1"></i></a>
                        <a href="#" className='d-inline-block' data-bs-toggle="tooltip" data-bs-placement="top" data-bs-custom-class="custom-tooltip" data-bs-title="add to wishlist"><i class="fa-regular fa-heart me-1"></i></a>
                        <a href="#" className='d-inline-block' data-bs-toggle="tooltip" data-bs-placement="top" data-bs-custom-class="custom-tooltip" data-bs-title="compare"><i class="fa-solid fa-shuffle me-1"></i></a>
                    </div>
                    <a href="#">{brand}</a>
                    <h2 className='mb-0'><a href="#">{name}</a></h2>
                    <div className="rating-result">
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
                    <div className="product-cart product-action ">
                        <a href="#" className='d-inline-block' data-bs-toggle="tooltip" data-bs-placement="top" data-bs-custom-class="custom-tooltip" data-bs-title="add to cart"><i className="fa-solid fa-bag-shopping" ></i></a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Product
