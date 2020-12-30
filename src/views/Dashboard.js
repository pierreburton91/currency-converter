import { useContext } from 'react';
import { StoreContext } from '../store/store-context';
import Flags from "../components/Flags";
import "../styles/Dashboard.scss";
import PinnedItem from "../components/PinnedItem";
import EmptyPinned from "../components/EmptyPinned";
import { Link } from "react-router-dom";

function Dashboard() {
  const [{ defaults, pinnedCurrencies }] = useContext(StoreContext);
  const pinnedItems = pinnedCurrencies.length ? pinnedCurrencies.map(currency => <PinnedItem currency={currency} key={currency.id} />) : <EmptyPinned />;

  return (
    <div>
      <header className="base">
        <div className="base__top top">
          <h1 className="base__title">Dashboard</h1>
        </div>
        <div className="base__container">
          <Flags currencyId={defaults.currency.id}>
            {defaults.currency.currencyName}
            <div>{defaults.currency.id}</div>
          </Flags>
          <div className="base__currency currency">{defaults.currency.currencySymbol} 1<span className="currency__decimal">.00</span></div>
        </div>
      </header>
      <section className="pinned page">
        <h2 className="pinned__title">Pinned currencies</h2>
        { pinnedItems }
        <Link to={{ pathname: "/currency-select", state: { callBackActionName: "pinCurrency" }}} className="fab" aria-label="Add new item"><svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/></svg></Link>
      </section>
    </div>
  );
}

export default Dashboard;
