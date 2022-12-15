import React from "react";
import Primeiro from "./components/basicos/Primeiro";
import ComParametro from "./components/basicos/ComParametro";
import Fragmento from "./components/basicos/Fragmento";
import Aleatorio from "./components/basicos/Aleatorio";

export default function App(props) {
  return (
    <div id="app">
      <h1>Fundamentos React</h1>
      <Aleatorio min={1} max={60} />
      <Fragmento />
      <ComParametro Titulo="Situação do Aluno" aluno="Eduardo" nota={9.3} />
      <Primeiro />
    </div>
  );
}
