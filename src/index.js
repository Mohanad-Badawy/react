import React from "react";
import ReactDOM from "react-dom";
import CustPanel from "./custom/panel.js";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>:: Header ::</h1>
      <CustPanel />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
