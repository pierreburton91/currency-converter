import axios from "axios";

const currencyConverterAPI = "https://free.currconv.com/api/v7";
const currencyConverterAPIKey = "2c7607e65f527ece3c99";

export function getCountries() {
  return axios.get(`${currencyConverterAPI}/countries`, {
    params: {
      apiKey: currencyConverterAPIKey
    }
  })
}

export function getCurrencies() {
  return axios.get(`${currencyConverterAPI}/currencies`, {
    params: {
      apiKey: currencyConverterAPIKey
    }
  })
}