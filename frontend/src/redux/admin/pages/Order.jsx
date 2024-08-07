import React from 'react'
import Sidebar from './Sidebar'

const Order = () => {
    return (
        <>
            <section className="order">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-2">
                            <Sidebar />
                        </div>
                        <div className="col-lg-10">
                            <h1>order</h1>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Order
