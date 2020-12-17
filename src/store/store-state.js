const initialState = {
  defaults: null,
  countries: null,
  currencies: null,
  pinnedCurrencies: null,
  lastFetch: null
};
const storedState = localStorage.getItem("storeState");
const storeState = storedState ? Object.assign(initialState, JSON.parse(storedState)) : initialState;

export default storeState;