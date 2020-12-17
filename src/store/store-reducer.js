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
      }
    default:
      throw new Error("Unhandled action");
  }
}