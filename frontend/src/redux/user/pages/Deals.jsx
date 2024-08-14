import React from 'react'

const Deals = ({ image, price, name }) => {
    return (
        <div>
            <div className="deals-product d-flex align-items-center">
                <div className="deals-img">
                    <img src={image} alt="bags image" />
                </div>
                <div className="deals-info ">
                    <h4 className='mb-0'><a href="#">{name}</a></h4>
                    <div className="price">
                        <span>${price}</span>
                        <span> $245.8</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Deals
