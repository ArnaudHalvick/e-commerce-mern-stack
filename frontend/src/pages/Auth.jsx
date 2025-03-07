import { Link } from "react-router-dom";
import "./CSS/Auth.css";

// TODO: Work on responsiveness and auth pages after backend is done

const Auth = () => {
  return (
    <div className="loginsignup">
      <div className="signup-container">
        <h1>Create Account</h1>
        <div className="signup-fields">
          <input type="text" placeholder="Your name" />
          <input type="email" placeholder="Email address" />
          <input type="password" placeholder="Password" />
        </div>
        <button>Get Started</button>
        <p className="signup-login">
          Already have an account? <Link to="/login">Sign in</Link>
        </p>
        <div className="signup-agree">
          <input type="checkbox" name="terms" id="terms" />
          <p>
            By creating an account, I agree to the Terms of Service and Privacy
            Policy
          </p>
        </div>
      </div>
    </div>
  );
};

export default Auth;
