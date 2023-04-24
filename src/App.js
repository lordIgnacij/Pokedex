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
              Pokemon is super cool, and probably one of the greatest human inventions
            </div>
          }
        />
        <Route path="/Pokedex/pokemon/:pokeId" element={<PokeDetails />} />
      </Routes>
    </div>
  );
}

export default App;