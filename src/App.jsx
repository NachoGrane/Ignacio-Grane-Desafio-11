import { useState } from "react";
import "./App.css";
import Tarjeta from "./components/Tarjeta";

function App() {
  //const [count, setCount] = useState(0);

  return (
    <>
      <h1>Desafío 11</h1>
      <hr />
      <Tarjeta
        nombre={"Ignacio Grané"}
        profesion={"Programador"}
        foto={"imgs/img-example01.jpg"}
      />
    </>
  );
}

export default App;
