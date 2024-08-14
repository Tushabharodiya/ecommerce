import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { DELETE_CART_PENDING, GET_CART_PENDING, UPDATE_CART_PENDING } from '../../admin/action';

const Cart = () => {

    let [total, setTotal] = useState(0)
    let cart = useSelector((state) => state.adminReducer)
    let dispatch = useDispatch();

    let getCart = () => {
        dispatch({ type: GET_CART_PENDING })
    }

    useEffect(() => {
        getCart()
    }, [])

    // remove cart product
    let removeCart = (item) => {
        console.log(item);
        dispatch({ type: DELETE_CART_PENDING, payload: item })
    }

    // quentityUp
    let quentityUp = async (id, quantity) => {
        let newQuentity = quantity + 1;
        console.log(newQuentity);
        dispatch({ type: UPDATE_CART_PENDING, payload: { id, newQuentity } })
    }

    // quentity down
    let quentityDown = (id, quantity) => {
        if (quantity > 1) {
            let newQuentity = quantity - 1;
            dispatch({ type: UPDATE_CART_PENDING, payload: { id, newQuentity } })
        } else {
            console.log("Quantity can't be less than 1");
        }
    }

    return (
        <>
            {/* header-bottom */}
            <div className="header-bottom">
                <div className="container">
                    <Link to="/home">Home</Link>
                    <span><i className="fa-solid fa-angle-right"></i></span>
                    <Link to="#">cart</Link>
                </div>
            </div>

            {/* cart */}
            <section className="cart">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <table border="1px" cellPadding="10px" className='mt-4'>
                                <thead>
                                    <tr>
                                        <th>image</th>
                                        <th>product name</th>
                                        <th>price</th>
                                        <th>quantity</th>
                                        <th>subtotal</th>
                                        <th>remove</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        cart.cart?.map((val, ind) => {
                                            total = total + val.product.price * val.quentity;
                                            return (
                                                <React.Fragment key={ind}>
                                                    <tr>
                                                        <td><img src={val.product.image} alt="product image" /></td>
                                                        <td>{val.product.name}</td>
                                                        <td>$ {val.product.price}</td>
                                                        <td>
                                                            <button className='position-relative quentity'>{val.quentity}
                                                                <i className="fa-solid fa-angle-up" onClick={() => quentityUp(val._id, val.quentity)}></i>
                                                                <i className="fa-solid fa-angle-down" onClick={() => quentityDown(val._id, val.quentity)}></i>
                                                            </button>
                                                        </td>
                                                        <td>$ {val.product.price * val.quentity}</td>
                                                        <td><button className='cartRemove' onClick={() => removeCart(val._id)}><i className="fa-solid fa-trash"></i></button></td>
                                                    </tr>
                                                </React.Fragment>
                                            )
                                        })
                                    }
                                </tbody>
                            </table>

                        </div>
                        <div className="col-lg-6"></div>
                        <div className="col-lg-6">
                            <div className="total-table mt-5">
                                <div className="card">
                                    <h2 className='mb-3'>Cart Totals</h2>
                                    <div className="table-responsive">
                                        <table className='text-start'>
                                            <tbody>
                                                <tr>
                                                    <td>Cart Subtota</td>
                                                    <td>$ {total}</td>
                                                </tr>
                                                <tr>
                                                    <td>shipping</td>
                                                    <td>free shipping</td>
                                                </tr>
                                                <tr>
                                                    <td>total</td>
                                                    <td>$ {total}</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <button className='button mt-3'>Proceed To CheckOut</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Cart
