import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'; import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { Navigation } from 'swiper/modules';
import Product from '../../component/Product';
import Productview from '../../component/Productview';

const ProductDetails = () => {

    let { id } = useParams()
    let product = useSelector((state) => state.adminReducer)
    let productOne = product.product?.filter((val) => val._id == id)
    let selectQuentity = product.cart?.find((val) => val.product._id == id)
    console.log(selectQuentity);


    return (
        <>
            <section className="product-details mt-4">
                <div className="container">
                    <div className="row">
                        <Productview name={productOne[0]?.name} brand={productOne[0]?.brand} price={productOne[0]?.price} image={productOne[0]?.image} backimage={productOne[0]?.backimage} id={selectQuentity?._id} productId={productOne[0]?._id} quantity={selectQuentity?.quentity} />
                        <div className="col-lg-12 mt-5">
                            <div className="product-information">
                                <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home">Description</button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" >Additional info</button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" >Reviews (3)</button>
                                    </li>
                                </ul>
                                <div className="tab-content" id="pills-tabContent">
                                    <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" tabIndex="0"><p>Uninhibited carnally hired played in whimpered dear gorilla koala depending and much yikes off far quetzal goodness and from htmlFor grimaced goodness
                                        unaccountably and meadowlark near unblushingly crucial scallop tightly neurotic hungrily some and dear furiously this apart. </p>
                                        <p> Spluttered narrowly yikes left moth in yikes bowed this that grizzly much hello on spoon-fed that alas rethought much decently richly and wow against the frequent fluidly at formidable acceptably flapped besides and much circa far over the bucolically hey precarious goldfinch mastodon goodness gnashed a jellyfish and one however because.</p>
                                        <div className="product-more-info mt-4 pt-2">
                                            <ul >
                                                <li><span>Type Of Packing</span>Bottle</li>
                                                <li><span>Color</span>Green, Pink, Powder Blue, Purple</li>
                                                <li><span>Quantity Per Case</span>100ml</li>
                                                <li><span>Ethyl Alcohol</span>70%</li>
                                                <li><span>Piece In One</span>Carton</li>
                                            </ul>
                                            <hr className='my-3' />
                                            <p>Laconic overheard dear woodchuck wow this outrageously taut beaver hey hello far meadowlark imitatively egregiously hugged that yikes minimally unanimous pouted flirtatiously as beaver beheld above forward energetic across this jeepers beneficently cockily less a the raucously that magic upheld far so the this where crud then below after jeez enchanting drunkenly more much wow callously irrespective limpet.</p>
                                            <h4 >Packaging & Delivery</h4>
                                            <hr className='my-3' />
                                            <p>Less lion goodness that euphemistically robin expeditiously bluebird smugly scratched far while thus cackled sheepishly rigid after due one assenting regarding censorious while occasional or this more crane went more as this less much amid overhung anathematic because much held one exuberantly sheep goodness so where rat wry well concomitantly.</p>
                                            <p>Scallop or far crud plain remarkably far by thus far iguana lewd precociously and and less rattlesnake contrary caustic wow this near alas and next and pled the yikes articulate about as less cackled dalmatian in much less well jeering htmlFor the thanks blindly sentimental whimpered less across objectively fanciful grimaced wildly some wow and rose jeepers outgrew lugubrious luridly irrationally attractively dachshund.</p>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" tabIndex="0">...</div>
                                    <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab" tabIndex="0">...</div>
                                    <div className="tab-pane fade" id="pills-disabled" role="tabpanel" aria-labelledby="pills-disabled-tab" tabIndex="0">...</div>
                                </div>

                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="Related-product product-information">
                                <h4>Related products</h4>
                                <hr className='my-3' />
                                <Swiper
                                    modules={[Navigation]}
                                    slidesPerView={1}
                                    spaceBetween={20}
                                    loop={true}
                                    navigation={true}
                                    breakpoints={{
                                        1024: {
                                            slidesPerView: 4,
                                        },
                                    }}
                                    className="mySwiper"
                                >
                                    {
                                        product.product?.map((val, ind) => (
                                            <React.Fragment key={ind} >
                                                <h1>{val.name}</h1>
                                                <div className="col-lg-4">
                                                    <SwiperSlide key={val._id}>
                                                        <Product img={val.image} name={val.name} brand={val.brand} price={val.price} sale={val.badges} backimage={val.backimage} id={val._id} />
                                                    </SwiperSlide>
                                                </div>
                                            </React.Fragment>
                                        ))
                                    }
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ProductDetails
