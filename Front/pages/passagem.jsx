import { useEffect, useState } from "react";
import axios from "axios";
import Head from "next/head";
import moment from "moment";

const Passagem = () => {
  const [passagens, setPassagens] = useState([]);
 
  useEffect(() => {
    // Faça uma chamada GET para a API Spring Boot
    axios
      .get("https://localhost:7162/api/Passagem")
      .then((response) => {
        setPassagens(response.data);
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
      <h1>Lista de Passagens</h1>
      <table className="table container tabela">
        <thead>
          <tr>
            <th>Id</th>
            <th>Preço</th>
            <th>Horario</th>     
            <th>Data Ida</th>   
            <th>Data Volta</th>       
          </tr>
        </thead>
        {passagens.map((element) => (
          <tbody key={element.id}>
            <tr>
              <td>{element.id}</td>
              <td>{element.preco}</td>
              <td>{element.horario}</td>  
              <td>{moment(element.dataIda).format('DD/MM/yyyy')}</td>  
              <td>{moment(element.dataVolta).format('DD/MM/yyyy')}</td>                    
            </tr>
          </tbody>
        ))}
      </table>
    </div>
    </>
  );
};

export default Passagem;
