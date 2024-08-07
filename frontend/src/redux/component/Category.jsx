import React from 'react'
const Category = ({ img, title }) => {
    return (
        <>
            <div className="card-1">
                <div className="category-list">
                    <div className="category-img">
                        <img src={img} alt="category image" />
                    </div>
                    <h5>{title}</h5>
                </div>
            </div>
        </>
    )
}

export default Category
