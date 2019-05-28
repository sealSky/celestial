import * as React from 'react'

import './form.scss'

import MobileCountriesSelect from '../../public/mobileCountriesSelect/MobileCountriesSelect'

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <form className="login-form">
        <div className="BindPhoneForm-login">
          <div className="SignFlow-account">
            <div className="MobileCountriesSelect">
              <MobileCountriesSelect />
            </div>
            <div className="SignFlowInput">
              <div className="Input-wrapper">
                <input className="Input" type="text" placeholder="输入手机号" />
              </div>
            </div>
          </div>
          <div className="SignFlow-code">
            <div className="SignFlowInput SignFlow-smsBindPhoneInput">
              <div className="Input-wrapper">
                <input className="Input" type="text" placeholder="输入验证码" />
              </div>
            </div>
            <div className="Button">发送验证码</div>
          </div>
        </div>
      </form>
    )
  }
}

export default LoginForm
