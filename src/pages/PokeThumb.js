import "./PokeThumb.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function PokeThumb(props) {
  const [name, setName] = useState(props.pokemon.name);
  const navigate = useNavigate();
  useEffect(() => {
    capitalizeName();
  }, []);

  function capitalizeName() {
    const capitalName = name.charAt(0).toUpperCase() + name.slice(1);
    console.log(capitalName);
    setName(capitalName);
  }

  function navigateToDetails() {
    console.log("Click works.");
    navigate(`/Pokedex/pokemon/${props.pokemon.id}`);
  }

  return (
    <div className="cardThumb" onClick={navigateToDetails}>
      <div className="line1">
        <div className="id font">
          <p>#{props.pokemon.id}</p>
        </div>
        <img src={props.pokemon.img} alt="Poke pic" width="100" height="100" />
      </div>
      <div className="line2 font">{name}</div>
    </div>
  );
}

export default PokeThumb;