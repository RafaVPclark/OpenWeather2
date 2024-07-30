import { useState } from "react";
import api from './api/api';
function Home() {
  return (
    <div>
      <h1>Home</h1>
      <BuscadorCPF></BuscadorCPF>
    </div>
  );
}



function BuscadorCPF() {

  // Declaração dos states
  const [input, setInput] = useState('');
  const [cep, setCep] = useState({});

  async function handleSearch() {
    if (input === '') {
      alert("Preencha algum CEP");
      return;
    }
    try {
      const response = await api.get(`${input}/json`);
      console.log(response.data);
      setCep(response.data);
      setInput("");
    } catch {
      alert('Erro ao buscar o CEP');
      setInput("");
    }
  }

  return (
    <div>
      <h1>Buscador CPF</h1>
      <div>
        <input type="text" placeholder="Digite o CEP" value={input} onChange={(event) => setInput(event.target.value)}></input>
      </div>
      <button onClick={handleSearch}>
        Procurar
      </button>
      {Object.keys(cep).length > 0 && (
        <main className="main">
          <h2>CEP: {cep.cep}</h2>
          <span>Complemento: {cep.logradouro} </span>
          <span>{cep.bairro} </span>
          <span>{cep.localidade} - {cep.uf} </span>
        </main>
      )}
    </div>

  );
}


export default Home

