import "./individualproduct.css";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {addToCart,addItem} from "../../redux/actions/shopAction";




const Product =  ({productdata, addToCart,viewItem})=> {
    return (
        <div  className="product_info">
            <div className="product_image">
            <img src={productdata.image} alt={productdata.titlle} />
            </div>
            <div className="Product_title">
            <p>{productdata.title}</p>
            </div>
            <div>
            <p className="product_desc">{productdata.description}</p>
            <p className="product_price">$ {productdata.price}</p>
            
            </div>
            
            <div className = "add_button"> 
                <button  onClick = {()=> addToCart(productdata.id) }>Add To Cart</button>
            </div>
            <div className = "view_button">
                <Link to ={`./Products/${productdata.id}`}>
                <button onClick = {() => viewItem(productdata)} >View</button>
                </Link>
            </div>
        </div>
    )
    
}

const mapDispatchToProps = (dispatch) =>{ 
  return {
    addToCart: (id) => dispatch(addToCart(id)),
    viewItem:(item) =>dispatch(addItem(item)),
    
  }
}
 

export default connect (null,mapDispatchToProps)(Product);