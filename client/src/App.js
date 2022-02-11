import Header from "./components/header/Header"
import Login from "./components/login/Login"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Account from "./components/account/Account"
import Cart from "./components/cart/Cart"
import Sell from "./components/sell/Sell"
import Help from "./components/help/Help"
import Slider from "./components/slider/Slider"
import Categories from "./components/home/Categories"
import Products from "./components/home/Products"

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <Switch>
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
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <Slider />
            <Categories />
            <Products />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
