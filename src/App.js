import { useState } from "react";
import "./App.css";
import React from "react";
import QuoteCard from "./components/QuoteCard";
import axios from "axios";

function App() {
  const [simpson, setSimpson] = React.useState("");

  function getSimpson() {
    // Send the request
    axios
      .get("https://simpsons-quotes-api.herokuapp.com/quotes")
      // Extract the DATA from the received response
      .then((response) => response.data)
      // Use this data to update the state
      .then((data) => {
        console.log(data[0]);
        setSimpson(data[0]);
      });
  }
  return (
    <div className="App">
      <QuoteCard simpson={simpson} />
      <button type="button" onClick={getSimpson}>
        Simpson Quote
      </button>
    </div>
  );
}

export default App;
