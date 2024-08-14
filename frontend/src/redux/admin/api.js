import axios from "axios"
import { deleteData, getData, postData, updateData } from "../API/api"
import { BASE_URL, DELETE_CART, DELETE_CATEGORY, DELETE_PRODUCT, DELETE_WISHLIST, GET_CART, GET_CATEGORY, GET_PRODUCT, GET_WISHLIST, POST_CART, POST_CATEGORY, POST_PRODUCT, POST_WISHLIST, UPDATE_CART, UPDATE_CATEGORY } from "../constnt"


// =====================category==================//
let get_category = async (action) => {
    let { data, status } = await getData(GET_CATEGORY)
    return { data, status }
}

let add_category = async (action) => {
    let { data, status } = await postData(POST_CATEGORY, action.payload)
    return { data, status }
}

let delete_category = async (action) => {
    let { data } = await deleteData(DELETE_CATEGORY, action.payload)
    return { data }
}

let update_category = async (action) => {
    let { data } = await updateData(UPDATE_CATEGORY, action.payload)
    return { data }
}

// =====================product====================//
let get_product = async (action) => {
    let { data } = await getData(GET_PRODUCT)
    return { data }
}

let add_product = async (action) => {
    let { data } = await postData(POST_PRODUCT, action.payload)
    return { data }
}

let delete_product = async (action) => {
    let { data } = await deleteData(DELETE_PRODUCT, action.payload)
    return data;
}

// ======================cart==================//
let get_cart = async () => {
    let { data } = await getData(GET_CART)
    return { data }
}

let add_cart = async (action) => {
    let { data } = await postData(POST_CART, action.payload)
    return { data }
}

let delete_cart = async (action) => {
    let { data } = await deleteData(DELETE_CART, action.payload)
    return { data }
}

let update_cart = async (action) => {
    let { data } = await axios.patch(BASE_URL + UPDATE_CART + `/${action.payload.id}`, { quentity: action.payload.newQuentity })
    return { data }
}

// =========================wishlist==================//

let get_wishlist = async (action) => {
    let { data } = await getData(GET_WISHLIST)
    return { data }
}

let add_wishlist = async (action) => {
    let { data } = await postData(POST_WISHLIST, action.payload)
    return { data }
}

let delete_wishlist = async (action) => {
    let {data} = await deleteData(DELETE_WISHLIST, action.payload)
    return {data}
}

export {
    get_category, add_category, delete_category, update_category, get_product, add_product,
    delete_product, get_cart, add_cart, delete_cart, update_cart, get_wishlist, add_wishlist, delete_wishlist
}