import * as React from 'react'

import './login.scss'

import LoginForm from './loginForm'

class Login extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        <header className="loginHeader">
          <p className="headerTitle">天空之上</p>
          <p className="headerDes">发现更多可信赖的解答</p>
        </header>
        <LoginForm />
      </div>
    )
  }
}

export default Login