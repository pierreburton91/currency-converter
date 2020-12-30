import Flags from "./Flags";
import useLongPress from "../hooks/useLongPress";
import { useContext } from "react";
import { StoreContext } from "../store/store-context";

function PinedItem({ currency }) {
  const [, dispatch] = useContext(StoreContext);
  const onLongPress = () => {
    if ("vibrate" in window.navigator) {
      window.navigator.vibrate(24);
    }
    dispatch({
      type: "removePinnedCurrency",
      payload: currency
    });
  };
  const onClick = () => {
    // Navigate to detail page
  }
  const longPressOptions = {
    shouldPreventDefault: true,
    delay: 1500
  };
  const longPressEvent = useLongPress(onLongPress, onClick, longPressOptions);

  const valueUnit = currency.currentValue ? currency.currentValue.toFixed(0) : "0";
  const valueDecimal = currency.currentValue ? `.${currency.currentValue.toFixed(2).split(".")[1]}` : ".00";
  const trendValue = currency.currentValue && currency.previousValue ? (((100 / currency.previousValue) * currency.currentValue) - 100).toFixed(2) : "0";
  const trendDirection = parseFloat(trendValue) >= 0;

  return (
    <div className="pinned__item" tabIndex="0" role="button" {...longPressEvent}>
      <Flags currencyId={currency.id}>
        {currency.currencyName}
        <div>{currency.id}</div>
      </Flags>
      <div className="pinned__values pinned-values">
        <div className="pinned-values__value">{currency.currencySymbol} {valueUnit}<span className="currency__decimal">{valueDecimal}</span></div>
        <div className={ trendDirection ? "pinned-values__trend pinned-values__trend--up" : "pinned-values__trend pinned-values__trend--down"}>{ trendDirection ? `+${trendValue}` : trendValue }%</div>
      </div>
    </div>
  );
}

export default PinedItem;