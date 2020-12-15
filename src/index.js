import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';
import reportWebVitals from './reportWebVitals';
import { StoreContextProvider } from './store/store-context';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Spinner from "./components/Spinner";

const backgroundImage = window.matchMedia('(prefers-color-scheme: dark)').matches ? "https://source.unsplash.com/weekly/?abstract,dark" : "https://source.unsplash.com/weekly/?abstract,light";

function handleBgLoad(e) {
  e.target.classList.add("app-background__image--loaded");
}

const Dashboard = lazy(() => import("./views/Dashboard"));

ReactDOM.render(
  <React.StrictMode>
    <div className="app-background">
      <img src={backgroundImage} alt="Background" className="app-background__image" onLoad={handleBgLoad} />
      <div className="app-background__overlay"></div>
    </div>
    <BrowserRouter>
    <StoreContextProvider>
      <Switch>
        <Route exact path="/">
          <Suspense fallback={<Spinner />}>
            <Dashboard />
          </Suspense>
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
