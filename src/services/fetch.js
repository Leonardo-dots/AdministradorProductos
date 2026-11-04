import { CONFIG } from "../config/config";
import { HTTP_ERRORS } from "../data/error";

const { API_URL, API_URL_ID } = CONFIG

async function fetchAll(){
    const response = await fetch(API_URL);
    if(!response.ok){
        const error = HTTP_ERRORS[500]
        throw error
    }
    const data = await response.json();
    return data.products
}

async function fetchOneProduct(id, signal){
    const response = await fetch(`${API_URL_ID}${id}`, { signal: signal })
    if(!response.ok){
        const error = HTTP_ERRORS[500]
        throw error;
    }
    const data = await response.json();
    return data;
}

export { fetchOneProduct, fetchAll }