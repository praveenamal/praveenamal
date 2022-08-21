
import "./products.css";
import {connect} from "react-redux";
import { addToCart } from "../redux/actions/shopAction";


const Products = ({item,viewItem}) => {
    
    return (
        <div className = "products_page">
             <p>{item.title}</p>
             <p>{item.more_info}</p>
             <button onClick ={()=>viewItem(item.id)}>Add To Cart</button>
        </div>
    )
}

const mapStateToProps = ( state ) =>{
    return {
        item: state.cart.item,
    }
}

const mapDispatchToProps =( dispatch ) =>{
    return {
        viewItem:(id)=>dispatch(addToCart(id)),
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Products);

