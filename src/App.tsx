import React from 'react'
import './App.css'
import Layouts from './compoment/layout'
import { HashRouter, Switch, Route, Router } from 'react-router-dom'
import Watchlist from './page/Watchlist'
import Trending from './page/Trending'
function App() {
  return (
    <Layouts>
      <HashRouter>
        <Switch>
          <Route path="/" exact component={Watchlist}></Route>
          <Route path="/trending" exact component={Trending}></Route>
        </Switch>
      </HashRouter>
    </Layouts>
  )
}

export default App
