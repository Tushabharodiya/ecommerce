import React from 'react'
import Sidebar from './Sidebar'

const Userlist = () => {
    return (
        <>
            <section className="Userlist">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-2">
                            <Sidebar />
                        </div>
                        <div className="col-lg-10">
                            <h1>userlist</h1>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Userlist
