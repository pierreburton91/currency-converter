export const reducer = (state, action) => {
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
      const pinnedCurrencies = JSON.parse(JSON.stringify(state.pinnedCurrencies));
      return {
        ...state,
        pinnedCurrencies
      };
    default:
      throw new Error("Unhandled action");
  }
}