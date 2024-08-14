import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'; import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import { GET_CART_PENDING, POST_CART_PENDING, UPDATE_CART_PENDING } from '../admin/action';
import { useDispatch } from 'react-redux';
import { BASE_URL, UPDATE_CART } from '../constnt';
import axios from 'axios';
import { useAuth } from '../context/Authentiction';


const Productview = ({ name, brand, price, image, backimage, quantity, id, productId }) => {
    // console.log(name);

    let dispatch = useDispatch();
    const [auth, setAuth] = useAuth();
    let [count, setcount] = useState(1 )

    let quentityUp = async (id, quantity) => {
        if (quantity === undefined) {
            setcount(count + 1)
        } else {
            console.log(id, quantity);
            let newQuentity = quantity + 1;
            dispatch({ type: UPDATE_CART_PENDING, payload: { id, newQuentity } })
        }
    }

    let quentityDown = async (id, quantity) => {
        if (quantity === undefined) {
            if (count > 1) {
                setcount(count - 1)
            }
        } else {
            if (quantity > 1) {
                let newQuentity = quantity - 1;
                dispatch({ type: UPDATE_CART_PENDING, payload: { id, newQuentity } })
            } else {
                console.log("Quantity can't be less than 1");
            }
        }
    }

    // addToCart

    let addToCart = (productId) => {
        let data = {
            product: productId,
            user: auth.user._id,
        }
        // console.log(data);
        dispatch({ type: POST_CART_PENDING, payload: data })

    }

    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    return (
        <>
            <section className="productView pt-0">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-sm-12">
                            <Swiper
                                style={{
                                    '--swiper-navigation-color': '#fff',
                                    '--swiper-pagination-color': '#fff',
                                }}
                                loop={true}
                                spaceBetween={0}
                                navigation={true}
                                thumbs={{ swiper: thumbsSwiper }}
                                modules={[FreeMode, Navigation, Thumbs]}
                                className="mySwiper2"
                            >
                                <SwiperSlide>
                                    <img src={image} />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src={backimage} />
                                </SwiperSlide>
                            </Swiper>
                            <Swiper
                                onSwiper={setThumbsSwiper}
                                loop={true}
                                spaceBetween={10}
                                slidesPerView={4}
                                freeMode={true}
                                watchSlidesProgress={true}
                                modules={[FreeMode, Navigation, Thumbs]}
                                className="mySwiper"
                            >
                                <SwiperSlide>
                                    <img src={image} className='mt-2' />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src={backimage} className='mt-2' />
                                </SwiperSlide>

                            </Swiper>
                        </div>
                        <div className="col-lg-6">
                            <div className="details-data">
                                <h2>{name}</h2>
                                <div className="product-star star d-flex justify-content-between align-items-center">
                                    <span>Brands: <a href="#">{brand}</a></span>
                                    <span><i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star-half-stroke"></i>
                                        <span>(25 reviews)</span>
                                    </span>
                                </div>
                                <h4 className='mb-0'>$ {price} <span className='ps-3'>$ 4% Off</span></h4>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam rem officia, corrupti reiciendis minima nisi modi, quasi, odio minus dolore impedit fuga eum eligendi? Officia doloremque facere quia. Voluptatum, accusantium!</p>
                                <div className="warranty mb-4">
                                    <ul>
                                        <li><i className="fa-solid fa-crown pe-2"></i>1 Year AL Jazeera Brand Warranty</li>
                                        <li><i className="fa-solid fa-arrows-rotate pe-2"></i>30 Day Return Policy</li>
                                        <li><i className="fa-regular fa-credit-card pe-2"></i>Cash on Delivery available</li>
                                    </ul>
                                </div>
                                <div className="color d-flex  align-items-center">
                                    <span className='fw-bold pe-2'>Color </span>
                                    <ul className='d-flex'>
                                        <li><a href="#"><span></span></a></li>
                                        <li><a href="#"><span className='yellow'></span></a></li>
                                        <li><a href="#"><span className='bg-white'></span></a></li>
                                        <li><a href="#"><span className='orange'></span></a></li>
                                        <li><a href="#"><span className='blue'></span></a></li>
                                        <li><a href="#"><span className='green'></span></a></li>
                                        <li><a href="#"><span className='purple'></span></a></li>
                                    </ul>
                                </div>
                                <div className="size d-flex my-3  align-items-center">
                                    <span className='fw-bold pe-2'>Size</span>
                                    <ul className='d-flex'>
                                        <li className='mb-0'><a href='#'>m</a></li>
                                        <li className='mb-0'><a href='#'>l</a></li>
                                        <li className='mb-0'><a href='#'>xl</a></li>
                                        <li className='mb-0'><a href='#'>xxl</a></li>
                                    </ul>
                                </div>
                                <div className="details-extralink mt-3 d-inline-block">
                                    <button className='position-relative quentity me-2'>{quantity || count}
                                        <i className="fa-solid fa-angle-up" onClick={() => quentityUp(id, quantity)}></i>
                                        <i className="fa-solid fa-angle-down" onClick={() => quentityDown(id, quantity)}></i>
                                    </button>
                                    <button className='button me-2' onClick={() => addToCart(productId)} >add to cart</button>
                                    <button className='details-btn me-2'><i className="fa-regular fa-heart"></i></button>
                                    <button className='details-btn'><i className="fa-solid fa-shuffle"></i></button>
                                </div>
                                <div className="product-meta">
                                    <ul>
                                        <li>SKU : <a href="#"> FWM15VKT</a></li>
                                        <li>Tags : <a href="#"> Cloth,</a></li>
                                        <li>Availability : <a href="#">Items In {"productOne[0]?.stoke"}</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Productview
