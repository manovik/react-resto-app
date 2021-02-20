import React from "react";
import { MainPage, CartPage } from "../pages";
import AppHeader from "../app-header";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

import Background from "./food-bg.jpg";

const App = () => {
  return (
    <div
      style={{ background: `url(${Background}) center center/cover no-repeat` }}
      className="app"
    >
      <Router>
        <AppHeader />
        <Switch>
          <Route exact path="/">
            <MainPage />
          </Route>
          <Route path="/cart">
            <CartPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
