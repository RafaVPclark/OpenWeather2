import weatherApi from "@/services/openWeatherApi";
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import worldBank from "@/services/worldBank";
import BuscadorWeather from "@/components/BuscadorWeather";
import WorldBankComponent from "@/components/WorldBankComponent";
// import { headers } from "next/headers";
function Home() {
  const [input, setInput] = useState("");
  const [countryData, setCountryData] = useState(null);
  const [countryPib, setCountryPib] = useState(null);
 
  // Buscar a API do tempo
  async function handleSearchWeather() {
    try {
      const response = await weatherApi.get(`weather?q=${input}&appid=${process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY}&units=metric&lang=pt_br`);
      setCountryData(response.data);
      const countryCode = response.data.sys.country;
      // console.log(countryData);
      await getInfoFromBank(countryCode);
    } catch (error) {
      console.error("Erro ao encontrar o clima", error);
      alert("Erro ao encontrar o clima");
    }
  }
  // Recuperar o pib do país especificado
  async function getInfoFromBank(countryCode) {
    try {
      console.log(countryCode);
      const response = await worldBank.get(`${countryCode}/indicator/NY.GDP.MKTP.CD?format=json`);
      setCountryPib(response.data);
      // console.log(countryPib[1][0]);
    } catch (error) {
      console.log(error);
    }
  }
  function handleSearch() {
    console.log(input);
    handleSearchWeather();
  }

  return (
    <div className="container-fluid margin" id="home">
      <div className="row">
        <div className="col-6 mx-auto margin">
          <div className="row">
            <div className="col-6 mx-auto">
              <div className="input-group mb-3 mt-3">
                <input type="text" value={input} onChange={(event) => setInput(event.target.value)} className="form-control" placeholder="Inserir um país"></input>
                <button className="btn btn-outline-secondary" type="button" id="button-addon1" onClick={handleSearch}>Pesquisar</button>
              </div>
            </div>
          </div>
        </div>
        {/* div para a parte do tempo/clima */}
        {countryData? <div className="col-6 mx-auto margin">
          <BuscadorWeather country={countryData}></BuscadorWeather>
        </div>  
        : ""}
        <div className="row mx-auto">
          <div className="col-8 mx-auto margin">
              <h1>COL-8</h1>
          </div>
          {countryPib? 
            <div className="col-4 mx-auto"> 
                <WorldBankComponent infoCountry={countryPib[1][0]}></WorldBankComponent>
            </div>
          :""}
        </div>
      </div>
    
    </div>
  );
}

export default Home;
