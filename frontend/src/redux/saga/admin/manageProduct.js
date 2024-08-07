import { call, put } from "redux-saga/effects";
import { add_category, add_product, delete_category, delete_product, get_category, get_product, update_category } from "../../admin/api";
import { DELETE_CATEGORY_ERROR, DELETE_CATEGORY_SUCCESS, DELETE_PRODUCT_ERROR, DELETE_PRODUCT_SUCCESS, GET_CATEGORY_ERROR, GET_CATEGORY_SUCCESS, GET_PRODUCT_ERROR, GET_PRODUCT_SUCCESS, POST_CATEGORY_ERROR, POST_CATEGORY_SUCCESS, POST_PRODUCT_ERROR, POST_PRODUCT_SUCCESS, UPDATE_CATEGORY_ERROR, UPDATE_CATEGORY_SUCCESS } from "../../admin/action";



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

export {
    handle_get_category, handle_add_category, handle_delete_category, handle_update_category, handle_get_product,
    handle_add_product, handle_delete_product
}