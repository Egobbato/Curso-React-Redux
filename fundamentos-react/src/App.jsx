import "./App.css";
import React from "react";
import Primeiro from "./components/basicos/Primeiro";
import ComParametro from "./components/basicos/ComParametro";
import Fragmento from "./components/basicos/Fragmento";
import Aleatorio from "./components/basicos/Aleatorio";
import Card from "./components/layout/Card";
import Familia from "./components/basicos/Familia";
import FamiliaMembro from "./components/basicos/FamiliaMembro";

export default function App(props) {
  return (
    <div className="App">
      <h1>Fundamentos React</h1>

      <div className="Cards">
        <Card
          titulo="#05 - Componentes com Filhos"
          color="#4153a3"
          border="#020848"
        >
          <Familia sobrenome="Miranda">
            <FamiliaMembro nome="Pedro" />
            <FamiliaMembro nome="Ana" />
            <FamiliaMembro nome="Gustavo" />
          </Familia>
        </Card>

        <Card titulo="#04 - Desafio Aleatório" color="#02482c" border="#02482c">
          <Aleatorio min={1} max={60} />
        </Card>

        <Card titulo="#03 - Fragmento" color="rgba(189, 56, 188, 0.8)">
          <Fragmento />
        </Card>

        <Card titulo="#02 - Com Parametro" color="rgba(189, 79, 56, 0.87)">
          <ComParametro Titulo="Situação do Aluno" aluno="Eduardo" nota={9.3} />
        </Card>

        <Card
          titulo="#01 - Primeiro Componente"
          color="rgba(56, 121, 189, 0.87)"
        >
          <Primeiro />
        </Card>
      </div>
    </div>
  );
}
