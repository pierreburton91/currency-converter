export const reducer = (state, action) => {
  let pinnedCurrencies;
  switch (action.type) {
    case "setCountries":
      return {
        ...state,
        countries: action.payload
      };
    case "setCurrencies":
      return {
        ...state,
        currencies: action.payload
      };
    case "pinCurrency":
      state.pinnedCurrencies.push(action.payload);
      pinnedCurrencies = JSON.parse(JSON.stringify(state.pinnedCurrencies));
      return {
        ...state,
        pinnedCurrencies
      };
    case "removePinnedCurrency":
      pinnedCurrencies = JSON.parse(JSON.stringify(state.pinnedCurrencies.filter(item => item.id !== action.payload.id)));
      return {
        ...state,
        pinnedCurrencies
      };
    case "updatePinnedCurrency":
      pinnedCurrencies = JSON.parse(JSON.stringify(state.pinnedCurrencies.filter(item => item.id !== action.payload.id)));
      pinnedCurrencies = [...pinnedCurrencies, action.payload];
      return {
        ...state,
        pinnedCurrencies
      };
    case "setSearch":
      return {
        ...state,
        search: action.payload
      };
    default:
      throw new Error("Unhandled action");
  }
}