import React from "react";
import "../../styles/AboutSection.css";

function WhoAmI({myAge}) {

  // myAge is passed from its parent component "AboutSection.jsx" so its already calculated instead of
  // having a useEffect that gets called whenever this component gets rendered 

  return (
    <>
    <h2>Who am I?</h2>
    <p>
      My name is <strong>Robin</strong>, I am <strong>{myAge}</strong> years old
      and live in <strong>Pietarsaari, Finland</strong>.
    </p>
    <p>
      I speak <strong>Swedish</strong>, <strong>Finnish</strong>, and{" "}
      <strong>English</strong>.
    </p>
  </>
  
  );
}

export default WhoAmI;
