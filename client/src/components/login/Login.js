import "./Login.css";

const Login = () => {
  return (
    <div className="login__page">
      <div className="logo">
        <img src={`${process.env.PUBLIC_URL}/assets/images/logo.png`} alt="" />
      </div>
      <form className="input__fields">
        <h4>Username/email</h4>
        <input type="text" placeholder="Username/email" />
        <h4>Password</h4>
        <input type="password" placeholder="password" />
        <div className="checkbox">
          <input type="checkbox" />
          <p>stay signed in</p>
        </div>
        <button type="submit">SignIn</button>
      </form>
    </div>
  );
};

export default Login;
