import React, { useState } from "react";
import "./NavbarStyles.css";
import { MenuItems } from "./MenuItems";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [click, setClick] = useState(true);

  function mis() {
    setClick((prev) => {
      return !prev;
    });
  }
  return (
    <div>
      <nav className="NavbarItems">
        <h1 className="navbar-logo">
          {" "}
          INGENOUS{" "}
          <span>
            {" "}
            <i class="fa-brands fa-yelp"></i>
          </span>
        </h1>

        <div className="menu-icons">
          <i
            onClick={mis}
            className={click ? "fas fa-bars" : "fas fa-times"}
          ></i>
        </div>
        <ul on className={click ? "nav-menu" : "nav-menu active"}>
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <Link className={item.cName} to={item.url}>
                  <i className={item.icon}></i>
                  {item.title}
                </Link>
              </li>
            );
          })}
          <button>Sign Up </button>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
