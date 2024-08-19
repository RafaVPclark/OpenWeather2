import axios from "axios";

const worldBank = axios.create({
       baseURL: "https://api.worldbank.org/v2/country/",
});

export default worldBank;

