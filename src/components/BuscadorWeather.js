import styles from "@/styles/weather.module.css";
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1); // Capitaliza a primeira letra
}
function BuscadorWeather({ country }) {
    const iconUrl = `https://openweathermap.org/img/wn/${country.weather[0].icon}@2x.png`;
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-6  ">
                    <h3 className="title">Clima em {country.name}</h3>

                </div>
                <div className="col-6 text-center ">
                    <img
                        src={iconUrl}
                        width="100px"
                        alt="icone-tempo"
                        className="img-fluid icone-tempo"
                    />
                </div>
            </div>
            <div className="row mt-5">
                <div className="col-12">
                    <div className="row">
                        <div className="col-4 mb-5 text-center">
                            <p className="content">Temp</p>
                            <div className={`mx-auto ${styles["card-custom"]} pt-4`}>
                                <span className="info-important"> {country.main.temp} Cº</span>
                            </div>
                        </div>
                        <div className="col-4 mb-5 text-center">
                            <p className="content">Sensação Térmica</p>
                            <div className={`mx-auto ${styles["card-custom"]} pt-4`}>
                                <span className="info-important">   {country.main.feels_like} Cº</span>
                            </div>
                        </div>
                        <div className="col-4 mb-5 text-center">
                            <p className="content">Condição</p>
                            <div className={`mx-auto ${styles["card-custom"]} pt-4`}>
                                <span className="info-important">  {capitalizeFirstLetter(country.weather[0].description)}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BuscadorWeather;
