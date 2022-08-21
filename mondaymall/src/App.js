
import './App.css';
import Navbar from "./components/navbar";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";


//components
import Homepage from "./screens/homepage";
import Cart from "./screens/cart";
import Products from "./screens/Products";




function App() {
  
  return (
  <Router>
    <div className>
      <Navbar />
        <Switch>
          <Route exact path ="/" component ={Homepage} />
          <Route exact path ="/cart" component ={Cart} />
          <Route exact path ="/Products" component ={Products}/>
        </Switch>  
    </div>
  </Router>
  )
  
  
}

export default App;
