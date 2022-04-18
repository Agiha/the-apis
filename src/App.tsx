import React from "react";
import "./App.css";
import Layouts from "./compoment/layout";
import { HashRouter, Switch, Route } from 'react-router-dom'
import Watchlist from "./page/Watchlist";
function App() {
  return (
    <Layouts>
      <HashRouter>
        <Switch>
          <Route path="/" exact component={Watchlist}></Route>
        </Switch>
      </HashRouter>
    </Layouts>
  );
}

export default App;
