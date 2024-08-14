import { call, put } from "redux-saga/effects";
import { add_cart, add_category, add_product, add_wishlist, delete_cart, delete_category, delete_product, delete_wishlist, get_cart, get_category, get_product, get_wishlist, update_cart, update_category } from "../../admin/api";
import { DELETE_CART_ERROR, DELETE_CART_SUCCESS, DELETE_CATEGORY_ERROR, DELETE_CATEGORY_SUCCESS, DELETE_PRODUCT_ERROR, DELETE_PRODUCT_SUCCESS, DELETE_WISHLIST_ERROR, DELETE_WISHLIST_SUCCESS, GET_CART_ERROR, GET_CART_SUCCESS, GET_CATEGORY_ERROR, GET_CATEGORY_SUCCESS, GET_PRODUCT_ERROR, GET_PRODUCT_SUCCESS, GET_WISHLIST_ERROR, GET_WISHLIST_SUCCESS, POST_CART_ERROR, POST_CART_SUCCESS, POST_CATEGORY_ERROR, POST_CATEGORY_SUCCESS, POST_PRODUCT_ERROR, POST_PRODUCT_SUCCESS, POST_WISHLIST_ERROR, POST_WISHLIST_SUCCESS, UPDATE_CART_ERROR, UPDATE_CART_SUCCESS, UPDATE_CATEGORY_ERROR, UPDATE_CATEGORY_SUCCESS } from "../../admin/action";

// category
function* handle_get_category(action) {
    try {
        let { data, status } = yield call(get_category, action)
        yield put({ type: GET_CATEGORY_SUCCESS, payload: data })
    } catch (error) {
        yield put({ type: GET_CATEGORY_ERROR, payload: error })
    }
}

function* handle_add_category(action) {
    try {
        let { data, status } = yield call(add_category, action)
        yield put({ type: POST_CATEGORY_SUCCESS, payload: data })
    } catch (error) {
        yield put({ type: POST_CATEGORY_ERROR, payload: error })
    }
}

function* handle_delete_category(action) {
    try {
        let { data, status } = yield call(delete_category, action)
        yield put({ type: DELETE_CATEGORY_SUCCESS, payload: action.payload, data })
    } catch (error) {
        yield put({ type: DELETE_CATEGORY_ERROR, payload: error })
    }
}


function* handle_update_category(action) {
    try {
        let { data } = yield call(update_category, action)
        yield put({ type: UPDATE_CATEGORY_SUCCESS, payload: data })
    } catch (error) {
        yield put({ type: UPDATE_CATEGORY_ERROR, payload: error })
    }
}
// product

function* handle_get_product(action) {
    try {
        let { data } = yield call(get_product, action)
        yield put({ type: GET_PRODUCT_SUCCESS, payload: data })
    } catch (error) {
        yield put({ type: GET_PRODUCT_ERROR, payload: error })
    }
}

function* handle_add_product(action) {
    try {
        let { data } = yield call(add_product, action);
        yield put({ type: POST_PRODUCT_SUCCESS, payload: data })
    } catch (error) {
        yield put({ type: POST_PRODUCT_ERROR, payload: error })
    }
}

function* handle_delete_product(action) {
    try {
        let data = yield call(delete_product, action)
        yield put({ type: DELETE_PRODUCT_SUCCESS, payload: action.payload, data })
    } catch (error) {
        yield put({ type: DELETE_PRODUCT_ERROR, payload: error })
    }
}


// cart

function* handle_get_cart(action) {
    try {
        let { data } = yield call(get_cart, action)
        yield put({ type: GET_CART_SUCCESS, payload: data })
    } catch (error) {
        yield put({ type: GET_CART_ERROR, payload: error })
    }
}

function* handle_add_cart(action) {
    try {
        let { data } = yield call(add_cart, action)
        yield put({ type: POST_CART_SUCCESS, payload: data })

    } catch (error) {
        yield put({ type: POST_CART_ERROR, payload: error })
    }
}


function* handle_delete_cart(action) {
    try {
        let { data } = yield call(delete_cart, action)
        yield put({ type: DELETE_CART_SUCCESS, payload: action.payload, data })
    } catch (error) {
        yield put({ type: DELETE_CART_ERROR, payload: error })
    }
}


function* handle_update_cart(action) {
    try {
        let { data } = yield call(update_cart, action)
        yield put({ type: UPDATE_CART_SUCCESS, payload: data })
    } catch (error) {
        yield put({ type: UPDATE_CART_ERROR, payload: error })
    }
}

// wishlist

function* handle_get_wishlist(action) {
    try {
        let { data } = yield call(get_wishlist, action)
        yield put({ type: GET_WISHLIST_SUCCESS, payload: data })
    } catch (error) {
        yield put({ type: GET_WISHLIST_ERROR, payload: error })
    }
}

function* handle_add_wishlist(action) {
    try {
        let { data } = yield call(add_wishlist, action);
        yield put({ type: POST_WISHLIST_SUCCESS, payload: data })
    } catch (error) {
        yield put({ type: POST_WISHLIST_ERROR, payload: error })
    }
}

function* handle_delete_wishlist(action) {
    try {
        let { data } = yield call(delete_wishlist, action)
        yield put({ type: DELETE_WISHLIST_SUCCESS, payload: action.payload, data})
    } catch (error) {
        yield put({ type: DELETE_WISHLIST_ERROR, payload: error })
    }
}

export {
    handle_get_category, handle_add_category, handle_delete_category, handle_update_category, handle_get_product,
    handle_add_product, handle_delete_product, handle_get_cart, handle_add_cart, handle_delete_cart,
    handle_update_cart, handle_get_wishlist, handle_add_wishlist, handle_delete_wishlist
}