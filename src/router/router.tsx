import * as React from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'

import Hello from '../components/Hello'
import Login from '../views/login/Login'

class RouteConfig extends React.Component {
  render() {
    return(
      <HashRouter>
        <Switch>
          <Route exact path="/" component={Hello} />
          <Route exact path="/login" component={Login} />
        </Switch>
      </HashRouter>
    )
  }
}

export default RouteConfig;