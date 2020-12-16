import { useContext } from 'react';
import { StoreContext } from '../store/store-context';

function Dashboard() {
  const [state, dispatch] = useContext(StoreContext);

  function setCountry() {
    const payload = state.countries.length ? ["toto", "test"] : ["foo", "bar"];
    dispatch({
      type: "setCountries",
      payload
    });
  }

  return (
    <div>
      <div>
        {state.countries.toString()}
      </div>
      <button type="button" onClick={setCountry}>Set country</button>
    </div>
  );
}

export default Dashboard;
