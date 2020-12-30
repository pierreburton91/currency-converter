import { Fragment, lazy, Suspense, useContext, useEffect, useState } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Spinner from "./components/Spinner";
import Navbar from "./components/Navbar";
// import Background from "./components/Background";
import { getCountries, getCurrencies } from "./services/App-service";
import { StoreContext } from "./store/store-context";
// import useDeepCompareEffect from 'use-deep-compare-effect'

const Dashboard = lazy(() => import("./views/Dashboard"));
const CurrencySelect = lazy(() => import("./views/CurrencySelect"));
function App() {
  const [state, dispatch] = useContext(StoreContext);
  const [shouldFetchCountries, setShouldFetchCountries] = useState(!state.countries);
  const [shouldFetchCurrencies, setShouldFetchCurrencies] = useState(!state.currencies);
  
  useEffect(() => localStorage.setItem("storeState", JSON.stringify(state)), [state]);
  
  useEffect(() => {
    async function fetchCountries() {
      try {
        if (shouldFetchCountries) {
          const { data } = await getCountries();
          dispatch({
            type: "setCountries",
            payload: Object.values(data.results)
          });
        }
      } catch (err) {
        console.error(err, err.response);
      }
    }
    fetchCountries();
    return () => setShouldFetchCountries(false);
  }, [dispatch, shouldFetchCountries]);

  useEffect(() => {
    async function fetchCurrencies() {
      try {
        if (shouldFetchCurrencies) {
          const { data } = await getCurrencies();
          dispatch({
            type: "setCurrencies",
            payload: Object.values(data.results)
          });
        }
      } catch (err) {
        console.error(err, err.response);
      }
    }
    fetchCurrencies();
    return () => setShouldFetchCurrencies(false);
  }, [dispatch, shouldFetchCurrencies]);

  return (
    <Fragment>
      {/* <Background /> */}
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Suspense fallback={<Spinner />}>
              <Dashboard />
            </Suspense>
          </Route>
          <Route exact path="/currency-select">
            <Suspense fallback={<Spinner />}>
              <CurrencySelect />
            </Suspense>
          </Route>
          <Route path="*">
            <Redirect to="/" />
          </Route>
        </Switch>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;