
import { combineReducers } from "redux";
import {
    GetAllProductsReducer,
    GetWishlistProductsReducer,
    GetCartProductsReducer,
    AddWishlistProductsReducer,
    RemoveWishlistProductsReducer,
    AddCartProductsReducer,
    RemoveCartProductsReducer
} from './ProductReducer'

const combineReducer = combineReducers({
    GetAllProductsReducer,
    GetWishlistProductsReducer,
    GetCartProductsReducer,
    AddWishlistProductsReducer,
    RemoveWishlistProductsReducer,
    AddCartProductsReducer,
    RemoveCartProductsReducer
})

export default combineReducer
