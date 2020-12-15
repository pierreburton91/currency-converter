import { createContext, useReducer } from "react";
import { reducer } from "./store-reducer";
import { storeState } from "./store-state";

export const StoreContext = createContext();

export const StoreContextProvider = props => {
  const [state, dispatch] = useReducer(reducer, storeState);

  return (
    <StoreContext.Provider value={[state, dispatch]}>{props.children}</StoreContext.Provider>
  );
}