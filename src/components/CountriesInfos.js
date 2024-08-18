import styles from "@/styles/countriesInfos.module.css";
function CountriesInfos({ country }) {
    return (
        <section id="infoPais">

            <div className="row">
                <div className={`col-3 mx-auto ${styles['card-custom']} text-center`} >
                    <div className="row">
                        <div className="col-10 mt-4 pt-3 mx-auto">
                            <img className="img-fluid" width={60 + "px"} src={country.flags.svg}></img>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12"> <p className={`${styles['content']} mt-3`}>Capital</p></div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            {/* Conteúdo */}
                            <p className={`${styles["info-important"]}`}>
                                {country.capital} - {country.region}
                            </p>
                        </div>
                    </div>

                </div>

            </div>
            {/* <div className="row margin">
                <div className="col-10">
                   Capital : {country.capital} - {country.region}
                </div>
                <div className="col-2">
                    <img className="img-fluid" width={60 + "px"} src={country.flags.svg}></img>
                </div>
            </div>
            <div className="row margin">
                <div className="col-12 mx-auto">
                    <h3>Lingua(s): {Object.values(country.languages).join(", ")}</h3>
                    <h5>Capital: {country.capital}</h5>
                    <h5>Continente(s): {Object.values(country.continents)}</h5>
                    <h5>População: {country.population}</h5>
                </div>
            </div> */}
        </section>
    );
}

export default CountriesInfos;
