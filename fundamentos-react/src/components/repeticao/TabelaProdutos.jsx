import React from "react";
import produtos from "../../data/produtos";
import "./TabelaProdutos.css";

export default function TabelaProdutos(props) {
  const tabela = produtos.map((produto, i) => {
    return (
      <tr className={i % 2 === 0 ? "Par" : ""} key={produto.id}>
        <td>{produto.id}</td>
        <td>{produto.nome}</td>
        <td>R$ {produto.preco}</td>
      </tr>
    );
  });

  return (
    <div className="TabelaProdutos">
      <table border={1}>
        <thead>
          <tr>
            <th>Id</th>
            <th>Nome</th>
            <th>Preço</th>
          </tr>
        </thead>
        <tbody>{tabela}</tbody>
      </table>
    </div>
  );
}
