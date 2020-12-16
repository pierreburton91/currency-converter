import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom';
import "normalize.css";
import './styles/index.scss';
import reportWebVitals from './reportWebVitals';
import { StoreContextProvider } from './store/store-context';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Spinner from "./components/Spinner";
import Navbar from "./components/Navbar";
import Background from "./components/Background";

const Dashboard = lazy(() => import("./views/Dashboard"));

ReactDOM.render(
  <React.StrictMode>
    <Background />
    <BrowserRouter>
      <StoreContextProvider>
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
      </StoreContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
