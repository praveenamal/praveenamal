import "./navbar.css"; 
import {Link } from "react-router-dom";
import {connect} from "react-redux";
import {useState,useEffect} from "react";

const Navbar = ({item}) => {

  const [totalItems,setTotalItems] =useState(0);

  useEffect(()=>{
    let items = 0;
    item.forEach(item => {
       items += item.qty;
    })
    setTotalItems(items)
  },[item,totalItems,setTotalItems])
    return (
      <div className="navigation">
      <Link to="/">
      <h2>Monday Mall</h2>
      </Link>
      <ul>
        <li>
          <Link to="/cart">
            cart <span className = "cart_number">{totalItems}</span>
          </Link>
        </li>
      </ul>
    </div>
    )
}

const mapStateToProps = (state) =>{
return {
  item:state.cart.cart,
}
}

export default connect(mapStateToProps)(Navbar);