import { take, takeLatest } from "redux-saga/effects";
import { DELETE_CATEGORY_PENDING, DELETE_PRODUCT_PENDING, GET_CATEGORY_PENDING, GET_PRODUCT_PENDING, POST_CATEGORY_PENDING, POST_PRODUCT_PENDING, UPDATE_CATEGORY_PENDING } from "../../admin/action";
import { handle_add_category, handle_add_product, handle_delete_category, handle_delete_product, handle_get_category, handle_get_product, handle_update_category } from "../admin/manageProduct";




function* handle_get_category_saga() {
    yield takeLatest(GET_CATEGORY_PENDING, handle_get_category)
}

function* handle_add_category_saga() {
    yield takeLatest(POST_CATEGORY_PENDING, handle_add_category)
}

function* handle_delete_category_saga(params) {
    yield takeLatest(DELETE_CATEGORY_PENDING, handle_delete_category)
}

function* handle_update_category_saga(params) {
    yield takeLatest(UPDATE_CATEGORY_PENDING, handle_update_category)
}

// product

function* handle_get_product_saga() {
    yield takeLatest(GET_PRODUCT_PENDING, handle_get_product)
}

function* handle_add_product_saga() {
    yield takeLatest(POST_PRODUCT_PENDING, handle_add_product)
}

function* handle_delete_product_saga() {
    yield takeLatest(DELETE_PRODUCT_PENDING, handle_delete_product)
}

export {
    handle_get_category_saga, handle_add_category_saga, handle_delete_category_saga, handle_update_category_saga,
    handle_get_product_saga, handle_add_product_saga, handle_delete_product_saga
}