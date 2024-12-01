import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './login.css'
import qrLogo from '../../assets/barcode-logo.svg'
import google from '../../assets/google.svg'

import InputSign from "../../component/inputSign/inputSign";

function Login() {
    const navigate = useNavigate();
    const [user, setUser] = useState('');

    //DataBase User
    const DBUser = {
        email: 'fhanif665@gmail.com',
        number: '089651688182'
    };

    const handlePageRegister = () => {
        navigate(`/Register`)
    }

    const [buttonDisable, setButtonDisable] = useState(true)
    const handleInput = (e) => {
        const value = e.target.value
        setUser(value)
        if (value.length >= 5) {
            setButtonDisable(false)
        } else {
            setButtonDisable(true)
        }
    }

    const handlePageHome = () => {
        if (buttonDisable == false) {
            if (user === DBUser.email) {
                console.log('ok')
            } else if (user === DBUser.number) {
                console.log('pp')
            } else (
                console.log('Email atau Number tidak ditemukan')
            )
        }
    }


    return (
        <div className="container">
            <header className="login-header">
                <a href="/">
                    <img src="https://images.tokopedia.net/img/oauth/background/tkp-logo.png" alt="Tokopedia" />
                </a>
            </header>

            <div className="login-content">
                <img className="login-bg" src="https://images.tokopedia.net/img/oauth/background/login-bg.png" />
                <div className="card-login">
                    <div className="card-label">
                        <span>Masuk ke Tokopedia</span>
                        <a href="" onClick={handlePageRegister}>Daftar</a>
                    </div>
                    <div className="card-content">
                        <InputSign onChange={handleInput} value={user} label="Nomor HP atau Email" placeholder="Nomor HP atau Email" />
                        <div className="card-sample">
                            <p>Contoh: 0871819339182</p>
                        </div>
                    </div>
                    <div className="card-help">
                        <a href="#">Butuh Bantuan?</a>
                    </div>
                    <div className="card-button">
                        <button className={`custom-button ${buttonDisable ? "true" : "false"}`} onClick={handlePageHome}>
                            <span>Selanjutnya</span>
                        </button>
                    </div>
                    <div className="card-or">
                        <p>atau masuk dengan</p>
                    </div>
                    <div className="btn-signin-alt">
                        <button>
                            <img src={qrLogo} />
                            <span>Scan Kode QR</span>
                        </button>
                    </div>
                    <div className="btn-signin-alt">
                        <button>
                            <img src={google} />
                            <span>Google</span>
                        </button>
                    </div>
                </div>
            </div>

            <footer>

            </footer>
        </div>
    )
}

export default Login;