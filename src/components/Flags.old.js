import { useContext } from "react";
import { StoreContext } from "../store/store-context";
import "../styles/Flags.scss";

function Flags({ currencyId, hideData }) {
  const [{ countries }] = useContext(StoreContext);
  const flags = countries ? countries.filter(country => country.currencyId === currencyId) : [];
  const randomIndex = Math.floor(Math.random() * (flags.length + 1 - 3));
  const refIndex = randomIndex !== -1 ? randomIndex : 0;
  const displayedFlags = flags.slice(refIndex, refIndex + 3);
  const displayedFlagsImages = displayedFlags.length ? displayedFlags.map(country => <img className="flags__flag" src={`https://flagcdn.com/${country.id.toLowerCase()}.svg`} alt={country.name} key={country.id} />) : <div className="flags__flag--missing"></div>;
  const displayedFlagsData = displayedFlags.length ? displayedFlags.map(country => country.alpha3).toString().replace(/,/g, ", ") : "Missing data";
  const hiddenFlagsLength = flags.length - 3;

  return (
    <div className="flags">
      {displayedFlagsImages}
      { !hideData && <div className="flags__data">{displayedFlagsData}{ hiddenFlagsLength > 0 && <div>+{hiddenFlagsLength}</div>}</div>}
    </div>
  );
}

export default Flags;