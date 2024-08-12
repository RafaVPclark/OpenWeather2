import axios from "axios";

const worldBank = axios.create({
       baseURL: "http://api.worldbank.org/v2/country/",
});

export default worldBank;

