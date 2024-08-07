import { deleteData, getData, postData, updateData } from "../API/api"
import { DELETE_CATEGORY, DELETE_PRODUCT, GET_CATEGORY, GET_PRODUCT, POST_CATEGORY, POST_PRODUCT, UPDATE_CATEGORY } from "../constnt"





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


export { get_category, add_category, delete_category, update_category, get_product, add_product, delete_product }