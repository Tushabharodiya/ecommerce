import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { DELETE_WISHLIST_PENDING, GET_WISHLIST_PENDING, POST_CART_PENDING } from '../../admin/action';
import { useAuth } from '../../context/Authentiction';

const Wishlist = () => {

    let wishlist = useSelector((state) => state.adminReducer.wishlist);
    const [auth, setAuth] = useAuth();
    let dispatch = useDispatch()

    // get wishlist

    let getWishlist = () => {
        dispatch({ type: GET_WISHLIST_PENDING })
    }

    useEffect(() => {
        getWishlist()
    }, [])

    // removeCart
    let removeCart = (item) => {
        dispatch({ type: DELETE_WISHLIST_PENDING, payload: item })
    }

    // addtoCart

    let addtoCart = (items) => {
        let data = {
            product: items,
            user: auth.user._id,
        }
        console.log(data);
        dispatch({ type: POST_CART_PENDING, payload: data })
    }

    return (
        <>
            <section className="wishlist">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <table border="1px" cellPadding="10px" className='mt-4'>
                                <thead>
                                    <tr>
                                        <th>image</th>
                                        <th>product name</th>
                                        <th>price</th>
                                        <th>Action</th>
                                        <th>remove</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        wishlist?.map((val, ind) => {
                                            return (
                                                <React.Fragment key={ind}>
                                                    <tr>
                                                        <td><img src={val.product?.image} alt="product image" /></td>
                                                        <td>{val.product?.name}</td>
                                                        <td>$ {val.product?.price}</td>
                                                        <td><button className='button' onClick={() => addtoCart(val.product._id)} >add to cart</button></td>
                                                        <td><button className='cartRemove' onClick={() => removeCart(val._id)}><i className="fa-solid fa-trash"></i></button></td>
                                                    </tr>
                                                </React.Fragment>
                                            )
                                        })
                                    }
                                </tbody>
                            </table>

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Wishlist
