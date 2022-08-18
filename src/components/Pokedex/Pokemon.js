import React, { useContext } from "react";
import FavoriteContext from "../../context/favoriteContext";
import "./Pokedex.css";

const Pokemon = (props) => {
  const { pokemon } = props;
  const { favoritePokemon, updateFavoritePokemon } =
    useContext(FavoriteContext);

  const redHeart = "❤️";
  const blackHeart = "🖤";
  const heart = favoritePokemon.includes(pokemon.name) ? redHeart : blackHeart;
  const clickHeart = (e) => {
    e.preventDefault();
    updateFavoritePokemon(pokemon.name);
  };

  return (
    <>
      <div className="pokemon-card">
        <div className="pokemon-img-container">
          <img
            src={pokemon.sprites.front_default}
            alt="algo"
            className="pokemon-img"
          />
        </div>
        <div className="card-body">
          <div className="card-top">
            <h3>{pokemon.name}</h3>
            <div>#{pokemon.id}</div>
          </div>
          <div className="card-bottom">
            <div className="card-type">
              {pokemon.types.map((type, idx) => {
                return (
                  <div key={idx} className="card-type-text">
                    {type.type.name}
                  </div>
                );
              })}
            </div>
            <button onClick={clickHeart}>
              <div className="card-favourite">{heart}</div>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pokemon;
