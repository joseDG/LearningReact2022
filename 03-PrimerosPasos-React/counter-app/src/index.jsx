import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import CounterApp from "./components/CounterApp";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CounterApp value={10}/>
  </React.StrictMode>
);
