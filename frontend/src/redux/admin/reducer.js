import { errorAlert, successAlert } from "../component/Alert";
import { DELETE_CATEGORY_ERROR, DELETE_CATEGORY_PENDING, DELETE_CATEGORY_SUCCESS, DELETE_PRODUCT_ERROR, DELETE_PRODUCT_PENDING, DELETE_PRODUCT_SUCCESS, GET_CATEGORY_ERROR, GET_CATEGORY_PENDING, GET_CATEGORY_SUCCESS, GET_PRODUCT_ERROR, GET_PRODUCT_PENDING, GET_PRODUCT_SUCCESS, POST_CATEGORY_ERROR, POST_CATEGORY_PENDING, POST_CATEGORY_SUCCESS, POST_PRODUCT_ERROR, POST_PRODUCT_PENDING, POST_PRODUCT_SUCCESS, UPDATE_CATEGORY_ERROR, UPDATE_CATEGORY_PENDING, UPDATE_CATEGORY_SUCCESS } from "./action";
import Category from "./pages/Category";


let initialstate = {
    category: [],
    product: [],
    isLoading: false,
    isError: null,
}



let adminReducer = (state = initialstate, action) => {
    console.log(action);

    switch (action.type) {
        case (GET_CATEGORY_PENDING, POST_CATEGORY_PENDING, DELETE_CATEGORY_PENDING, UPDATE_CATEGORY_PENDING,
            GET_PRODUCT_PENDING, POST_PRODUCT_PENDING, DELETE_PRODUCT_PENDING): {
                return {
                    ...state,
                    isLoading: true,
                }
            }
        case GET_CATEGORY_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                category: action.payload.category,
            }
        }
        // add
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
        //update
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

        case (GET_CATEGORY_ERROR, DELETE_CATEGORY_ERROR, UPDATE_CATEGORY_ERROR, GET_PRODUCT_ERROR, POST_PRODUCT_ERROR,
            DELETE_PRODUCT_ERROR): {
                successAlert(action.payload.response.data.error)
                return {
                    ...state,
                    isLoading: false,
                    isError: action.payload,
                }
            }
        default: {
            return {
                ...state,
            }
        }
    }

}

export default adminReducer;