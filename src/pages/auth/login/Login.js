import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Login.css';

import Nav from '../../../components/auth/Nav';
import ButtonPrimary from '../../../components/buttons/ButtonPrimary';
import InputForm from '../../../components/form/InputForm';

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }

        this.changeLogin = this.changeLogin.bind(this);
        this.login = this.login.bind(this);
    }

    changeLogin(prop, val) {
        this.setState({
            [prop]: val
        });
    }

    login(e) {
        e && e.preventDefault();
        const { username, password } = this.state;
        console.log(username, password);
    }

    render() {
        const { username, password } = this.state;

        return (
            <div className="Login">
                <Nav></Nav>
                <div className="login-form-wrap">
                    <form onSubmit={e => this.login(e)} className="login-form">
                        <div className="title">Giriş</div>
                        <div className="form-wrap">
                            <InputForm
                                tabIndex={1}
                                value={username}
                                onChange={(val) => this.changeLogin('username', val)}
                                label="Kullanıcı adı"
                                placeholder="Cuneyt Alsu"/>
                            <InputForm
                                tabIndex={2}
                                value={password}
                                onChange={(val) => this.changeLogin('password', val)}
                                label="Şifre"
                                type="password"
                                placeholder="***********"/>
                        </div>
                        <div className="forgot">
                            şifremi unuttum?
                        </div>
                        <div className="login-btn">
                            <ButtonPrimary handleClick={this.login}>Giriş</ButtonPrimary>
                        </div>
                        <div className="goto-register">
                            Yeni hesap aç
                            <Link to="/register">Kayıd ol</Link>
                        </div>
                    </form>

                </div>
            </div>
        );
    }
}
