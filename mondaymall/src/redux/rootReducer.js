import { combineReducers } from "redux";
import cartReducer from "./reducer/cartReducer";
import productReducer from "./reducer/productReducer";

const rootReducer = combineReducers({
    cart:cartReducer,
    product:productReducer
})

export default rootReducer;