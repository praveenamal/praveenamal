import * as actionTypes from "../constants/cartConstants";

export const addToCart = (productid) => {
    return {
        type:actionTypes.ADD_TO_CART,
        payload:{
            id:productid,
        }
    }
}

export const removeFromCart = (productid) => {
    return{
        type:actionTypes.REMOVE_FROM_CART,
        payload:{
            id:productid,
        }

    }
}

export const adjustQty = (productid,qty) => {
    return{
        type:actionTypes.ADJUST_QTY,
        payload:{
            id:productid,
            qty:qty
        }
    }
}

export  const addItem = (product) => {
    return {
       type:actionTypes.VIEW_ITEM,
       payload:{
           item :product,
       } 
    }
}
