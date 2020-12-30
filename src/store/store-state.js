const initialState = {
  defaults: {
    locale: "en_US",
    currency: {
      currencyName: "Euro",
      currencySymbol: "€",
      id: "EUR"
    }
  },
  countries: null,
  currencies: null,
  pinnedCurrencies: []
};
const storedState = localStorage.getItem("storeState");
const storeState = storedState ? Object.assign(initialState, JSON.parse(storedState)) : initialState;

export default storeState;