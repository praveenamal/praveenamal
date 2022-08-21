import { ADD_TO_CART  } from "../constants/cartConstants";

const initialState = {
    addedId:[],
    quantityById:{}
}

const productReducer = (state = initialState,action) =>{
    switch (action.type){
        case ADD_TO_CART:
            return {}
        default:
            return state;
    }
}



export default productReducer;