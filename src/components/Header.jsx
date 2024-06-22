import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../Context";

function Header() {
  const { cartItems } = useContext(Context);

  return (
    <header>
      <div className="header-container container container-flex">
        <Link to="/">
          <span className="logo-name">
            pictobook <i className="ri-polaroid-2-line camera-icon"></i>
          </span>
        </Link>
        <nav className="nav">
          <Link className="nav-link" to="/artists">
            <span>Artists</span>
          </Link>
          <Link to="/cart">
            <i
              className={`${
                cartItems.length > 0
                  ? "ri-shopping-cart-fill"
                  : "ri-shopping-cart-line"
              } ri-fw ri-xl cart-icon`}
            ></i>
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;