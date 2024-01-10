import { useEffect, useState } from "react";
import axios from "axios";
import Head from "next/head";

const Client = () => {
  const [clients, setClients] = useState([]);
 
  useEffect(() => {
    // Faça uma chamada GET para a API Spring Boot
    axios
      .get("https://localhost:7162/api/Usuario")
      .then((response) => {
        setClients(response.data);
      })
      .catch((error) => {
        console.error("Erro ao buscar a lista de clientes:", error);
      });
  }, []);
 
  return (
    <>
    <Head>
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"/>
    </Head>
    <div>
      <h1>Lista de Clientes</h1>
      <table className="table container tabela">
        <thead>
          <tr>
            <th>Id</th>
            <th>Nome</th>
            <th>Email</th>
            <th>RG</th>
            <th>CPF</th>
            <th>Telefone</th>
          </tr>
        </thead>
        {clients.map((element) => (
          <tbody key={element.id}>
            <tr>
              <td>{element.id}</td>
              <td>{element.nome}</td>
              <td>{element.email}</td>        
              <td>{element.rg}</td>
              <td>{element.cpf}</td>
              <td>{element.telefone}</td>          
            </tr>
          </tbody>
        ))}
      </table>
    </div>
    </>
  );
};

export default Client;
