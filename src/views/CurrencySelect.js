import { useContext } from "react";
import { StoreContext } from "../store/store-context";
import Flags from "../components/Flags";

function CurrencySelect() {
  const [{ currencies }] = useContext(StoreContext);
  const currenciesList = currencies ? currencies.map(currency => <div className="currency-select__item" key={currency.id}><Flags currencyId={currency.id} hideData /></div>) : <p className="currency-select__empty">No currency found</p>;
  return (
    <div className="currency-select">
      <h1 className="currency-select__title">Currencies</h1>
      { currenciesList }
      <div className="currency-select__bar"></div>
    </div>
  );
}

export default CurrencySelect;