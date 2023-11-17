import React from "react";
import "./Login.css";
import StorefrontIcon from "@mui/icons-material/Storefront";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "./AuthContext";

function Login() {
  const { greeting, setGreeting } = useAuth();
  return (
    <div className="login">
      <Link to="/" style={{ textDecoration: "none" }}>
        <div className="login__logo">
          <StorefrontIcon className="login__logoImage" fontSize="large" />
          <h2 className="login__logoTitle">eSHOP</h2>
        </div>
      </Link>

      <div className="login__container">
        <h1>Sign-in</h1>

        <form>
          <h5>E-mail</h5>
          <input type="text" />

          <h5>Password</h5>
          <input type="password" />

          <Link to="/" style={{ textDecoration: "none" }}>
            <button
              type="submit"
              className="login__signInButton"
              onClick={() => setGreeting("Hello User")}
            >
              Sign In
            </button>
          </Link>
        </form>

        <p>
          By signing-in you agree to the eShop Website Conditions of Use & Sale.
          Please see our Privacy Notice, our Cookies Notice and our
          Interest-Based Ads Notice.
        </p>
      </div>
    </div>
  );
}

export default Login;
