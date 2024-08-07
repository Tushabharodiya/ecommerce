import { all } from "redux-saga/effects";
import { handle_add_category_saga, handle_add_product_saga, handle_delete_category_saga, handle_delete_product_saga, handle_get_category_saga, handle_get_product_saga, handle_update_category_saga } from "./root/productSaga";




function* rootSaga() {
    yield all([handle_get_category_saga(),
    handle_add_category_saga(),
    handle_delete_category_saga(),
    handle_update_category_saga(),
    handle_get_product_saga(),
    handle_add_product_saga(),
    handle_delete_product_saga()
    ])
}


export default rootSaga;