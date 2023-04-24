import { useState, useEffect } from "react";
import PokeThumb from "./PokeThumb";
import "./Grid.css";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

function Grid() {
  const [pokemons, setPokemons] = useState([]);
  const [previousPage, setPreviousPage] = useState(null);
  const [currentPage, setCurrentPage] = useState(
    `https://pokeapi.co/api/v2/pokemon/?limit=20&offset=0`
  );
  const [nextPage, setNextPage] = useState(null);

  useEffect(() => {
    fetchPoke();
  }, [currentPage]);

  async function fetchPoke() {
    const response = await fetch(currentPage);
    if (response.ok) {
      const pokemonJsonList = await response.json();
      let pokemonsPromises = [];
      pokemonJsonList.results.forEach((element) => {
        pokemonsPromises.push(getPokemon(element.url));
      });
      setPreviousPage(pokemonJsonList.previous);
      setNextPage(pokemonJsonList.next);
      const responses = await Promise.all(pokemonsPromises);
      const promises = responses.map((r) => r.json());
      const pokemonList = await Promise.all(promises);
      const pokemonsToBeSaved = [];
      pokemonList.forEach((pokemon) =>
        pokemonsToBeSaved.push(setValues(pokemon))
      );
      setPokemons(pokemonsToBeSaved);
    }
  }

  function getPokemon(url) {
    return fetch(`${url}`);
  }

  function handleNext() {
    setCurrentPage(nextPage);
  }
  function handlePrevious() {
    setCurrentPage(previousPage);
  }

  function setValues(pokemon) {
    return {
      name: pokemon.name,
      type: pokemon.types[0].type.name,
      img: pokemon.sprites.front_default,
      id: pokemon.id,
    };
  }

  return (
    <div>
      <div>
        <p className="text font">Welcome to Pokédex!</p>
      </div>
      <div className="grid">
        {pokemons.map((p) => (
          <PokeThumb key={p.id} pokemon={p} />
        ))}
      </div>
      <div className="buttonContainer">
        <Button
          className="font text"
          variant="contained"
          color="error"
          onClick={handlePrevious}
        >
          Previous
        </Button>
        <Link className="font" to="/Pokedex/about">
          More about pokemons
        </Link>
        <Button
          className="font text"
          variant="contained"
          color="error"
          onClick={handleNext}
        >
          Next
        </Button>
      </div>
    </div>
  );
}

export default Grid;