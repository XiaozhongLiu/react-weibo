import React, { Component } from 'react'
import { object as history } from 'prop-types'
import logo from '../asset/logo.svg'
import '../asset/style/com/Login.css'

class Login extends Component {

    constructor(props) {
        super(props)
        this.history = history
    }

    login() {
        this.props.history.push('/list/public')
        window.location.href = `${window.config.API_HOST}/weiboAuth`
    }

    render() {
        return (
            <div className="login">
                <img src={logo} className="login-logo" alt="logo" />
                <span>React Weibo</span>
                <button className="login-btn" onClick={this.login.bind(this)}>Login</button>
            </div>
        )
    }
}

export default Login