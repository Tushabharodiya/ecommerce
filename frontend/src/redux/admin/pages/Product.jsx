import React, { useRef } from 'react'
import Sidebar from './Sidebar'
import { useDispatch, useSelector } from 'react-redux'
import { DELETE_PRODUCT_PENDING, POST_PRODUCT_PENDING } from '../action'

const Product = () => {
    let product = useSelector((state) => state.adminReducer)
    // console.log(product);

    let dispatch = useDispatch()

    let image = useRef();
    let backimage = useRef();
    let name = useRef();
    let category = useRef();
    let brand = useRef();
    let price = useRef();
    let discount = useRef();
    let badges = useRef();
    let stoke = useRef();


    // add product
    let addProduct = async () => {
        let data = {
            image: image.current.files[0],
            backimage: backimage.current.files[0],
            name: name.current.value,
            category: category.current.value,
            brand: brand.current.value,
            price: price.current.value,
            discount: discount.current.value,
            badges: badges.current.value,
        }

        // console.log(data);

        let formdata = new FormData();

        formdata.append("image", data.image)
        formdata.append("backimage", data.backimage)
        formdata.append("name", data.name)
        formdata.append("category", data.category)
        formdata.append("brand", data.brand)
        formdata.append("price", data.price);
        formdata.append("discount", data.discount);
        formdata.append("badges", data.badges)

        dispatch({ type: POST_PRODUCT_PENDING, payload: formdata });

        image.current.value = null;
        backimage.current.value = null;
        name.current.value = "";
        category.current.value = "";
        brand.current.value = "";
        price.current.value = "";
        discount.current.value = "";
        badges.current.value = "";

    }

    // productStoke

    let productStoke = (id, stoke, index) => {
        console.log(stoke, "cnhbsdh");

    }

    // remove product
    let removeProduct = (product) => {
        // console.log(product);
        dispatch({ type: DELETE_PRODUCT_PENDING, payload: product })

    }

    return (
        <>
            <section className="product pt-0">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-2">
                            <Sidebar />
                        </div>
                        <div className="col-lg-10">
                            <div className="product-list">
                                <div className="product-bttn d-flex justify-content-end">
                                    <button className='button' data-bs-toggle="modal" data-bs-target="#exampleModal"><i className="fa-solid fa-plus pe-2"></i>add Product</button>
                                </div>
                                <div className="modal fade" id="exampleModal" tabIndex="-1">
                                    <div className="modal-dialog">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h1 className="modal-title fs-5">product</h1>
                                                <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                                            </div>
                                            <div className="modal-body">
                                                <form>
                                                    <label>image:<input type="file" name='image' ref={image} className="form-control" /></label>
                                                    <label>backimage:<input type="file" name='image' ref={backimage} className="form-control" /></label>
                                                    <label>name:<input type="text" name='name' ref={name} className="form-control" /></label>
                                                    <label>category<select className="form-select my-2" ref={category}>
                                                        {
                                                            product.category?.map((val, ind) => (
                                                                <React.Fragment key={ind}>
                                                                    <option value={val._id}>{val.name}</option>
                                                                </React.Fragment>
                                                            ))
                                                        }
                                                    </select>
                                                    </label>
                                                    <label>brand:<input type="text" name='brand' ref={brand} className="form-control" /></label>
                                                    <label>price:<input type="number" name='price' ref={price} className="form-control" /></label>
                                                    <label>discount:<input type="number" name='discount' ref={discount} className="form-control" /></label>
                                                    <label>sale:<input type="text" name='badges' ref={badges} className="form-control" /></label>
                                                </form>
                                            </div>
                                            <div className="modal-footer">
                                                <button className="button" data-bs-dismiss="modal" onClick={addProduct}>add product</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="container">
                                    <table border="1px" cellPadding="15px" className='mt-4'>
                                        <thead>
                                            <tr>
                                                <th>image</th>
                                                <th>backimage</th>
                                                <th>name</th>
                                                <th>category</th>
                                                <th>brand</th>
                                                <th>price</th>
                                                <th>discount</th>
                                                <th>new/sale</th>
                                                <th>stoke</th>
                                                <th>delete</th>
                                                <th>update</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                product.product?.map((val, ind) => (
                                                    <React.Fragment key={ind}>
                                                        <tr>
                                                            <td><img src={val.image} alt="product image" /></td>
                                                            <td><img src={val.backimage} alt="product image" /></td>
                                                            <td>{val.name}</td>
                                                            <td>{val.category.name}</td>
                                                            <td>{val.brand}</td>
                                                            <td>{val.price}</td>
                                                            <td>{val.discount}</td>
                                                            <td>{val.badges}</td>
                                                            <td>
                                                                <div className="form-check form-switch d-flex justify-content-center">
                                                                    <input className="form-check-input " checked={val.stoke} type="checkbox" role="switch" />
                                                                </div>
                                                            </td>
                                                            <td><button className='cate-btn' onClick={() => removeProduct(val._id)} ><i className="fa-solid fa-trash-can pe-1"></i></button></td>
                                                            <td><button className='cate-btn' data-bs-target="#exampleModal" data-bs-toggle="modal" ><i className="fa-regular fa-pen-to-square"></i></button></td>
                                                        </tr>
                                                    </React.Fragment>
                                                ))
                                            }
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
        </>
    )
}

export default Product
