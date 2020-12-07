import React from 'react'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'

import DeskList from './components/DeskList/DeskList'
import ColumnList from './components/ColumnList/ColumnList'

import './App.css'

function App() {
  const routes = [
    {
      path: '/',
      exact: true,
      component: DeskList,
    },
    { path: '/list/:id', exact: true, component: ColumnList },
  ]

  return (
    <Router>
      <div className="App">
        <h1>My Trello App</h1>
        <Switch>
          {routes.map((route, index) => {
            return (
              <Route
                exact={route.exact}
                key={index}
                path={route.path}
                component={route.component}
              />
            )
          })}
        </Switch>
      </div>
    </Router>
  )
}

export default App
