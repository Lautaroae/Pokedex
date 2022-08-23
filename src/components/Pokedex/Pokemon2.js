import React, { useContext } from "react";
import "./Pokedex.css";
import FavoriteContext from "../../context/favoriteContext";

const Pokemon2 = (props) => {
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
      <div className="body">
        <div className="card">
          <div className="face front">
            <img src={pokemon.sprites.front_default} alt="algo" />
            <h3>
              #{pokemon.id} {pokemon.name}
            </h3>
          </div>
          <div className="face back">
            <h3>Tipo:</h3>
            {pokemon.types.map((type, idx) => {
              return <p key={idx}> {type.type.name}</p>;
            })}
            <h3>Ataques:</h3>
            {pokemon.abilities.map((abi, idx) => {
              return <p key={idx}> {abi.ability.name}</p>;
            })}
            <button className="button" onClick={clickHeart}>
              {heart}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pokemon2;
