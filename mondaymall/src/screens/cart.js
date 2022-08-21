import "./cart.css";
import {useState,useEffect} from "react";
import {connect} from "react-redux";
import CartItem from "./items/CartItem";

const Cart = ({addedItem}) => {
    const [totalItem,setTotalItem] = useState(0);
    const [totalPrice,setTotalPrice] = useState(0);

    useEffect(()=>{
    let items = 0;
    let price = 0;

    addedItem.forEach(item =>{
        items += item.qty;
        price += (item.qty * item.price);
    })
    setTotalItem (items);
    setTotalPrice(price);
    },[addedItem,totalItem,setTotalItem,totalPrice,setTotalPrice])
    

    return  (
    <div>
        <p >
            this is the cart container component
         Hurry up fill your cart!!
         </p>
         <div>
             <div>
                {addedItem.map(item =>  <CartItem key ={addedItem.id} cartItem ={item}/>) }
                 
             </div>
         </div>
         <div className = "checkout_div">
             <div>    
             <p>Total Items :{totalItem}</p>
             <p>Total Price : $ {totalPrice}</p>
             <button disabled = {totalItem > 0 ? false:true}>Checkout</button>
             </div>
         </div>     
    </div>
    ) 
}

const mapStateToProps = (state) =>{
    return {
        addedItem:state.cart.cart,
    }
}

export default connect(mapStateToProps)(Cart);
