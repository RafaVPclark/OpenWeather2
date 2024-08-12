import styles from "@/styles/weather.module.css";
function BuscadorWeather({ country }) {
    return (
        <div>
            <h3>Clima em {country.name}</h3>
            <p>Temperatura: {country.main.temp} Cº </p>
            <p>Sensação térmica: {country.main.feels_like} Cº </p>
            <p>Condição: {country.weather[0].description}</p>
        </div>
    );
}

export default BuscadorWeather;
