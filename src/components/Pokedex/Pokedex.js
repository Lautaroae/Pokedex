import React from "react";
import Pokemon2 from "./Pokemon2";
import "./Pokedex.css";
import Pagination from "./Pagination";

const Pokedex = (props) => {
  const { pokemon, page, setPage, total, loading } = props;

  const lastPage = () => {
    const nextPage = Math.max(page - 1, 0);
    setPage(nextPage);
  };

  const nextPage = () => {
    const nextPage = Math.min(page + 1, total);
    setPage(nextPage);
  };

  return (
    <>
      <div className="header">
        <h1>Pokedex</h1>
      </div>
      <Pagination
        className=""
        page={page + 1}
        totalPages={total}
        onLeftClick={lastPage}
        onRightClick={nextPage}
      />
      {loading ? (
        <div> Cargando pokemones...</div>
      ) : (
        <div className="pokedex-grid">
          {pokemon.map((pokemon, index) => {
            return <Pokemon2 pokemon={pokemon} key={pokemon.name} />;
          })}
        </div>
      )}
    </>
  );
};

export default Pokedex;
