import logo from './logo.svg';
import './App.scss';
import { useContext } from 'react';
import { StoreContext } from './store/store-context';

function App() {
  const [state, dispatch] = useContext(StoreContext);

  function setCountry() {
    const payload = state.countries.length ? ["toto", "test"] : ["foo", "bar"];
    dispatch({
      type: "setCountries",
      payload
    });
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {state.countries.toString()}
        </p>
        <button type="button" onClick={setCountry}>Set country</button>
      </header>
    </div>
  );
}

export default App;
