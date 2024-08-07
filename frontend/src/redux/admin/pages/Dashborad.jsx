import React from 'react'
import Sidebar from './Sidebar'

const Dashborad = () => {
    return (
        <>
            <section className="dashboard">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-2">
                            <Sidebar  />
                        </div>
                        <div className="col-lg-10">
                            <h1>dashboard</h1>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Dashborad
