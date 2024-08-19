import styles from "@/styles/countriesInfos.module.css";
function CountriesInfos({ country }) {
    return (
        <section id="infoPais">

            <div className="row">
                <div className={`col-5 col-lg-3 mt-3 mx-auto ${styles['card-custom']} text-center`} >
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

                {/* Segundo card */}

                <div className={`col-5 col-lg-3 mt-3 mx-auto ${styles['card-custom']} text-center`} >
                    <div className="row">
                        <div className="col-10 mt-4 pt-3 mx-auto">
                            {/* <img className="img-fluid" width={60 + "px"} src={"/public/speech-svgrepo-com"}></img> */}
                            <svg
                                className="custom-svg"
                                width="30"
                                height="30"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="#446a4d"
                            >
                                <path d="M30 1.988h-28c-1.105 0-2 0.895-2 2v18.047c0 1.105 0.895 2 2 2h3.986v4.979c0 0.404 0.242 0.767 0.614 0.922 0.125 0.052 0.257 0.078 0.386 0.078 0.258 0 0.51-0.099 0.701-0.287l5.782-5.692h16.532c1.105 0 2-0.895 2-2v-18.047c0-1.104-0.895-2-2-2zM30 22.034h-17.351l-4.664 4.591v-4.591h-5.986v-18.047h28v18.047zM7 14.031h18c0.552 0 1-0.448 1-1s-0.448-1-1-1h-18c-0.552 0-1 0.448-1 1s0.448 1 1 1zM7 10.031h18c0.552 0 1-0.448 1-1s-0.448-1-1-1h-18c-0.552 0-1 0.448-1 1s0.448 1 1 1zM7 18.032h12c0.552 0 1-0.448 1-1s-0.448-1-1-1h-12c-0.552 0-1 0.448-1 1s0.448 1 1 1z" />
                            </svg>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12"> <p className={`${styles['content']} mt-3`}>Idioma</p></div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            {/* Conteúdo */}
                            <p className={`${styles["info-important"]}`}>
                                {Object.values(country.languages).join(", ")}
                            </p>
                        </div>
                    </div>

                </div>
                {/* Terceiro card */}
                <div className={`col-5 col-lg-3 mt-3 mx-auto ${styles['card-custom']} text-center`}>
                    <div className="row">
                        <div className="col-10 mt-4 pt-3 mx-auto">
                            {/* Referencie o SVG diretamente da pasta public */}
                            <img className="img-fluid" width="60px" src="/continent-svgrepo-com.svg" alt="Continente" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12"> <p className={`${styles['content']} mt-3`}>Continente(s)</p></div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            {/* Conteúdo */}
                            <p className={`${styles["info-important"]}`}>
                                {Object.values(country.continents)}
                            </p>
                        </div>
                    </div>
                </div>

            </div>
            <div className="row ">
                {/* Terceiro card */}
                <div className={`col-5 col-lg-3 mt-3 mx-auto ${styles['card-custom']} text-center`}>
                    <div className="row">
                        <div className="col-10 mt-4 pt-3 mx-auto">
                            {/* Referencie o SVG diretamente da pasta public */}
                            <img className="img-fluid" width="60px" src="/population.svg" alt="População" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12"> <p className={`${styles['content']} mt-3`}>População</p></div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            {/* Conteúdo */}
                            <p className={`${styles["info-important"]}`}>
                            {country.population}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default CountriesInfos;
