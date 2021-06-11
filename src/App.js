import React from "react";
import Logo from "./Logo";
import BestPokemon from "./BestPokemon";
import CaughtPokemon from "./CaughtPokemon";
//import PokemonMoves from "./PokemonMoves";


function App() {
  function logWhenClicked() {
  console.log("look at this button, working and stuff!");
}
  return (
  <div>
    <Logo appName="Pokedex" handleClick={logWhenClicked} />
    <BestPokemon abilities = {["Anticipation", "Adaptability", "Run-Away"]}/>
    <CaughtPokemon date = {new Date().toLocaleDateString()}/>
  </div>
  );
}


export default App;


