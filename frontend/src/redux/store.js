import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from "redux-saga"
import rootReducer from "./rootReducer";
import { composeWithDevTools } from "@redux-devtools/extension";
import rootSaga from "./saga";



let sagaMiddleWare = createSagaMiddleware();


let store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(sagaMiddleWare))
)

sagaMiddleWare.run(rootSaga)

export default store;