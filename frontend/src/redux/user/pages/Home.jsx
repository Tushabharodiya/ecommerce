import React from 'react'
import Slider from '../../component/Slider'
import Features from '../../component/Features'
import Product from '../../component/Product'
import { useSelector } from 'react-redux'
import { Heading } from '../../atoms/Atoms'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation } from 'swiper/modules';
import Category from '../../component/Category'
import { Link } from 'react-router-dom'
import Offer from '../../component/Offer'
import Footer from '../../component/Footer'

const Home = () => {

  let product = useSelector((state) => state.adminReducer)
  console.log(product);

  const newProduct = product.product?.filter(val => val.badges === 'new') || [];
  console.log(newProduct);





  let feature = [
    {
      img: "https://evara-nextjs.vercel.app/assets/imgs/theme/icons/feature-1.png",
      title: "Online Order",
      bgcolor: "#fddde4"
    },
    {
      img: "https://evara-nextjs.vercel.app/assets/imgs/theme/icons/feature-2.png",
      title: "Free Shipping",
      bgcolor: "#d1e8f2",
    },
    {
      img: "https://evara-nextjs.vercel.app/assets/imgs/theme/icons/feature-3.png",
      title: "Save Money",
      bgcolor: "#cdebbc",
    },
    {
      img: "https://evara-nextjs.vercel.app/assets/imgs/theme/icons/feature-4.png",
      title: "Promotions",
      bgcolor: "#cdd4f8 ",
    },
    {
      img: "https://evara-nextjs.vercel.app/assets/imgs/theme/icons/feature-5.png",
      title: "Happy Sell",
      bgcolor: "#f6dbf6",
    },
    {
      img: "https://evara-nextjs.vercel.app/assets/imgs/theme/icons/feature-6.png",
      title: "24/7 Support",
      bgcolor: "#fff2e5"
    },
  ]

  let category = [
    {
      img: "https://evara-nextjs.vercel.app/assets/imgs/shop/category-thumb-1.jpg",
      title: "t-shirt"
    },
    {
      img: "https://evara-nextjs.vercel.app/assets/imgs/shop/category-thumb-2.jpg",
      title: "bags",
    },
    {
      img: "https://evara-nextjs.vercel.app/assets/imgs/shop/category-thumb-3.jpg",
      title: "Sandan",
    },
    {
      img: "https://evara-nextjs.vercel.app/assets/imgs/shop/category-thumb-4.jpg",
      title: "Scarf Cap",
    },
    {
      img: "https://evara-nextjs.vercel.app/assets/imgs/shop/category-thumb-5.jpg",
      title: "Shoes",
    },
    {
      img: "https://evara-nextjs.vercel.app/assets/imgs/shop/category-thumb-6.jpg",
      title: "Pillowcase",
    },
    {
      img: "https://evara-nextjs.vercel.app/assets/imgs/shop/category-thumb-7.jpg",
      title: "Jumpsuits",
    },
    {
      img: "https://evara-nextjs.vercel.app/assets/imgs/shop/category-thumb-8.jpg",
      title: "Hats",
    },
  ]

  let offer = [
    {
      img: "https://evara-nextjs.vercel.app/assets/imgs/banner/banner-1.png",
      title: "Save 20% on  Woman Bag",
      off: "Smart Offer"
    },
    {
      img: "https://evara-nextjs.vercel.app/assets/imgs/banner/banner-2.png",
      title: "Great Summer Collection",
      off: "Sale off"
    },
    {
      img: "https://evara-nextjs.vercel.app/assets/imgs/banner/banner-3.png",
      title: "Shop Today’s Deals & Offers",
      off: "New Arrivals"
    },
  ]

  let brand = [
    {
      logo: "https://evara-nextjs.vercel.app/assets/imgs/banner/brand-1.png",
    },
    {
      logo: "https://evara-nextjs.vercel.app/assets/imgs/banner/brand-2.png",
    },
    {
      logo: "https://evara-nextjs.vercel.app/assets/imgs/banner/brand-3.png",
    },
    {
      logo: "https://evara-nextjs.vercel.app/assets/imgs/banner/brand-4.png",
    },
    {
      logo: "https://evara-nextjs.vercel.app/assets/imgs/banner/brand-5.png",
    },
    {
      logo: "https://evara-nextjs.vercel.app/assets/imgs/banner/brand-5.png",
    },
  ]

  return (
    <>
      {/* banner */}
      <section className="banner">
        <Slider />
      </section>

      {/* features */}
      <section className="features">
        <div className="container">
          <div className="row">
            {
              feature.map((val, ind) => (
                <React.Fragment key={ind}>
                  <div className="col-lg-2">
                    <Features img={val.img} title={val.title} bgcolor={val.bgcolor} />
                  </div>
                </React.Fragment>
              ))
            }
          </div>
        </div>
      </section>

      {/* product */}
      <section className="product">
        <div className="container">
          <div className="row">
            <div className="product-data">
              <div className="sale">
              </div>
              <div className="product-btn mb-4">
                <button className='button'>featured </button>
                <button className='button'>Popular </button>
                <button className='button'>New added</button>
              </div>
            </div>
            {
              product.product?.slice(0, 8).map((val, ind) => (
                <React.Fragment key={ind}>
                  <div className="col-lg-3">
                    <Product img={val.image} name={val.name} brand={val.brand} price={val.price} sale={val.badges} backimage={val.backimage} />
                  </div>
                </React.Fragment>
              ))
            }
          </div>
        </div>
      </section>

      {/* services */}
      <section className="services">
        <div className="container">
          <div className="services-banner">
            <div className="row">
              <div className="col-lg-6">
                <div className="services-data">
                  <h4>Repair Services</h4>
                  <h1>We're an Apple <br /> Authorised Service Provider</h1>
                  <button className='button'>learn more <i class="fa-solid fa-arrow-right-long ps-1"></i></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* category */}
      <section className="category">
        <div className="container">
          <div className="cate-data d-flex justify-content-between align-items-center position-relative">
            <Heading content="Popular" title="Categories" />
            <div className="navigation position-absolute d-flex ">
              <button className='swiper-btn-prev  .product-action '><i class="fa-solid fa-angle-left"></i></button>
              <button className='swiper-btn-next'><i class="fa-solid fa-angle-right"></i></button>
            </div>
          </div>
          <div className="category-details">
            <Swiper
              modules={[Navigation]}
              slidesPerView={1}
              spaceBetween={40}
              navigation={{
                prevEl: '.swiper-btn-prev',
                nextEl: '.swiper-btn-next',
              }}
              breakpoints={{
                1024: {
                  slidesPerView: 6,
                },
              }}
              className="mySwiper"
            >
              {
                category.map((val, ind) => (
                  <React.Fragment key={ind}>
                    <SwiperSlide>
                      <Link><Category img={val.img} title={val.title} /></Link>
                    </SwiperSlide>
                  </React.Fragment>
                ))
              }
            </Swiper>
          </div>
        </div>
      </section >

      {/* offer */}
      <section className="offer">
        <div className="container">
          <div className="row">
            {
              offer.map((val, ind) => (
                <React.Fragment key={ind}>
                  <div className="col-lg-4">
                    <Offer img={val.img} title={val.title} off={val.off} />
                  </div>
                </React.Fragment>
              ))
            }
          </div>
        </div>
      </section>

      {/* arrivals */}
      <section className="arrivals">
        <div className="container">
          <div className="row">
            <div className="cate-data d-flex justify-content-between align-items-center position-relative">
              <Heading content="New" title="Arrivals" />
              <div className="navigation position-absolute d-flex end-0 top-0 ">
                <button className='swiper-btn-prev '><i class="fa-solid fa-angle-left"></i></button>
                <button className='swiper-btn-next'><i class="fa-solid fa-angle-right"></i></button>
              </div>
            </div>
            <div className="arrivals-card">
              <Swiper
                modules={[Navigation]}
                slidesPerView={1}
                spaceBetween={15}
                navigation={{
                  prevEl: '.swiper-btn-prev',
                  nextEl: '.swiper-btn-next',
                }}
                breakpoints={{
                  1024: {
                    slidesPerView: 4,
                  },
                }}
                className="mySwiper"
              >
                {


                  newProduct?.map((val, ind) => (
                    <React.Fragment key={ind}>
                      <SwiperSlide>
                        <Product img={val.image} name={val.name} brand={val.brand} price={val.price} sale={val.badges} backimage={val.backimage} />
                      </SwiperSlide>
                    </React.Fragment>
                  ))
                }
              </Swiper>
            </div>
          </div>
        </div>
      </section>

      {/* brand */}
      <section className="brand">
        <div className="container">
          <Heading content="Featured" title="Brands" />
          <div className="row">
            {
              brand.map((val, ind) => (
                <React.Fragment key={ind}>
                  <div className="col-lg-2">
                    <img src={val.logo} alt="brand logo" />
                  </div>
                </React.Fragment>
              ))
            }
          </div>
        </div>
      </section>

      {/* product-sale */}
      <section className="product-sale">
        <div className="container">
          <div className="sale-bg">
            <div className="row">
              <div className="col-lg-7">
                <h5>Shop Today’s Deals</h5>
                <h2>Happy <span>Mother's Day.</span> Big Sale Up to 40%</h2>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* deals */}
      <section className="deals">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <div className="deals-data position-relative">
                <div className="deals-img">
                  <img src="https://evara-nextjs.vercel.app/assets/imgs/banner/banner-10.jpg" alt="deals image" />
                </div>
                <div className="offer-data position-absolute">
                  <span>Shoes Zone</span>
                  <h4>Save 17% on <br /> All Items</h4>
                  <button>shop now <i className="fa-solid fa-arrow-right"></i></button>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="deals-outlet">
                <h2>Deals & Outlet</h2>
                {
                  product.product.slice(5, 8)?.map((val, ind) => (
                    <React.Fragment>
                      <div className="deals-product d-flex align-items-center">
                        <div className="deals-img">
                          <img src={val.image} alt="bags image" />
                        </div>
                        <div className="deals-info ">
                          <h4 className='mb-0'><a href="#">{val.name}</a></h4>
                          <div className="price">
                            <span>${val.price}</span>
                            <span> $245.8</span>
                          </div>
                        </div>
                      </div>
                    </React.Fragment>
                  ))
                }
              </div>
            </div>
            <div className="col-lg-3">
              <div className="deals-outlet">
                <h2>Top Selling</h2>
                {
                  product.product.slice(9, 12)?.map((val, ind) => (
                    <React.Fragment>
                      <div className="deals-product d-flex align-items-center">
                        <div className="deals-img">
                          <img src={val.image} alt="bags image" />
                        </div>
                        <div className="deals-info ">
                          <h4 className='mb-0'><a href="#">{val.name}</a></h4>
                          <div className="price">
                            <span>${val.price}</span>
                            <span> $245.8</span>
                          </div>
                        </div>
                      </div>
                    </React.Fragment>
                  ))
                }
              </div>
            </div>
            <div className="col-lg-3">
              <div className="deals-outlet">
                <h2>Hot Releases</h2>
                {
                  product.product.slice(12, 15)?.map((val, ind) => (
                    <React.Fragment>
                      <div className="deals-product d-flex align-items-center">
                        <div className="deals-img">
                          <img src={val.image} alt="bags image" />
                        </div>
                        <div className="deals-info ">
                          <h4 className='mb-0'><a href="#">{val.name}</a></h4>
                          <div className="price">
                            <span>${val.price}</span>
                            <span> $245.8</span>
                          </div>
                        </div>
                      </div>
                    </React.Fragment>
                  ))
                }
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* newsletter */}
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
                <h5 className='mb-0'>...and receive$25 coupon for first shopping.</h5>
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

      {/* footer */}
      <Footer />

    </>
  )
}

export default Home
