import "./homepage.css";
import Product from "./items/individualproduct";
import {connect} from "react-redux";

const Homepage = ({product}) => {
    return (
        <div className = "Home_page">
        <div className ="banner">
        <p>This is the homepage component</p>
        </div>
        <div className = "products_holder">
            {product.map(produc => {return <Product key = {product.id} productdata = {produc} />})}
        </div>

    </div>
    )

}

const mapStateToProps = (state) => {
    return{
        product:state.cart.product,
    }
}

export default connect(mapStateToProps)(Homepage);