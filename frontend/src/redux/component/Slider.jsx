import React from 'react'

const Slider = () => {
    return (
        <>
            <div id="carouselExampleCaptions" className="carousel slide">
                <div className="container">
                    <div className="carousel-inner">
                        <div className="carousel-item  active">
                            <div className="row">
                                <div className="col-lg-5 col-md-6">
                                    <div className="banner-data">
                                        <div className="slider-data">
                                            <h4>Trade-in offer</h4>
                                            <h2>Supper value deals</h2>
                                            <h1>On all products</h1>
                                            <p>Save more with coupons & up to 70% off</p>
                                            <div className="banner-btn">
                                                <button>shop now</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-7 col-md-6">
                                    <img src="https://evara-nextjs.vercel.app/assets/imgs/slider/slider-1.png" alt="slider image" />
                                </div>
                            </div>

                        </div>
                        <div className="carousel-item">
                            <div className="row">
                                <div className="col-lg-5 col-md-6">
                                    <div className="banner-data">
                                        <div className="slider-data">
                                            <h4>Hot promotions</h4>
                                            <h2>Fashion Trending</h2>
                                            <h1 className='pink'>Great Collection</h1>
                                            <p>Save more with coupons & up to 20% off</p>
                                            <div className="banner-btn">
                                                <button>discover now</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-7 col-md-6">
                                    <img src="https://evara-nextjs.vercel.app/assets/imgs/slider/slider-2.png" alt="slider image" />
                                </div>
                            </div>

                        </div>
                        <div className="carousel-item ">
                            <div className="row">
                                <div className="col-lg-5 col-md-6">
                                    <div className="banner-data">
                                        <div className="slider-data">
                                            <h4>Upcoming Offer</h4>
                                            <h2>Big Deals From</h2>
                                            <h1 className='bule'>Manufacturer</h1>
                                            <p>Clothing, Shoes, Bags, Wallets...</p>
                                            <div className="banner-btn">
                                                <button>shop now</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-7 col-md-6">
                                    <img src="https://evara-nextjs.vercel.app/assets/imgs/slider/slider-3.png" alt="slider image" />
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <i class="fa-solid fa-angle-left"></i>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <i class="fa-solid fa-angle-right"></i>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </>
    )
}

export default Slider
