import "./Checkout.css";

const Checkout = () => {
  return (
    <div className="checkout">
      <h1>Checkout</h1>
      <form>
        <div class="c-details">
          <h4>Mpesa Full Name</h4>
          <input type="text" placeholder="Mpesa full name" />
          <h4>Mpesa Phone Number</h4>
          <input type="tel" placeholder="+2547..." />
          <h4>Address</h4>
          <input type="text" placeholder="address" />
          <h4>Email</h4>
          <input type="email" placeholder="email" />
          <h4>Password</h4>
          <input type="password" placeholder="password" />
        </div>
        <div class="c-button">
          <button type="submit">Proceed</button>
        </div>
      </form>
    </div>
  );
};

export default Checkout;

