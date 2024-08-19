import weatherApi from "@/services/openWeatherApi";
import restCountries from "@/services/restCountries";
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import worldBank from "@/services/worldBank";
import BuscadorWeather from "@/components/BuscadorWeather";
import WorldBankComponent from "@/components/WorldBankComponent";
import CountriesInfos from "@/components/CountriesInfos";

function Home() {
  const [input, setInput] = useState("");
  const [countryData, setCountryData] = useState(null);
  const [countryPib, setCountryPib] = useState(null);
  const [countryInfos, setCountryInfos] = useState(null);

  // Buscar a API do tempo - Primeira API utilizada
  
  async function handleSearchWeather() {
    try {
      const response = await weatherApi.get(`weather?q=${input}&appid=${process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY}&units=metric&lang=pt_br`);
      setCountryData(response.data);
      const countryCode = response.data.sys.country;
      await getInfoFromBank(countryCode);
      await getCountriesInfo(countryCode);
    } catch (error) {
      console.error("Erro ao encontrar o clima", error);
      alert("Erro ao encontrar o clima");
    }
  }
  // Buscar api do PIB do país - Segunda Api utilizada
  async function getInfoFromBank(countryCode) {
    try {
      // console.log(countryCode);
      const response = await worldBank.get(`${countryCode}/indicator/NY.GDP.MKTP.CD?format=json`);
      setCountryPib(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  // Buscar APi de outras informações sobre um país - Terceira API utilizada
  async function getCountriesInfo(countryCode) {
    try {
      const response = await restCountries.get(`alpha/${countryCode}`);
      setCountryInfos(response.data);
      // console.log(countryInfos[0]);
    } catch (error) {
      console.log(error);
    }
  }
  // Função que chama as outras APIs 
  function handleSearch() {
    setCountryData(null);
    setCountryPib(null);
    setCountryInfos(null);
    handleSearchWeather();
  }

  return (
    <section id="home" className="d-flex">
      <div className="container-fluid  align-self-center">
        <div className="row">
          <div className="col-10 col-md-4 mt-5 mx-auto card-esquerdo">
            <div className="row">
              <div className="col-6 mx-auto mt-5">
                <div className="input-group">
                  <input type="text" value={input} onChange={(event) => setInput(event.target.value)} className="form-control" placeholder="Inserir um país"></input>
                  <button className="btn btn-custom" type="button" id="button-addon1" onClick={handleSearch}>
                    <svg
                      className="custom-svg"
                      width="30"
                      height="30"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="#446a4d"
                    >
                      <path d="M21.71 20.29l-4.58-4.58A8.93 8.93 0 0 0 19 10a9 9 0 1 0-9 9 8.93 8.93 0 0 0 5.71-2.13l4.58 4.58a1 1 0 0 0 1.42-1.42zM10 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z" />
                    </svg>
                  </button>

                </div>
              </div>
            </div>
            <div className="row mx-auto mt-5 pt-4 pb-5">
              {countryData ?
                <div className="col-11 mb-4 mx-auto">
                  <BuscadorWeather country={countryData}></BuscadorWeather>
                </div>
              : ""}
            </div>
          </div>
          {/* div para a parte do tempo/clima */}
          {countryData? 
            <div className="col-10 col-md-4 mt-5 mx-auto card-direito mb-5">
              {/* Div para a parte das informações do país */}
              {countryInfos ?
                  <div className="col-12 mt-4 mx-auto">
                    <CountriesInfos country={countryInfos[0]}></CountriesInfos>
                  </div>
                  : ""}
                {/* Div para a parte do pib do país */}
                {countryPib ?
                  <div className="col-12 mt-4 mx-auto">
                    <WorldBankComponent infoCountry={countryPib[1]}></WorldBankComponent>
                  </div>
                  : ""}
            </div>
          :""}
        </div>
      </div>
    </section>
  );
}

export default Home;
