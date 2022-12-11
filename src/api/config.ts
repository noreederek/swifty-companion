import { GenerateTokenRequestBodyType } from "./types";

// Set your UID and SECRET here before building app
export const UID : string = 'e990e0ec0d0b2bfa2353322143b462f6b8f2fa570d9e7f84af986a0d235f1b46';
export const SECRET : string = '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';
export const GenerateTokenRequestBody : GenerateTokenRequestBodyType = {
    grant_type: "client_credentials",
    client_id : UID,
    client_secret : SECRET
}

// Request URIs
export const generateTokenEndpoint : string = "https://api.intra.42.fr/oauth/token";
export const checkTokenLivenessEndpoint : string = "https://api.intra.42.fr/oauth/token/info";
export const getUserInfoEndpoint : string = "https://api.intra.42.fr/v2/users/";