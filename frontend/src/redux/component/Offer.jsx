import React from 'react'

const Offer = ({img,title,off}) => {
    return (
        <>
            <div className="offer-card position-relative">
                <div className="offer-img">
                    <img src={img} alt="offer images" />
                </div>
                <div className="offer-data position-absolute ">
                    <span>{off}</span>
                    <h4>{title}</h4>
                    <button>shop now <i className="fa-solid fa-arrow-right"></i></button>
                </div>
            </div>
        </>
    )
}

export default Offer
