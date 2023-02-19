const { actionTypes } = require("../constants")


const INITIAL_STATE = {
    products: [],
    loader: false,
    wishlistProducts: [],
    cartProducts: []
}

const GetAllProductsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actionTypes.LOADER:
            return {
                ...state,
                loader: false
            }
        case actionTypes.GET_PRODUCTS_FAIL:
            return {
                ...state,
                products: [],
                loader: false
            }
        case actionTypes.GET_PRODUCTS_SUCCESS:
            return {
                ...state,
                products: action.payload,
                loader: false
            }
        default:
            return state
    }
}

const GetWishlistProductsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actionTypes.LOADER:
            return {
                ...state,
                loader: false
            }
        case actionTypes.GET_WISHLISHT_PRODUCTS_FAIL:
            return {
                wishlistProducts: [],
                loader: false
            }
        case actionTypes.GET_WISHLISHT_PRODUCTS_SUCCESS:
            return {
                wishlistProducts: action.payload,
                loader: false
            }
        default:
            return state
    }
}

const AddWishlistProductsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actionTypes.LOADER:
            return {
                ...state,
                loader: false
            }
        case actionTypes.ADD_WISHLISHT_PRODUCTS_FAIL:
            return {
                ...state,
                loader: false
            }
        case actionTypes.ADD_WISHLISHT_PRODUCTS_SUCCESS:
            return {
                wishlistProducts: [...state.wishlistProducts, action.payload],
                loader: false
            }
        default:
            return state
    }
}

const RemoveWishlistProductsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actionTypes.LOADER:
            return {
                ...state,
                // loader: true
                loader: false
            }
        case actionTypes.REMOVE_WISHLISHT_PRODUCTS_FAIL:
            return {
                ...state,
                loader: false
            }
        case actionTypes.REMOVE_WISHLISHT_PRODUCTS_SUCCESS:
            const itemToRemove = state.wishlistProducts.filter((product) => product.id !== action.payload.id)
            return {
                wishlistProducts: [...itemToRemove],
                loader: false
            }
        default:
            return state
    }
}

const GetCartProductsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actionTypes.LOADER:
            return {
                loader: false
            }
        case actionTypes.GET_CART_PRODUCTS_FAIL:
            return {
                cartProducts: [],
                loader: false
            }
        case actionTypes.GET_CART_PRODUCTS_SUCCESS:
            return {
                cartProducts: action.payload,
                loader: false
            }
        default:
            return state
    }
}

const AddCartProductsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actionTypes.LOADER:
            return {
                ...state,
                // loader: true
                loader: false
            }
        case actionTypes.ADD_CART_PRODUCTS_FAIL:
            return {
                ...state,
                loader: false
            }
        case actionTypes.ADD_CART_PRODUCTS_SUCCESS:
            return {
                cartProducts: [...state.cartProducts, action.payload],
                loader: false
            }
        default:
            return state
    }
}

const RemoveCartProductsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actionTypes.LOADER:
            return {
                ...state,
                // loader: true
                loader: false
            }
        case actionTypes.REMOVE_WISHLISHT_PRODUCTS_FAIL:
            return {
                ...state,
                loader: false
            }
        case actionTypes.REMOVE_WISHLISHT_PRODUCTS_SUCCESS:
            const itemToRemove = state.cartProducts.filter((product) => product.id !== action.payload.id)
            return {
                cartProducts: [...itemToRemove],
                loader: false
            }
        default:
            return state
    }
}
export {
    GetAllProductsReducer,
    GetWishlistProductsReducer,
    GetCartProductsReducer,
    RemoveWishlistProductsReducer,
    AddWishlistProductsReducer,
    AddCartProductsReducer,
    RemoveCartProductsReducer
}