import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Primeiro from "./components/basicos/Primeiro";
import ComParametro from "./components/basicos/ComParametro";
import Fragmento from "./components/basicos/Fragmento";

const el = document.getElementById("root");

ReactDOM.render(
  <div>
    <Primeiro />
    <ComParametro Titulo="Situação do Aluno" aluno="Eduardo" nota={9.3} />
    <Fragmento />
  </div>,
  el
);
