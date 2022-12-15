import React from "react";
import Primeiro from "./components/basicos/Primeiro";
import ComParametro from "./components/basicos/ComParametro";
import Fragmento from "./components/basicos/Fragmento";
import Aleatorio from "./components/basicos/Aleatorio";
import Card from "./components/layout/Card";

export default function App(props) {
  return (
    <div id="app">
      <h1>Fundamentos React</h1>
      <Card titulo="#04 - Desafio Aleatório">
        <Aleatorio min={1} max={60} />
      </Card>

      <Card titulo="#03 - Fragmento">
        <Fragmento />
      </Card>

      <Card titulo="#02 - Com Parametro">
        <ComParametro Titulo="Situação do Aluno" aluno="Eduardo" nota={9.3} />
      </Card>

      <Card titulo="#01 - Primeiro Componente">
        <Primeiro />
      </Card>
    </div>
  );
}
