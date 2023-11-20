// Header.js
import React from "react";
import "./Header.css";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import StorefrontIcon from "@mui/icons-material/Storefront";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { useAuth } from "./AuthContext";

function Header() {
  const [{ basket }, dispatch] = useStateValue();
  const { greeting, isSignedIn, signOut } = useAuth();

  const handleSignOut = () => {
    signOut();
  };

  return (
    <div className="header">
      <Link to="/" style={{ textDecoration: "none" }}>
        <div className="header_logo">
          <StorefrontIcon className="header_logoImage" fontSize="large" />
          <h2 className="header_logoTitle">eShop</h2>
        </div>
      </Link>

      <div className="header_search">
        <input type="text" className="header_searchInput" />
        <SearchIcon className="header_searchIcon" />
      </div>

      <div className="header_nav">
        <Link to="/login" style={{ textDecoration: "none" }}>
          <div className="nav_item">
            <span className="nav_itemLineOne">{greeting}</span>
            <span
              className="nav_itemLineTwo"
              onClick={isSignedIn ? handleSignOut : null}
            >
              {isSignedIn ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>

        <div className="nav_item">
          <span className="nav_itemLineOne">Your</span>
          <span className="nav_itemLineTwo">Shop</span>
        </div>
        <Link to="/checkout" style={{ textDecoration: "none" }}>
          <div className="nav_itemBasket">
            <ShoppingBasketIcon />
            <span className="nav_iteminTwo nav_basketCount">
              {basket.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
