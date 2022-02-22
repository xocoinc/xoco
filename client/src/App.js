import Header from "./components/header/Header"
import Login from "./components/login/Login"
import Signup from "./components/signup/Signup"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom"
import Account from "./components/account/Account"
import Cart from "./components/cart/Cart"
import Sell from "./components/sell/Sell"
import Help from "./components/help/Help"
// import Slider from "./components/slider/Slider"
import Categories from "./components/home/Categories"
import Products from "./components/home/Products"
import ProductDescription from "./components/checkout/ProductDescription"
import Checkout from "./components/checkout/Checkout"
// import Product from "./components/home/Product"

function App() {
  const user = false
  return (
    <div className="app">
      <Router>
        <Header />
        <Switch>
          <Route path="/productDescription">
            <ProductDescription />
          </Route>
          <Route path="/help">
            <Help />
          </Route>
          <Route path="/sell">
            <Sell />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
          <Route path="/account">
            <Account />
          </Route>
          <Route path="/login">{user ? <Redirect to="/" /> : <Login />}</Route>
          <Route path="/signup">
            {user ? <Redirect to="/" /> : <Signup />}
          </Route>
          <Route path="/checkout">
            <Checkout />
          </Route>
          <Route path="/product/:categories">
            <Products />
          </Route>
          <Route path="/product/:id">
            <Products />
          </Route>
          <Route path="/">
            {/* <Slider /> */}
            <Categories />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
