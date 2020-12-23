import { useContext } from "react";
import { StoreContext } from "../store/store-context";
import "../styles/Flags.scss";

function Flags({ currencyId }) {
  const [{ countries }] = useContext(StoreContext);
  const flags = countries.filter(country => country.currencyId === currencyId);
  const randomIndex = Math.floor(Math.random() * (flags.length + 1 - 3));
  const displayedFlags = flags.slice(randomIndex, randomIndex + 3).map(country => <img className="flags__flag" src={`https://flagcdn.com/${country.id.toLowerCase()}.svg`} alt={country.name} key={country.id} />);
  const hiddenFlagsLength = flags.length - 3;

  return (
    <div className="flags">
      {displayedFlags}
      <div className="flags__hidden">{flags[randomIndex].alpha3}{displayedFlags.length > 1 && ", " + flags[randomIndex + 1].alpha3 }{displayedFlags.length > 2 && ", " + flags[randomIndex + 2].alpha3 }{ hiddenFlagsLength && <div>+{hiddenFlagsLength}</div>}</div>
    </div>
  );
}

export default Flags;