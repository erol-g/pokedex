import React from "react";

const Logo = (props) => {
    console.log(props);
  return (<header>
      {/* <h1>Welcome to the {props.appName}</h1> */}
      <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png" alt="pokemon" onClick={props.handleClick}/>
    </header>
);


};

export default Logo;



// function logWhenClicked() {
//     console.log("Button was clicked!");
//   }

//   return <button onClick={logWhenClicked}>Click me!</button>;
// }
// 1. Open the pokedex React application from last week and open the Logo.js file.
// 2. Add a function named logWhenClicked within the Logo component. (Hint: look at the example above).
// 3. In the logWhenClicked function, console.log a message (it doesn't matter what the message is).
// 4. Add an onClick handler to the <img> that will call logWhenClicked. (Hint: look at the ClickLogger component above).
// 5. In your web browser, try clicking on the logo image. What do you see in the JavaScript console?