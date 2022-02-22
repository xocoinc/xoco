import "./Checkout.css";
import { Link } from "react-router-dom";

const Checkout = () => {
    return ( <
        div className = "checkout" >
        <
        h1 > Checkout < /h1> <
        form >
        <
        div class = "c-details" >
        <
        h4 > Name < /h4> <
        input type = "text"
        placeholder = "First name" / >
        <
        input type = "text"
        placeholder = "Last name" / >
        <
        h4 > Mpesa Phone Number < /h4> <
        input type = "tel"
        placeholder = "+2547..." / >
        <
        h4 > Email < /h4> <
        input type = "email"
        placeholder = "email" / >
        <
        h4 > Password < /h4> <
        input type = "password"
        placeholder = "password" / >
        <
        /div> <
        Link to = "/address" >
        <
        button type = "submit" > Confirm order < /button> <
        /Link> <
        /form> <
        /div>
    );

  return (
    <div className="checkout">
      <h1>Checkout</h1>
      <form>
        <div class="c-details">
          <h4>Full Name</h4>
          <input type="text" placeholder="Mpesa full name" />
          <h4>Phone Number</h4>
          <input type="tel" placeholder="+2547..." />
          <h4>Address</h4>
          <input type="text" placeholder="address" />
          <h4>Email</h4>
          <input type="email" placeholder="email" />
          <h4>Password</h4>
          <input type="password" placeholder="password" />
        </div>
        <Link to="/address">
          <button type="submit" class="c-button" >Proceed</button>
        </Link>
      </form>
    </div>
  );
};

export default Checkout;
