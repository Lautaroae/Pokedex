import React from "react";
import FavoriteContext from "../../context/favoriteContext";
import "./Navbar.css";

const { useContext } = React;

const Navbar = () => {
  const { favoritePokemon } = useContext(FavoriteContext);
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
        <div>❤️{favoritePokemon.length}</div>
      </nav>
    </>
  );
};

export default Navbar;
