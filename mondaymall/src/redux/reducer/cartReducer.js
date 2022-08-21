import * as actionTypes from "../constants/cartConstants";
import product from "../../data/data";


const products =product

const INITIAL_STATE = {
    product:products,//[id,title,description,qty]
    cart:[], //[id,title,description,qty]
    item:null,
}

const cartReducer = (state = INITIAL_STATE ,action) =>{
    switch(action.type){
        
        case actionTypes.ADD_TO_CART:
        //pull the data from products array
            const item =product.find((prod) => prod.id === action.payload.id);
        //products left without buying 
            //const left = product.filter((item)=>item.id === action.payload.id);
        //check if the item is already present in the cart
            const inCart = state.cart.find(item => item.id === action.payload.id) ? true:false ;
             
            return {
                ...state,product:state.product.map(item => item.id === action.payload.id ? {...item,qty:item.qty <1 ? item.qty:item.qty-1 } :item ),cart:inCart ? state.cart.map(item => item.id === action.payload.id ? {...item,qty:item.qty+1} : item) : [...state.cart,{...item,qty:1}]
                
            }
        
        case actionTypes.REMOVE_FROM_CART:
            return{
                ...state,cart:state.cart.filter(item => item.id !== action.payload.id)
            }
        case actionTypes.ADJUST_QTY:
            return{
                ...state,cart:state.cart.map(item => item.id === action.payload.id , {...item,qty:action.payload.qty})
            }     
        case actionTypes.VIEW_ITEM:
            return{
                ...state,item:action.payload,
            }
        default:
            return state;
    }


}


export default cartReducer;
