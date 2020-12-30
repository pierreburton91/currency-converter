import { useContext, useEffect, useState } from "react";
import { StoreContext } from "../store/store-context";
import Flags from "../components/Flags";
import { useLocation } from "react-router-dom";
import "../styles/CurrencySelect.scss";

function CurrencySelect() {
  const [{ currencies }, dispatch] = useContext(StoreContext);
  const currenciesList = currencies ? currencies.map(currency => (
      <div onClick={() => select(currency)} tabIndex="0" role="button" className="currency-select__item currency-item" key={currency.id}>
        <Flags currencyId={currency.id}>
          {currency.currencyName}
          <div className="currency-item__name">{currency.id} {currency.currencySymbol && <span className="currency-item__symbol">- {currency.currencySymbol}</span>}</div>
        </Flags>
      </div>)
    )
    : <p className="currency-select__empty">No currency found</p>;
  const location = useLocation();
  const [state, setState] = useState(location.state);
  
  useEffect(() => {
    setState(location.state);
  }, [location]);

  function callBackRouting() {
    let callBackPath;
    if (state?.callBackPath) {
      callBackPath = state.callBackPath;
    } else {
      callBackPath = "/";
    }
    window.location.replace(callBackPath);
  }
  
  function select(payload) {
    dispatch({
      type: state.callBackActionName,
      payload
    });
    callBackRouting();
  }

  return (
    <div className="currency-select page">
      <h1 className="currency-select__title">Currencies</h1>
      { currenciesList }
    </div>
  );
}

export default CurrencySelect;