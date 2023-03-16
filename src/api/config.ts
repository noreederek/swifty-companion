import { GenerateTokenRequestBodyType } from "./types";

// Set your UID and SECRET here before building app
export const UID : string = '';
export const SECRET : string = '';
export const GenerateTokenRequestBody : GenerateTokenRequestBodyType = {
    grant_type: "client_credentials",
    client_id : UID,
    client_secret : SECRET
}

// Request URIs
export const generateTokenEndpoint : string = "https://api.intra.42.fr/oauth/token";
export const checkTokenLivenessEndpoint : string = "https://api.intra.42.fr/oauth/token/info";
export const getUserInfoEndpoint : string = "https://api.intra.42.fr/v2/users/";