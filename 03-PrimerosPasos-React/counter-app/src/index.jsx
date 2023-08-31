import React from "react";
<<<<<<< HEAD
import ReactDOM from "react-dom";

import "./styles.css";
import CounterApp from "./components/CounterApp";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CounterApp value={10}/>
=======
import ReactDOM from "react-dom/client";
import CounterApp from "./components/CounterApp";


import "./styles.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CounterApp value={20} />
    {/* <FirstApp title="Hola, Soy Vegeta" /> */}
>>>>>>> 7979ef35ce10924232c81123eb54382ea3c491d5
  </React.StrictMode>
);
