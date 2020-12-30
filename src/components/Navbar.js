import { useContext, useState } from "react";
import { NavLink, Switch, Route, useHistory } from "react-router-dom";
import { StoreContext } from "../store/store-context";
import "../styles/Navbar.scss";
function Navbar() {
  const history = useHistory();
  const [, dispatch] = useContext(StoreContext);
  const [searchText, setSearchText] = useState("");

  function submitSearch(e) {
    e.preventDefault();
    dispatch({
      type: "setSearch",
      payload: searchText
    });
  }

  return (
      <Switch>
        <Route exact path="/currency-select">
          <nav className="nav nav--between">
            <button type="button" className="nav__link link" aria-label="Back" onClick={history.goBack}>
              <svg className="link__svg link__svg--no-margin" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30"><path d="M 19.980469 3.9902344 A 1.0001 1.0001 0 0 0 19.292969 4.2929688 L 9.2929688 14.292969 A 1.0001 1.0001 0 0 0 9.2929688 15.707031 L 19.292969 25.707031 A 1.0001 1.0001 0 1 0 20.707031 24.292969 L 11.414062 15 L 20.707031 5.7070312 A 1.0001 1.0001 0 0 0 19.980469 3.9902344 z"></path></svg>
            </button>
            <form onSubmit={submitSearch} noValidate className="nav__form">
              <input type="search" className="nav__input" onInput={e => setSearchText(e.target.value)} name="search" autoComplete="off" placeholder="Search" aria-label="Search" />
              <button type="submit" className="nav__link link" aria-label="Submit">
                <svg className="link__svg link__svg--no-margin" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30"><path d="M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z"></path></svg>
              </button>
            </form> 
          </nav>
        </Route>
        <Route path="*">
          <nav className="nav">
            <NavLink to="/" className="nav__link link" activeClassName="nav__link--active">
              <svg className="link__svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30">    <path d="M 24 4 A 2 2 0 0 0 22 6 A 2 2 0 0 0 22.115234 6.6621094 L 18.367188 11.035156 A 2 2 0 0 0 18 11 A 2 2 0 0 0 17.115234 11.207031 L 13.994141 9.1269531 A 2 2 0 0 0 14 9 A 2 2 0 0 0 12 7 A 2 2 0 0 0 10.005859 8.8789062 L 7.0996094 10.332031 A 2 2 0 0 0 6 10 A 2 2 0 0 0 4 12 A 2 2 0 0 0 6 14 A 2 2 0 0 0 7.9941406 12.121094 L 10.900391 10.667969 A 2 2 0 0 0 12 11 A 2 2 0 0 0 12.884766 10.792969 L 16.005859 12.873047 A 2 2 0 0 0 16 13 A 2 2 0 0 0 18 15 A 2 2 0 0 0 20 13 A 2 2 0 0 0 19.884766 12.337891 L 23.632812 7.9648438 A 2 2 0 0 0 24 8 A 2 2 0 0 0 26 6 A 2 2 0 0 0 24 4 z M 12 16 A 2 2 0 0 0 10 18 A 2 2 0 0 0 10.115234 18.662109 L 6.3671875 23.035156 A 2 2 0 0 0 6 23 A 2 2 0 0 0 4 25 A 2 2 0 0 0 6 27 A 2 2 0 0 0 8 25 A 2 2 0 0 0 7.8847656 24.337891 L 11.632812 19.964844 A 2 2 0 0 0 12 20 A 2 2 0 0 0 12.515625 19.929688 L 16.068359 23.482422 A 2 2 0 0 0 16 24 A 2 2 0 0 0 18 26 A 2 2 0 0 0 20 24 A 2 2 0 0 0 19.994141 23.873047 L 23.115234 21.792969 A 2 2 0 0 0 24 22 A 2 2 0 0 0 26 20 A 2 2 0 0 0 24 18 A 2 2 0 0 0 22 20 A 2 2 0 0 0 22.005859 20.126953 L 18.884766 22.207031 A 2 2 0 0 0 18 22 A 2 2 0 0 0 17.484375 22.070312 L 13.931641 18.517578 A 2 2 0 0 0 14 18 A 2 2 0 0 0 12 16 z"></path></svg>
              <span className="link__label">Dashboard</span>
            </NavLink>
          </nav>
        </Route>
      </Switch>
  );
}

export default Navbar;