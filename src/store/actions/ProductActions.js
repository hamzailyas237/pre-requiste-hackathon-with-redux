

import AsyncStorage from '@react-native-async-storage/async-storage'
import axios from 'axios'
import { actionTypes } from '../constants'
import Toast from 'react-native-toast-message';


const GetAllProductsAction = () => {

    return async (dispatch) => {
        dispatch({
            type: actionTypes.LOADER,
        })

        try {
            await axios.get('https://ruby-long-salamander.cyclic.app/api/products')
                .then(res => {
                    dispatch({
                        type: actionTypes.GET_PRODUCTS_SUCCESS,
                        payload: res.data.products,
                    })
                })
                .catch(err => {
                    console.log(err);
                })
        }
        catch (err) {
            dispatch({
                type: actionTypes.GET_PRODUCTS_FAIL,
            })
        }
    }
}


const GetWishlistProductsAction = () => {

    return async (dispatch) => {

        dispatch({
            type: actionTypes.LOADER,
        })

        try {
            const user_id = await AsyncStorage.getItem('id')
            const token = await AsyncStorage.getItem('token')

            await axios.get(`https://ruby-long-salamander.cyclic.app/api/wishlist/${user_id}`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
                .then(res => {
                    dispatch({
                        type: actionTypes.GET_WISHLISHT_PRODUCTS_SUCCESS,
                        payload: res.data.wishlist_products,
                    })
                })
                .catch(err => {
                    console.log(err);
                })
        }
        catch (err) {
            dispatch({
                type: actionTypes.GET_WISHLISHT_PRODUCTS_FAIL,
            })
        }
    }
}



const AddToWishlistProductsAction = (product) => {
    return async (dispatch) => {
        // dispatch({
        //     type: actionTypes.LOADER,
        // })

        try {
            const user_id = await AsyncStorage.getItem('id')
            const token = await AsyncStorage.getItem('token')

            axios.post('https://ruby-long-salamander.cyclic.app/api/wishlist', { product, user_id }, {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            })
                .then(res => {
                    Toast.show({
                        type: 'success',
                        text1: res.data.message,
                        visibilityTime: 2000,
                        topOffset: 20
                    });
                    dispatch({
                        type: actionTypes.ADD_WISHLISHT_PRODUCTS_SUCCESS,
                        payload: res.data.wishlist_products,
                    })
                })
                .catch(err => {
                    Toast.show({
                        type: 'error',
                        text1: err.response.data.message,
                        visibilityTime: 2000,
                        topOffset: 20
                    });
                })
        }
        catch (err) {
            dispatch({
                type: actionTypes.ADD_WISHLISHT_PRODUCTS_FAIL,
            })
        }
    }
}

const RemoveWishlistProductsAction = (wishlistProductToDeleteId) => {
    return async (dispatch) => {
        // dispatch({
        //     type: actionTypes.LOADER,
        // })

        try {
            await axios.delete(`https://ruby-long-salamander.cyclic.app/api/wishlist/${wishlistProductToDeleteId}`)
                .then(res => {
                    Toast.show({
                        type: 'success',
                        text1: res.data.message,
                        visibilityTime: 2000,
                        topOffset: 20
                    });
                    dispatch({
                        type: actionTypes.REMOVE_WISHLISHT_PRODUCTS_SUCCESS,
                        payload: res.data.wishlist_products,
                    })
                })
                .catch(err => {
                    // console.log(err);
                    // Toast.show({
                    //     type: 'error',
                    //     text1: err.response.data.message,
                    //     visibilityTime: 2000,
                    //     topOffset: 20
                    // });
                })
        }
        catch (err) {
            dispatch({
                type: actionTypes.REMOVE_WISHLISHT_PRODUCTS_FAIL,
            })
        }
    }
}

const GetCartProductsAction = () => {

    return async (dispatch) => {

        dispatch({
            type: actionTypes.LOADER,
        })

        try {
            const user_id = await AsyncStorage.getItem('id')
            const token = await AsyncStorage.getItem('token')

            await axios.get(`https://ruby-long-salamander.cyclic.app/api/cart/${user_id}`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
                .then(res => {
                    dispatch({
                        type: actionTypes.GET_CART_PRODUCTS_SUCCESS,
                        payload: res.data.cart_products,
                    })
                })
                .catch(err => {
                    console.log(err);
                })
        }
        catch (err) {
            dispatch({
                type: actionTypes.GET_CART_PRODUCTS_FAIL,
            })
        }
    }
}


const AddToCartProductsAction = (product) => {
    return async (dispatch) => {
        // dispatch({
        //     type: actionTypes.LOADER,
        // })

        try {
            const user_id = await AsyncStorage.getItem('id')
            const token = await AsyncStorage.getItem('token')

            axios.post('https://ruby-long-salamander.cyclic.app/api/cart', { product, user_id }, {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            })
                .then(res => {
                    Toast.show({
                        type: 'success',
                        text1: res.data.message,
                        visibilityTime: 2000,
                        topOffset: 20
                    });
                    dispatch({
                        type: actionTypes.ADD_CART_PRODUCTS_SUCCESS,
                        payload: res.data.cart_products,
                    })
                })
                .catch(err => {
                    Toast.show({
                        type: 'error',
                        text1: err.response.data.message,
                        visibilityTime: 2000,
                        topOffset: 20
                    });
                })
        }
        catch (err) {
            dispatch({
                type: actionTypes.ADD_CART_PRODUCTS_FAIL,
            })
        }
    }
}

const RemoveCartProductAction = (cartProductToDeleteId) => {

    return async (dispatch) => {
        // dispatch({
        //     type: actionTypes.LOADER,
        // })

        try {
            const token = await AsyncStorage.getItem('token')
            await axios.delete(`https://ruby-long-salamander.cyclic.app/api/cart/${cartProductToDeleteId}`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
                .then(res => {
                    Toast.show({
                        type: 'success',
                        text1: res.data.message,
                        visibilityTime: 2000,
                        topOffset: 20
                    });
                    dispatch({
                        type: actionTypes.REMOVE_CART_PRODUCTS_SUCCESS,
                        payload: res.data.cart_products,
                    })
                })
                .catch(err => {
                    // console.log(err);
                    // Toast.show({
                    //     type: 'error',
                    //     text1: err.response.data.message,
                    //     visibilityTime: 2000,
                    //     topOffset: 20
                    // });
                })
        }
        catch (err) {
            dispatch({
                type: actionTypes.REMOVE_CART_PRODUCTS_FAIL,
            })
        }
    }
}

export {
    GetAllProductsAction,
    GetWishlistProductsAction,
    GetCartProductsAction,
    RemoveWishlistProductsAction,
    AddToWishlistProductsAction,
    AddToCartProductsAction,
    RemoveCartProductAction
}


