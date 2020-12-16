import axios from "axios";

export default class AppService {
  constructor() {
    this.currencyConverterAPI = "https://free.currconv.com/api/v7";
    this.currencyConverterAPIKey = "2c7607e65f527ece3c99"
  }
  getCountries() {
    return axios.get(`${this.currencyConverterAPI}/countries`, {
      params: {
        apiKey: this.currencyConverterAPIKey
      }
    })
  }
};