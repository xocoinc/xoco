import React from "react";
import { Link } from "react-router-dom";
import "./Account.css";

const Account = () => {
  return (
    <div className="account">
      <img
        src="http://localhost:3000/static/media/xoco%20blue%20(2).f5ba87df822711d4de53.png"
        alt=""
      />
      <div className="accountButtons">
        <div className="login">
          <Link to="/login" className="login">
            <span>SignIn</span>
          </Link>
        </div>
        <div className="register">
          <Link to="/signup" className="register">
            <span>SignUp</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Account;
