import "./Signup.css";

const Signup = () => {
  return (
    <div className="signup_page">
      <div className="logo">
        <img src="http://localhost:3000/assets/images/logo.png" alt="logo" />
      </div>
      <form className="input_fields">
        <h4>Full Name</h4>
        <input type="text" placeholder="full name" />
        <h4>Email</h4>
        <input type="text" placeholder="email" />
        <h4>Password</h4>
        <input type="password" placeholder="password" />
        <h4>Confirm Password</h4>
        <input type="password" placeholder="confirm password" />
        <h4>Telephone</h4>
        <input type="text" placeholder="+2547..." />
        <div className="checkbox">
          <input type="checkbox" />
          <p>Agree to Terms and Conditions</p>
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Signup;
