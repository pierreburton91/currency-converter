import { useContext } from 'react';
import { StoreContext } from '../store/store-context';
import "../styles/Dashboard.scss";

function Dashboard() {
  const [{ defaults, pinnedCurrencies, lastFetch, countries }] = useContext(StoreContext);
  const flags = countries.filter(country => country.currencyId === defaults.currency.id);
  const displayedFlags = flags.slice(0, 3).map(country => <div className="flags__flag-container" key={country.id}><img className="flag-container__flag" src={`https://www.countryflags.io/${country.id.toLowerCase()}/flat/64.png`} alt={country.name} /></div>);
  const hiddenFlags = flags.slice(3);
  return (
    <div className="page">
      <header className="base">
        <div className="base__top top">
          <h1 className="base__title">Dashboard</h1>
          <a href="/" className="top__link">
            {defaults.currency.id}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30">    <path d="M12,27h-2c-0.386,0-0.738-0.223-0.904-0.572s-0.115-0.762,0.13-1.062L17.708,15L9.226,4.633 c-0.245-0.299-0.295-0.712-0.13-1.062S9.614,3,10,3h2c0.3,0,0.584,0.135,0.774,0.367l9,11c0.301,0.369,0.301,0.898,0,1.267l-9,11 C12.584,26.865,12.3,27,12,27z"></path></svg>
          </a>
        </div>
        <div className="base__container">
          <div className="base__flags flags">
            {displayedFlags}
            {hiddenFlags.length && <div className="flags__hidden">+{hiddenFlags.length}</div>}
          </div>
          <div className="base__currency currency">{defaults.currency.currencySymbol} 1<span className="currency__decimal">.00</span></div>
        </div>
      </header>
    </div>
  );
}

export default Dashboard;
