import React, { useState } from "react";

const CaughtPokemon = (props) => {
  const [caught, setCaught] = useState([]);

  function catchPokemon () {
    setCaught(caught.concat(["okayy", "okrrr", "okuur", "ok", "k"]));

  }

  console.log(props); //what happens if i am using the array function with no retun, where do I place the variables? A: you can't, it (JSX) doesn't allow for JS code without {}
  return (
  <>
    <p>Caught {caught.length} Pokemon on {props.date}</p>
    <button onClick={catchPokemon}>Click me</button>
    <ul>{caught.map((el, index) => {
      return <li key={index}>{el}</li>;
    })}
    </ul>
    </>
);
};
export default CaughtPokemon;