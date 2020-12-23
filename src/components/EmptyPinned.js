import image from "../assets/empty-pinned.svg"

function EmptyPinned() {
  return (
    <div className="pinned__empty pinned-empty">
      <img className="pinned-empty__image" src={image} alt="Drawing of a girl next to a list of pinned items" />
      <p>There are no pinned currencies at the moment.</p>
      <p>Pin a currency using the "+" button.</p>
    </div>
  );
}

export default EmptyPinned;