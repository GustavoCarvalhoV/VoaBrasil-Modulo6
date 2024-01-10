import { useEffect, useState } from "react";
import axios from "axios";
import Head from "next/head";

const Destino = () => {
  const [destinos, setDestinos] = useState([]);
 
  useEffect(() => {
    // Faça uma chamada GET para a API Spring Boot
    axios
      .get("https://localhost:7162/api/Destino")
      .then((response) => {
        setDestinos(response.data);
      })
      .catch((error) => {
        console.error("Erro ao buscar a lista de destinos:", error);
      });
  }, []);
 
  return (
    <>
    <Head>
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"/>
    </Head>
    <div>
      <h1>Lista de Destinos</h1>
      <table className="table container tabela">
        <thead>
          <tr>
            <th>Id</th>
            <th>Cidade</th>
            <th>Estado</th>         
          </tr>
        </thead>
        {destinos.map((element) => (
          <tbody key={element.id}>
            <tr>
              <td>{element.id}</td>
              <td>{element.cidade}</td>
              <td>{element.estado}</td>                    
            </tr>
          </tbody>
        ))}
      </table>
    </div>
    </>
  );
};

export default Destino;
