import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "./PokeDetails.css";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

function PokeDetails({ id }) {
  const [pokemon, setPokemon] = useState([]);
  const [flavorText, setFlavorText] = useState([]);

  let { pokeId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getMe();
  }, []);

  function getMe() {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokeId}`)
      .then((response) => response.json())
      .then((data) => {
        setPokemon({
          name: data.name,
          type: data.types[0].type.name,
          hp: data.stats[0].base_stat,
          attack: data.stats[1].base_stat,
          defense: data.stats[2].base_stat,
        });
      });
    fetch(`https://pokeapi.co/api/v2/pokemon-species/${pokeId}`)
      .then((response) => response.json())
      .then((data) => {
        setFlavorText({
          first: data.flavor_text_entries[0].flavor_text,
        });
      });
  }

  let artworkUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokeId}.png`;

  function handleBack() {
    navigate("/Pokedex");
  }

  return (
    <Box sx={{ minWidth: 275 }}>
      <Card className="card">
        <CardContent className="card-content">
          <div className="card-header">
            <Typography className="card-title" variant="h4">
              {pokemon.name}
            </Typography>
            <Typography className="card-subtitle" variant="subtitle1">
              {pokemon.type}
            </Typography>
          </div>
          <img
            className="card-artwork"
            src={artworkUrl}
            alt={pokemon.name}
            title={pokemon.name}
          />
          <div className="card-stat-list ">
            <div className="card-stat">
              <Typography className="card-stat-label " variant="subtitle2">
                HP:
              </Typography>
              <Typography className="card-stat-value " variant="subtitle2">
                {pokemon.hp}
              </Typography>
            </div>
            <div className="card-stat">
              <Typography className="card-stat-label " variant="subtitle2">
                Attack:
              </Typography>
              <Typography className="card-stat-value" variant="subtitle2">
                {pokemon.attack}
              </Typography>
            </div>
            <div className="card-stat">
              <Typography className="card-stat-label" variant="subtitle2">
                Defense:
              </Typography>
              <Typography className="card-stat-value" variant="subtitle2">
                {pokemon.defense}
              </Typography>
            </div>
          </div>
          <div className="card-flavor-container">
            <Typography className="card-flavor-text" variant="subtitle2">
              {flavorText.first}
            </Typography>
          </div>
        </CardContent>
      </Card>
      <Button variant="contained" color="error" onClick={handleBack}>
        Back
      </Button>
    </Box>
  );
}

export default PokeDetails;