import AsyncStorage from '@react-native-async-storage/async-storage';
import { generateTokenEndpoint, GenerateTokenRequestBody, checkTokenLivenessEndpoint } from './config';

export const saveNewTokenToStorage = () =>
    fetch(generateTokenEndpoint, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(GenerateTokenRequestBody),
    }).then(response => {
        if (!response.ok) {
            if (response.status === 401) {
                throw new Error("Unauthorized. Please checkout that your UID and SECRET are valid");
            }
            else if (response.status === 500) {
                throw new Error("Can't connect to 42 Intra API. Please wait till bocal fix it");
            }
            else {
                throw new Error("Unhandled Error");
            }
        }
        return response.json()
    }).then(data => {
        AsyncStorage.setItem('access_token', data.access_token);
        return data.access_token;
    })

export const getTokenFromStorage = () => {
    return AsyncStorage.getItem('access_token');
}

export const checkTokenLiveness = (token: string) =>
    fetch(checkTokenLivenessEndpoint, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        }
    }).then(response => {
        if (!response.ok) {
            return false
        }
        return true
    })
