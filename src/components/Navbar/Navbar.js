import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <nav>
        <div>
          <img
            src={process.env.PUBLIC_URL + "/assets/pokeapi.png"}
            alt="algo"
            className="navbar-img"
          />
        </div>
        <div>❤️</div>
      </nav>
    </>
  );
};

export default Navbar;
