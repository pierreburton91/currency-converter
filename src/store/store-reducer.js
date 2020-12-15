export const reducer = (state, action) => {
  switch (action.type) {
    case "setCountries":
      return {
        countries: action.payload
      };
    default:
      throw new Error("Unhandled action");
  }
}