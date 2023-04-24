import "./App.css";
import { Routes, Route } from "react-router-dom";
import Grid from "./pages/Grid";
import { Link } from "react-router-dom";
import PokeDetails from "./pages/PokeDetails";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/Pokedex" element={<Grid />} />
        <Route
          path="/Pokedex/about"
          element={
            <div className="textPoke fontPoke">
              Pokémon(an abbreviation for Pocket Monsters in Japanese) is a
              Japanese media franchise managed by The Pokémon Company, founded
              by Nintendo, Game Freak, and Creatures. The franchise was created
              by Satoshi Tajiri in 1996, and is centered around fictional
              creatures called "Pokémon". In Pokémon, Pokémon Trainers are
              people who catch, train, care for, and battle with Pokémon. The
              English slogan for the franchise is "Gotta Catch ‘Em All!". There
              are currently 1015 Pokémon species.
            </div>
          }
        />
        <Route path="/Pokedex/pokemon/:pokeId" element={<PokeDetails />} />
      </Routes>
    </div>
  );
}

export default App;