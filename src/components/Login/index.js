import {Component} from 'react'
import {Redirect} from 'react-router-dom'

import Cookies from 'js-cookie'

import {
  LoginContainer,
  LoginItemContainer,
  InputContainer,
  LoginLogo,
  LoginButton,
  CheckBoxContainer,
  ErrorPara,
} from './styledComponent'

import WatchContext from '../../WatchContext'

class Login extends Component {
  state = {
    usernameInput: '',
    passwordInput: '',
    isChecked: false,
    errorMsg: '',

    showError: false,
  }

  onSubmitSuccess = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 30, path: '/'})
    history.replace('/')
    this.setState({showError: false})
  }

  onSubmitFailure = errorMsg => {
    this.setState({showError: true, errorMsg})
  }

  onSubmitForm = async event => {
    event.preventDefault()
    const {usernameInput, passwordInput} = this.state

    const userDetails = {username: usernameInput, password: passwordInput}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()

    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  onChangeUsername = event => {
    this.setState({usernameInput: event.target.value})
  }

  renderUsername = () => {
    const {usernameInput} = this.state
    const {isResults} = this.context
    return (
      <div>
        <label htmlFor="username">USERNAME</label>

        <InputContainer
          Color={isResults}
          placeholder="Username"
          id="username"
          onChange={this.onChangeUsername}
          type="text"
          value={usernameInput}
        />
      </div>
    )
  }

  onChangePassword = event => {
    this.setState({passwordInput: event.target.value})
  }

  renderPassword = () => {
    const {isResults} = this.context
    const {passwordInput, isChecked} = this.state
    return (
      <div>
        <label htmlFor="password">PASSWORD</label>

        <InputContainer
          Color={isResults}
          placeholder="Password"
          id="password"
          onChange={this.onChangePassword}
          type={isChecked ? 'text' : 'password'}
          value={passwordInput}
        />
      </div>
    )
  }

  onChangeShowPassword = () => {
    this.setState(prev => ({
      isChecked: !prev.isChecked,
    }))
  }

  renderShowPassword = () => {
    const {isResults} = this.context
    const {isChecked} = this.state
    return (
      <CheckBoxContainer Color={isResults}>
        <InputContainer
          Width
          value={isChecked}
          Color={isResults}
          type="checkbox"
          id="showPassword"
          onChange={this.onChangeShowPassword}
        />
        <label htmlFor="showPassword">Show Password</label>
      </CheckBoxContainer>
    )
  }

  render() {
    return (
      <WatchContext.Consumer>
        {value => {
          const {isResults} = value
          //  const {isResults} = this.context
          const {showError, errorMsg} = this.state
          const jwtToken = Cookies.get('jwt_token')
          if (jwtToken !== undefined) {
            return <Redirect to="/" />
          }

          const loginLogo = isResults
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
          const loginAlt = isResults ? 'website logo' : 'website logo'

          return (
            <>
              <LoginContainer bgColor={isResults}>
                <LoginItemContainer
                  Color={isResults}
                  bgColor={isResults}
                  onSubmit={this.onSubmitForm}
                >
                  <LoginLogo src={loginLogo} alt={loginAlt} />
                  <div>{this.renderUsername()}</div>
                  <div>{this.renderPassword()}</div>
                  <div>{this.renderShowPassword()}</div>
                  <div>
                    <p style={{fontWeight: '600', fontSize: '16px'}}>
                      Username: rahul,Password: rahul@2021
                    </p>
                  </div>
                  <LoginButton type="submit">Login</LoginButton>
                  {showError && (
                    <ErrorPara className="error-para">*{errorMsg}</ErrorPara>
                  )}
                </LoginItemContainer>
              </LoginContainer>
            </>
          )
        }}
      </WatchContext.Consumer>
    )
  }
}

Login.contextType = WatchContext

export default Login
