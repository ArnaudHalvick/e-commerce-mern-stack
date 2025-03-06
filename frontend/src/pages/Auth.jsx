import { Link } from "react-router-dom";
import "./CSS/Auth.css";

const Auth = () => {
  return (
    <div className="loginsignup">
      <div className="signup-container">
        <h1>Sign Up</h1>
        <div className="signup-fields">
          <input type="text" placeholder="Your name" />
          <input type="email" placeholder="Your email" />
          <input type="password" placeholder="Your password" />
        </div>
        <button>Sign Up</button>
        <p className="signup-login">
          Already have an account? <Link to="/login">Login</Link>
        </p>
        <div className="signup-agree">
          <input type="checkbox" name="" id="" />
          <p>By creating an account, I agree to the terms & conditions</p>
        </div>
      </div>
    </div>
  );
};

export default Auth;
