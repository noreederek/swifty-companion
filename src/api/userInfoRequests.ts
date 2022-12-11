import { getUserInfoEndpoint } from './config';
import { TokenExpiredError, UserDoesNotExistsError } from './types';


export const getUserInfo = (username: string, token : string) =>
    fetch(getUserInfoEndpoint + username.toLowerCase(), {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        }
    }).then(response => {
        if (!response.ok) {
            if (response.status === 401) {
                throw new TokenExpiredError("Unauthorized. Please checkout that your token is valid");
            }
            else if (response.status === 404) {
                throw new UserDoesNotExistsError("Can't find this username. Please checkout that username you search is valid");
            }
            else if (response.status === 429) {
                throw new Error("Too many requests! Please wait a little bit");
            }
            else if (response.status === 500) {
                throw new Error("Can't connect to 42 Intra API. Please wait till bocal fix it");
            }
            else {
                throw new Error("Unhandled Error. Status Code: " + response.status);
            }
        }
        return response.json()
    }).then(data => {
        return data;
    })