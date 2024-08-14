import React from 'react'

const Footer = () => {
    return (
        <>
            <footer>
                <section className="newslatter d-flex align-items-center">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-3">
                                <div className="news-email d-flex align-items-center">
                                    <img src="https://evara-nextjs.vercel.app/assets/imgs/theme/icons/icon-email.svg" alt="email icon" />
                                    <h4 className='mb-0'>Sign up to Newsletter</h4>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="news-email d-flex  ">
                                    <h5 className='mb-0'>...and receive$25 coupon htmlFor first shopping.</h5>
                                </div>
                            </div>
                            <div className="col-lg-5">
                                <form className='form-subcriber d-flex'>
                                    <input type="text" className="form-control bg-white font-small" placeholder="Enter your email" />
                                    <button type='submit' className="btn bg-dark text-white">Subscribe</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="container">
                    <div className="footer-data">
                        <div className="row">
                            <div className="col-lg-4">
                                <div className="widget-title">
                                    <div className="fot-logo">
                                        <img src="https://evara-nextjs.vercel.app/assets/imgs/theme/logo.svg" alt="logo image" />
                                    </div>
                                    <h5>Contact</h5>
                                    <p><strong>Address: </strong>562 Wellington Road, Street 32, San Francisco</p>
                                    <p><strong>Phone: </strong>+01 2222 365 /(+91) 01 2345 6789</p>
                                    <p><strong>Hours: </strong>10:00 - 18:00, Mon - Sat</p>
                                    <h5 className='mt-4 pt-2'>Follow Us</h5>
                                    <div className="mobile-social-icon">
                                        <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
                                        <a href="#"><i className="fa-brands fa-twitter"></i></a>
                                        <a href="#"><i className="fa-brands fa-instagram"></i></a>
                                        <a href="#"><i className="fa-brands fa-pinterest-p"></i></a>
                                        <a href="#"><i className="fa-brands fa-youtube"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-2">
                                <div className="widget-title">
                                    <h2>About</h2>
                                    <div className="widget-list">
                                        <ul>
                                            <li><a href="#">About Us</a></li>
                                            <li><a href="#">Delivery Information</a></li>
                                            <li><a href="#">Privacy Policy</a></li>
                                            <li><a href="#">Terms & Conditions</a></li>
                                            <li><a href="#">Contact Us</a></li>
                                            <li><a href="#">Support Center</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-2">
                                <div className="widget-title">
                                    <h2>My Account</h2>
                                    <div className="widget-list">
                                        <ul>
                                            <li><a href="#">Sign In</a></li>
                                            <li><a href="#">View Cart</a></li>
                                            <li><a href="#">My Wishlist</a></li>
                                            <li><a href="#">Track My Order</a></li>
                                            <li><a href="#">Help</a></li>
                                            <li><a href="#">Order</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="widget-title">
                                    <h2>Install App</h2>
                                    <p>From App Store or Google Play</p>
                                    <div className="download-app d-flex ">
                                        <a href="#"><img src="https://evara-nextjs.vercel.app/assets/imgs/theme/app-store.jpg" alt="google image" /></a>
                                        <a href="#"><img src="https://evara-nextjs.vercel.app/assets/imgs/theme/google-play.jpg" alt="google image" /></a>
                                    </div>
                                    <p className='mb-3 pb-1'>Secured Payment Gateways</p>
                                    <img className='payment' src="https://evara-nextjs.vercel.app/assets/imgs/theme/payment-method.png" alt="payment image" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="webflow">
                        <div className="row">
                            <div className="col-lg-6">
                                <p className='mb-0'>© 2024, <a href="#"><strong>Evara</strong></a> - React Redux Nextjs Ecommerce Template</p>
                            </div>
                            <div className="col-lg-6">
                                <p className='text-lg-end text-start mb-0'>Designed by <a href="#">Alithemes.com.</a> All rights reserved</p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer
