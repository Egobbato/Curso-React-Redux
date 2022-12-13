import React from "react";

export default function ComParametro(props) {
  const status = props.nota >= 7 ? "Aprovado" : "Recuperação";

  return (
    <div>
      <h2>{props.Titulo}</h2>
      <h3>
        <strong>{props.aluno}</strong> tem nota {props.nota} e foi {status}
      </h3>
    </div>
  );
}
