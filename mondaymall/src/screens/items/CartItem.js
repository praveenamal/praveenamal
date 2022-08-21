import "./CartItem.css";


const CartItem = ({cartItem}) =>{
    return (
        <div>
             <img src= {cartItem.image} alt ={cartItem.title}/>
           <p>{cartItem.title}</p>
           <p>{cartItem.description}</p>
           <p>Price:{cartItem.price}</p>
           <p>Qty:{cartItem.qty}</p>
        </div>
    )
}

export default CartItem;