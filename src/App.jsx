import { useState } from "react";
import "./App.css";
import Tarjeta from "./components/Tarjeta";
import Alerta from "./components/Alerta";
import Contador from "./components/Contador";
import Formulario from "./components/Formulario";

function App() {
  //const [count, setCount] = useState(0);

  return (
    <>
      <h1>Desafío 11</h1>
      <hr />
      <h2>Ejercicio 01</h2>
      <hr />
      <Tarjeta
        nombre={"Ignacio Grané"}
        profesion={"Programador"}
        foto={"imgs/img-example01.jpg"}
      />

      <h2 className="mt-5">Ejercicio 02</h2>
      <hr />
      <Alerta alertaTipo={"success"}>Esto es una alerta de tipo success</Alerta>
      <Alerta alertaTipo={"danger"}>Esto es una alerta de tipo danger</Alerta>
      <Alerta alertaTipo={"warning"}>Esto es una alerta de tipo warning</Alerta>
      <h2 className="mt-5">Ejercicio 03</h2>
      <hr />
      <Contador />
      <h2 className="mt-5">Ejercicio 04</h2>
      <hr />
      <Formulario />
    </>
  );
}

export default App;
