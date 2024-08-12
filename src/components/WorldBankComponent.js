function worldBankComponent({infoCountry}){
    console.log("Entrou na função");
    console.log(infoCountry);

    return (
        <div>
            <h3>País: {infoCountry.country.value}</h3>
            <p>Data: {infoCountry.date}</p>
            <h4>Produto interno Bruto (PIB): {infoCountry.value}</h4>
        </div>
    );
}

export default worldBankComponent;