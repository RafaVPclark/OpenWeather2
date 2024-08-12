import axios from "axios";

async function getAmadeusToken(){
    try{
        const response = await axios.post(
            "https://test.api.amadeus.com/v1/security/oauth2/token",
            new URLSearchParams({
                grant_type: "client_credentials",
                client_id: process.env.NEXT_PUBLIC_AMADEUS_API_KEY,
                client_secret: process.env.NEXT_PUBLIC_AMADEUS_API_SECRET,
            }),
            {
                headers:{
                    "Content-Type": "application/x-www-form-urlencoded",
                },
            }
        );
        const token = response.data.access_token;
        return token;
    }catch(error){
        console.log(error);
    }
}

const amadeusApi = axios.create({
    baseURL: "https://test.api.amadeus.com/v1",
});

export {getAmadeusToken, amadeusApi};