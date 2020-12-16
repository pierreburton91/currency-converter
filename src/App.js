import React, { lazy, Suspense, useContext, useEffect, useState } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Spinner from "./components/Spinner";
import Navbar from "./components/Navbar";
import Background from "./components/Background";
import AppService from "./services/App-service";
import { StoreContext } from "./store/store-context";

const Dashboard = lazy(() => import("./views/Dashboard"));
function App() {
  // eslint-disable-next-line no-unused-vars
  const [state, dispatch] = useContext(StoreContext);
  const [shouldFetch, setShouldFetch] = useState(true);
  
  useEffect(() => {
    async function getCountries() {
      try {
        if (shouldFetch) {
          const _appService = new AppService(); 
          const { data } = await _appService.getCountries();
          dispatch({
            type: "setCountries",
            payload: Object.values(data.results)
          });
        }
      } catch (err) {
        console.error(err, err.response);
      }
    }
    getCountries();
    return () => setShouldFetch(false);
  }, [dispatch, shouldFetch]);

  return (
    <React.Fragment>
      <Background />
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Suspense fallback={<Spinner />}>
              <Dashboard />
            </Suspense>
          </Route>
          <Route path="*">
            <Redirect to="/" />
          </Route>
        </Switch>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;