import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Pokedex from "./components/Pokedex/Pokedex";
import SearchBar from "./components/searchBar/SearchBar";
import React, { useState, useEffect } from "react";
import { getPokemon, getPokemonData, searchPokemon } from "./Api";
import { FavoriteProvider } from "./context/favoriteContext";

const localStorageKey = "favorite_pokemon";

function App() {
  const [pokemon, setPokemon] = useState([]);
  const [page, setPage] = useState(0);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const [favorite, setFavorite] = useState([]);
  const [notFound, setNotFound] = useState(false);
  const [searching, setSearching] = useState(false);

  const fetchPokemon = async () => {
    try {
      setLoading(true);
      const data = await getPokemon(27, 27 * page);
      const promises = data.results.map(async (pokemon) => {
        return await getPokemonData(pokemon.url);
      });
      const results = await Promise.all(promises);
      setPokemon(results);
      setLoading(false);
      setTotal(Math.ceil(data.count / 28));
      setNotFound(false);
    } catch (err) {}
  };

  const loadFavPokemon = () => {
    const pokemon =
      JSON.parse(window.localStorage.getItem(localStorageKey)) || [];
    setFavorite(pokemon);
  };

  useEffect(() => {
    loadFavPokemon();
  }, []);

  useEffect(() => {
    if (!searching) {
      fetchPokemon();
    }
  }, [page]);

  const updateFavoritePokemon = (name) => {
    const updated = [...favorite];
    const isFavorite = updated.indexOf(name);
    if (isFavorite >= 0) {
      updated.splice(isFavorite, 1);
    } else {
      updated.push(name);
    }
    setFavorite(updated);
    window.localStorage.setItem(localStorageKey, JSON.stringify(updated));
  };

  const onSearch = async (pokemon) => {
    if (!pokemon) {
      return fetchPokemon();
    }
    setLoading(true);
    setNotFound(false);
    setSearching(true);
    const results = await searchPokemon(pokemon);
    if (!results) {
      setNotFound(true);
      setLoading(false);
      return;
    } else {
      setPokemon([results]);
      setPage(0);
      setTotal(1);
    }
    setLoading(false);
    setSearching(false);
  };

  return (
    <>
      <FavoriteProvider
        value={{
          favoritePokemon: favorite,
          updateFavoritePokemon: updateFavoritePokemon,
        }}
      >
        <Navbar />
        <SearchBar onSearch={onSearch} />
        {notFound ? (
          <div className="not-found-text">
            Lo que estas buscando es un puchamon
          </div>
        ) : (
          <Pokedex
            loading={loading}
            pokemon={pokemon}
            page={page}
            setPage={setPage}
            total={total}
          />
        )}
      </FavoriteProvider>
    </>
  );
}

export default App;
