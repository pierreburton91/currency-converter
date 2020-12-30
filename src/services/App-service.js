import axios from "axios";
import dayjs from "dayjs";

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

export function getConversion(from, to) {
  return axios.get(`${currencyConverterAPI}/convert`, {
    params: {
      apiKey: currencyConverterAPIKey,
      q: `${from}_${to}`,
      compact: "ultra"
    }
  })
}

export function getQuickHistory(from, to) {
  return axios.get(`${currencyConverterAPI}/convert`, {
    params: {
      apiKey: currencyConverterAPIKey,
      q: `${from}_${to}`,
      compact: "ultra",
      date: dayjs().subtract(1, "day").format("YYYY-MM-DD")
    }
  })
}