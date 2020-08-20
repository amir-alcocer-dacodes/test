import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import AppBar from "./components/AppBar";
import Home from "./views/Home";
import Product from "./views/Product";
import Cart from "./views/Cart";
import { CartContext } from "./context/Cart";
import { IProduct } from "./components/HOC/Products";

function App() {
  const [cartList, setCartList] = React.useState<IProduct[]>([]);

  return (
    <Router>
      <CartContext.Provider
        value={{ cartList: cartList, setCartList: setCartList }}
      >
        <AppBar />
        <Switch>
          <Route exact path="/cart">
            <Cart />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/product/:id">
            <Product />
          </Route>
          <Redirect to="/" />
        </Switch>
      </CartContext.Provider>
    </Router>
  );
}

export default App;
