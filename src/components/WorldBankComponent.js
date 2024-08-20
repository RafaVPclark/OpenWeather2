import { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from "@/styles/worldbank.module.css";
function WorldBankComponent({ infoCountry }) {

    useEffect(() => {
        import('bootstrap/dist/js/bootstrap.bundle.min');
    }, []);
    return (
        <div className="container-fluid mb-5 mt-5 text-center">
            <div className="row">
                <div className="col-10 mx-auto">

                    <div id="carousel" className={` p-5 carousel slide ${styles["carousel-custom"]}`}>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                            <p className='title'>Data: {infoCountry[0].date}</p>
                            <h4 className='content'>Produto interno Bruto (PIB): {infoCountry[0].value}</h4>
                            </div>
                            <div className="carousel-item">
                            <p className='title'>Data: {infoCountry[1].date}</p>
                            <h4 className='content'>Produto interno Bruto (PIB): {infoCountry[1].value}</h4>
                            </div>
                            <div className="carousel-item">
                            <p className='title'>Data: {infoCountry[2].date}</p>
                            <h4 className='content'>Produto interno Bruto (PIB): {infoCountry[2].value}</h4>
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carousel" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carousel" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WorldBankComponent;