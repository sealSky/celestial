import * as React from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'

import Login from '../views/login/Login'

class RouteConfig extends React.Component {
  render() {
    return(
      <HashRouter>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/login" component={Login} />
        </Switch>
      </HashRouter>
    )
  }
}

export default RouteConfig;