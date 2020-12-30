import { useContext, useEffect, useState } from "react";
import { StoreContext } from "../store/store-context";
import "../styles/Flags.scss";

function Flags({ currencyId, children }) {
  const [{ countries }] = useContext(StoreContext);
  const flags = countries ? countries.filter(country => country.currencyId === currencyId) : [];
  const initialIndex = flags.length > 1 ? Math.floor(Math.random() * (flags.length + 1)) : 0;
  const [index, setIndex] = useState(initialIndex);
  const flagsImages = flags.length ? flags.map((country, i) => <img className={(i === index) ? "flags__flag flags__flag--show" : "flags__flag" } src={`https://flagcdn.com/${country.id.toLowerCase()}.svg`} alt={country.name} key={country.id} />) : <div className="flags__flag--missing"></div>;

  useEffect(() => {
    if (flags.length > 1) {
      const newIndex = (index + 1) === flags.length ? 0 : index + 1;
      setTimeout(() => setIndex(newIndex), 2400);
    }
  }, [index, flags.length]);

  return (
    <div className="flags">
      {flagsImages}
      {children && <div className="flags__data">{children}</div>}
    </div>
  );
}

export default Flags;