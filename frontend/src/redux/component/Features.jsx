import React from 'react'

const Features = ({ img, title, bgcolor }) => {
    return (
        <>
            <div className="feature-card">
                <img src={img} className='mb-4' alt="feature image" />
                <h4 className='mb-0' style={{ backgroundColor: bgcolor }}>{title}</h4>
            </div>
        </>
    )
}

export default Features
