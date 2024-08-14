import { successAlert } from "../component/Alert";
import { DELETE_CART_PENDING, DELETE_CART_SUCCESS, DELETE_CATEGORY_ERROR, DELETE_CATEGORY_PENDING, DELETE_CATEGORY_SUCCESS, DELETE_PRODUCT_ERROR, DELETE_PRODUCT_PENDING, DELETE_PRODUCT_SUCCESS, DELETE_WISHLIST_ERROR, DELETE_WISHLIST_PENDING, DELETE_WISHLIST_SUCCESS, GET_CART_ERROR, GET_CART_PENDING, GET_CART_SUCCESS, GET_CATEGORY_ERROR, GET_CATEGORY_PENDING, GET_CATEGORY_SUCCESS, GET_PRODUCT_ERROR, GET_PRODUCT_PENDING, GET_PRODUCT_SUCCESS, GET_WISHLIST_ERROR, GET_WISHLIST_PENDING, GET_WISHLIST_SUCCESS, POST_CART_ERROR, POST_CART_PENDING, POST_CART_SUCCESS, POST_CATEGORY_ERROR, POST_CATEGORY_PENDING, POST_CATEGORY_SUCCESS, POST_PRODUCT_ERROR, POST_PRODUCT_PENDING, POST_PRODUCT_SUCCESS, POST_WISHLIST_ERROR, POST_WISHLIST_PENDING, POST_WISHLIST_SUCCESS, UPDATE_CART_ERROR, UPDATE_CART_PENDING, UPDATE_CART_SUCCESS, UPDATE_CATEGORY_ERROR, UPDATE_CATEGORY_PENDING, UPDATE_CATEGORY_SUCCESS } from "./action";



let initialstate = {
    category: [],
    product: [],
    cart: [],
    wishlist: [],
    isLoading: false,
    isError: null,
}



let adminReducer = (state = initialstate, action) => {
    console.log(action);

    switch (action.type) {
        // pending case
        case (GET_CATEGORY_PENDING, POST_CATEGORY_PENDING, DELETE_CATEGORY_PENDING, UPDATE_CATEGORY_PENDING,
            GET_PRODUCT_PENDING, POST_PRODUCT_PENDING, DELETE_PRODUCT_PENDING, GET_CART_PENDING, POST_CART_PENDING,
            DELETE_CART_PENDING, UPDATE_CART_PENDING, GET_WISHLIST_PENDING, POST_WISHLIST_PENDING, DELETE_WISHLIST_PENDING): {
                return {
                    ...state,
                    isLoading: true,
                }
            }
        // get category
        case GET_CATEGORY_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                category: action.payload.category,
            }
        }
        // add category
        case POST_CATEGORY_SUCCESS: {
            successAlert(action.payload.message)
            return {
                ...state,
                isLoading: false,
                category: state.category.concat(action.payload.category)
            }
        }
        case POST_CATEGORY_ERROR: {
            successAlert(action.payload.response.data.error)
            return {
                ...state,
                isLoading: false,
                isError: action.payload,
            }
        }
        // delete category
        case DELETE_CATEGORY_SUCCESS: {
            successAlert(action.data.message)
            return {
                ...state,
                isLoading: false,
                category: state.category.filter((val) => val._id != action.payload)
            }
        }
        //update category
        case UPDATE_CATEGORY_SUCCESS: {
            successAlert(action.payload.message)
            return {
                ...state,
                isLoading: false,
                category: state.category.map((val) => val._id == action.payload.category._id ? { ...action.payload.category } : val)
            }
        }
        // get product
        case GET_PRODUCT_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                product: action.payload.product,
            }
        }
        // add product
        case POST_PRODUCT_SUCCESS: {
            successAlert(action.payload.message)
            return {
                ...state,
                isLoading: false,
                product: state.product.concat(action.payload.product)
            }
        }
        //delete product
        case DELETE_PRODUCT_SUCCESS: {
            successAlert(action.data.message)
            return {
                ...state,
                isLoading: false,
                product: state.product.filter((val) => val._id != action.payload)
            }
        }
        // get cart
        case GET_CART_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                cart: action.payload.cart,
            }
        }
        // post cart
        case POST_CART_SUCCESS: {
            successAlert(action.payload.message)
            return {
                ...state,
                isLoading: false,
                cart: state.cart.concat(action.payload.cart)
            }
        }
        case POST_CART_ERROR: {
            successAlert(action.payload.response.data.message)
            return {
                ...state,
                isLoading: false,
                isError: action.payload,
            }
        }
        // delete cart
        case DELETE_CART_SUCCESS: {
            successAlert(action.data.message)
            return {
                ...state,
                isLoading: false,
                cart: state.cart.filter((val) => val._id != action.payload)
            }
        }
        // update cart
        case UPDATE_CART_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                cart: state.cart.map((val) => val._id === action.payload.cart._id
                    ? { ...val, quentity: action.payload.cart.quentity }
                    : val)
            }
        }
        // get wishlist
        case GET_WISHLIST_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                wishlist: action.payload.wishlist,
            }
        }
        // add wishlist
        case POST_WISHLIST_SUCCESS: {
            successAlert(action.payload.message)
            return {
                ...state,
                isLoading: false,
                wishlist: state.wishlist.concat(action.payload.wishlist)
            }
        }
        case POST_WISHLIST_ERROR: {
            successAlert(action.payload.response.data.message)
            return {
                ...state,
                isLoading: false,
                isError: true,
            }
        }
        // delete wishlist
        case DELETE_WISHLIST_SUCCESS: {
            successAlert(action.data.message)
            return {
                ...state,
                isLoading: false,
                wishlist: state.wishlist.filter((val) => val._id != action.payload)
            }
        }
        // Error case
        case (GET_CATEGORY_ERROR, DELETE_CATEGORY_ERROR, UPDATE_CATEGORY_ERROR, GET_PRODUCT_ERROR, POST_PRODUCT_ERROR,
            DELETE_PRODUCT_ERROR, GET_CART_ERROR, DELETE_CATEGORY_ERROR, UPDATE_CART_ERROR, GET_WISHLIST_ERROR, DELETE_WISHLIST_ERROR
        ): {
                successAlert(action.payload.response.data.error)
                return {
                    ...state,
                    isLoading: false,
                    isError: action.payload,
                }
            }

        default: {
            return state;
        }
    }

}

export default adminReducer;