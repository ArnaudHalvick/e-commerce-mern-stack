import "./CSS/Auth.css";

import { Link } from "react-router-dom";
import { useState } from "react";
// TODO: Work on responsiveness and auth pages after backend is done

const Auth = () => {
  const [state, setState] = useState("Signup");

  const switchState = () => {
    setState((prevState) => (prevState === "Signup" ? "Login" : "Signup"));
  };

  return (
    <div className="loginsignup">
      <div className="signup-container">
        <h1>{state === "Signup" ? "Create Account" : "Login"}</h1>
        <div className="signup-fields">
          {state === "Signup" && <input type="text" placeholder="Your name" />}
          <input type="email" placeholder="Email address" />
          <input type="password" placeholder="Password" />
        </div>
        <button>Get Started</button>
        <p className="signup-login">
          {state === "Signup"
            ? "Already have an account? "
            : "Don't have an account? "}
          <Link to="/login" onClick={switchState}>
            {state === "Signup" ? "Sign in" : "Sign up"}
          </Link>
        </p>
        {state === "Signup" && (
          <div className="signup-agree">
            <input type="checkbox" name="terms" id="terms" />
            <p>
              By creating an account, I agree to the Terms of Service and
              Privacy Policy Policy
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Auth;
