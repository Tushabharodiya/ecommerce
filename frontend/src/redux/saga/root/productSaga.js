import { take, takeLatest } from "redux-saga/effects";
import { DELETE_CART_PENDING, DELETE_CATEGORY_PENDING, DELETE_PRODUCT_PENDING, DELETE_WISHLIST_PENDING, GET_CART_PENDING, GET_CATEGORY_PENDING, GET_PRODUCT_PENDING, GET_WISHLIST_PENDING, POST_CART_PENDING, POST_CATEGORY_PENDING, POST_PRODUCT_PENDING, POST_WISHLIST_PENDING, UPDATE_CART_PENDING, UPDATE_CATEGORY_PENDING } from "../../admin/action";
import { handle_add_cart, handle_add_category, handle_add_product, handle_add_wishlist, handle_delete_cart, handle_delete_category, handle_delete_product, handle_delete_wishlist, handle_get_cart, handle_get_category, handle_get_product, handle_get_wishlist, handle_update_cart, handle_update_category } from "../admin/manageProduct";

// category
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

// cart
function* handle_get_cart_saga(params) {
    yield takeLatest(GET_CART_PENDING, handle_get_cart)
}

function* handle_add_cart_saga() {
    yield takeLatest(POST_CART_PENDING, handle_add_cart)
}

function* handle_delete_cart_saga() {
    yield takeLatest(DELETE_CART_PENDING, handle_delete_cart)
}

function* handle_update_cart_saga() {
    yield takeLatest(UPDATE_CART_PENDING, handle_update_cart)
}

function* handle_get_wishlist_saga() {
    yield takeLatest(GET_WISHLIST_PENDING, handle_get_wishlist)
}

function* handle_add_wishlist_saga() {
    yield takeLatest(POST_WISHLIST_PENDING, handle_add_wishlist)
}

function* handle_delete_wishlist_saga() {
    yield takeLatest(DELETE_WISHLIST_PENDING, handle_delete_wishlist)
}


export {
    handle_get_category_saga, handle_add_category_saga, handle_delete_category_saga, handle_update_category_saga,
    handle_get_product_saga, handle_add_product_saga, handle_delete_product_saga, handle_get_cart_saga,
    handle_add_cart_saga, handle_delete_cart_saga, handle_update_cart_saga, handle_get_wishlist_saga,
    handle_add_wishlist_saga, handle_delete_wishlist_saga

}