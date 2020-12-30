import Flags from "./Flags";

function PinedItem(props) {
  return (
    <div className="pinned__item" tabIndex="0" role="button">
      <Flags currencyId={props.currency.id}>
        {props.currency.currencyName}
        <div>{props.currency.id}</div>
      </Flags>
      <div className="pinned__values pinned-values">
        <div className="pinned-values__value">{props.currency.currencySymbol} 2<span className="currency__decimal">.24</span></div>
        <div className="pinned-values__trend pinned-values__trend--up">+3%</div>
      </div>
    </div>
  );
}

export default PinedItem;