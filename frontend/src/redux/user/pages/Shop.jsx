import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Deals from './Deals'
import Offer from '../../component/Offer'
import { useDispatch, useSelector } from 'react-redux'
import Product from '../../component/Product'
import axios from 'axios'
import { price } from '../../../Price'
import { Radio } from 'antd'
import { useAuth } from '../../context/Authentiction'
import { POST_CART_PENDING, POST_WISHLIST_PENDING } from '../../admin/action'
import Productview from '../../component/Productview'



const Shop = () => {

    let product = useSelector((state) => state.adminReducer);
    let dispatch = useDispatch();
    const [auth, setAuth] = useAuth();
    const [categoryProducts, setCategoryProducts] = useState([]); // renamed htmlFor clarity
    const [allProducts, setAllProducts] = useState([]); // to store all products
    const [radio, setRadio] = useState([])
    const [keyword, setKeyword] = useState([]);
    const [totalPages, setTotalPages] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [viewProduct, setViewProduct] = useState(null)
    const [brand, setBrand] = useState([])

    const pageNumber = [...Array(totalPages + 1).keys()].slice(1)

    let newProduct = [
        {
            image: "https://evara-nextjs.vercel.app/assets/imgs/shop/thumbnail-3.jpg",
            name: "Chen Cardigan",
            price: "99.50"
        },
        {
            image: "https://evara-nextjs.vercel.app/assets/imgs/shop/thumbnail-4.jpg",
            name: "Chen Sweater",
            price: "89.50"
        },
        {
            image: "https://evara-nextjs.vercel.app/assets/imgs/shop/thumbnail-5.jpg",
            name: "Colorful Jacket",
            price: "25"
        },
    ]

    let allBrand = product.product.map((item) => item.brand)
    const uniqueBrands = [...new Set(allBrand)];

    // get all products
    let getAllProduct = async () => {
        try {
            let res = await axios.get(`http://localhost:3001/v1/product/category?category=${categoryProducts}&price=${radio}&keyword=${keyword}&page=${currentPage}&brand=${brand}`);
            console.log(res);
            setAllProducts(res.data.products)
            setTotalPages(res.data.totalPages)
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    }

    useEffect(() => {
        getAllProduct()
    }, [categoryProducts, radio, keyword, currentPage, brand])

    // category
    let categoryFilter = (id) => {
        console.log(id);
        setCategoryProducts(id)
    }

    // pagination
    let handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    }

    let handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    }

    // brand 
    let handleBrand = (brand) => {
        console.log(brand);
        setBrand(brand)

    }
    // add to cart
    let addCart = (items) => {
        let data = {
            product: items,
            user: auth.user._id,
        }
        dispatch({ type: POST_CART_PENDING, payload: data })
    }

    // quickView
    const quickView = (productId) => {
        let selectQuentity = product.cart?.find((val) => val.product._id == productId)
        // console.log(selectQuentity.quentity);

        const selectedProduct = product.product?.find((val) => val._id === productId);
        setViewProduct({ selectedProduct, selectQuentity });
    };

    // addWishlist
    let addWishlist = async (productId) => {
        let data = {
            product: productId,
            user: auth.user._id,
        }
        console.log(data);
        dispatch({ type: POST_WISHLIST_PENDING, payload: data })

    }

    return (
        <>
            {/* header-bottom */}
            <div className="header-bottom">
                <div className="container">
                    <Link to="/home">Home</Link>
                    <span><i className="fa-solid fa-angle-right"></i></span>
                    <Link to="#">Shop</Link>
                </div>
            </div>

            {/* shop */}
            <section className="shop">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
                            <div className="shoplist line widget-list">
                                <h2>Category</h2>
                                <ul>
                                    <li><a href="#" onClick={(e) => { e.preventDefault(); categoryFilter('all'); }}>All</a> </li>
                                    {
                                        product.category?.map((val, ind) => (
                                            <React.Fragment key={ind}>
                                                <li><a href="#" onClick={(e) => { e.preventDefault(); categoryFilter(val._id); }}>{val.name}</a></li>
                                            </React.Fragment>
                                        ))
                                    }
                                </ul>
                            </div>
                            <div className="shoplist price line widget-list">
                                <h2>Filter by price</h2>
                                <ul>
                                    <Radio.Group onChange={e => setRadio(e.target.value)} >
                                        {
                                            price.map((p, index) => (
                                                <React.Fragment key={p._id || index}>
                                                    <div className='mt-2'>
                                                        <Radio value={p.array}>{p.name}</Radio>
                                                    </div>
                                                </React.Fragment>
                                            ))
                                        }
                                    </Radio.Group>
                                </ul>
                                <h5>Brand</h5>
                                <ul>
                                    {
                                        uniqueBrands.map((item, ind) => (
                                            <React.Fragment key={ind}>
                                                <li className="pt-1 pb-0"><a href="#" onClick={() => handleBrand(item)}>{item}</a></li>
                                            </React.Fragment>
                                        ))
                                    }
                                </ul>
                            </div>
                            <div className="shoplist price line">
                                <h2>New product</h2>
                                {
                                    newProduct.map((val, ind) => (
                                        <React.Fragment key={ind}>
                                            <Deals image={val.image} name={val.name} price={val.price} />
                                        </React.Fragment>
                                    ))
                                }
                            </div>
                            <div className="shopoff">
                                <Offer img="https://evara-nextjs.vercel.app/assets/imgs/banner/banner-11.jpg" off="Women Zone" title="Save 17% on Office Dress" />
                            </div>
                        </div>
                        <div className="col-lg-9">
                            <div className="shop-product">
                                <div className="shop-product-filter d-flex justify-content-between align-items-center">
                                    <p className="mb-0">We found  {allProducts.length} items For you!</p>
                                    <label className="d-flex align-items-center"><i className="fa-solid fa-magnifying-glass"></i><input type="search" value={keyword} onChange={(e) => setKeyword(e.target.value)} className="form-control" placeholder="Search product" /></label>
                                </div>
                                <div className="row">
                                    {
                                        allProducts?.map((val, ind) => (
                                            <React.Fragment key={ind}>
                                                <div className="col-lg-4">
                                                    <div className="productCard  position-relative">
                                                        <Product img={val.image} name={val.name} brand={val.brand} price={val.price} sale={val.badges} backimage={val.backimage} id={val._id} />
                                                        <div className="product-action product-services d-flex position-absolute">
                                                            <a href="#" className='d-inline-block' data-bs-placement="top"
                                                                data-bs-custom-class="custom-tooltip" data-bs-title="Quick View"
                                                                onClick={() => quickView(val._id)} data-bs-toggle="modal" data-bs-target="#productview">
                                                                <i className="fa-regular fa-eye me-1"></i>
                                                            </a>
                                                            <a href="#" className='d-inline-block' data-bs-toggle="tooltip" data-bs-placement="top"
                                                                data-bs-custom-class="custom-tooltip" onClick={() => addWishlist(val._id)} data-bs-title="add to wishlist" >
                                                                <i className="fa-regular fa-heart me-1"></i>
                                                            </a>
                                                            <a href="#" className='d-inline-block' data-bs-toggle="tooltip" data-bs-placement="top" data-bs-custom-class="custom-tooltip" data-bs-title="compare"><i className="fa-solid fa-shuffle me-1"></i></a>
                                                        </div>
                                                        <div className="product-cart product-action position-absolute ">
                                                            <a href="#" onClick={() => addCart(val._id)} className='d-inline-block' data-bs-toggle="tooltip" data-bs-placement="top" data-bs-custom-class="custom-tooltip" data-bs-title="add to cart"><i className="fa-solid fa-bag-shopping" ></i></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </React.Fragment>
                                        ))
                                    }
                                    {/* <!-- Modal --> */}
                                    <div className="modal fade" id="productview" tabindex="-1">
                                        <div className="modal-dialog modal-lg">
                                            <div className="modal-content">
                                                <div className="modal-btn d-flex justify-content-end ">
                                                    <button type="button" className="btn-close pe-5 pt-5" data-bs-dismiss="modal"></button>
                                                </div>
                                                <div className="modal-body pt-0">
                                                    <Productview name={viewProduct?.selectedProduct?.name} brand={viewProduct?.selectedProduct?.brand} price={viewProduct?.selectedProduct?.price} image={viewProduct?.selectedProduct?.image} backimage={viewProduct?.selectedProduct?.backimage} id={viewProduct?.selectQuentity?._id} productId={viewProduct?.selectedProduct._id} quantity={viewProduct?.selectQuentity?.quentity} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <nav aria-label="Page navigation ">
                                    <ul className="pagination d-flex justify-content-center mt-5">
                                        <li className="page-item">
                                            <a className="page-link" href="#" onClick={handlePrevPage}  >
                                                <span><i className="fa-solid fa-angles-left" ></i></span>
                                            </a>
                                        </li>
                                        {
                                            pageNumber.map((val, ind) => (
                                                <React.Fragment key={ind}>
                                                    <li className={`page-item  ${currentPage == val ? 'active' : ''} `}>
                                                        <a className="page-link" onClick={() => setCurrentPage(val)} href="#">{val}</a>
                                                    </li>
                                                </React.Fragment>
                                            ))
                                        }
                                        <li className="page-item">
                                            <a className="page-link" href="#" onClick={handleNextPage}  >
                                                <span><i className="fa-solid fa-angles-right"></i></span>
                                            </a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};
export default Shop
