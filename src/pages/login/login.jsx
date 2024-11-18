import React from "react";
import './login.css'
import qrLogo from '../../assets/barcode-logo.svg'
import google from '../../assets/google.svg'

function Login() {
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
                        <a href="#">Daftar</a>
                    </div>
                    <div className="card-content">
                        <div className="card-input">
                            <input type="email" name="" id="" placeholder="Nomor HP atau Email" />
                        </div>
                        <div className="card-sample">
                            <p>Contoh: 0871819339182</p>
                        </div>
                    </div>
                    <div className="card-help">
                        <a href="#">Butuh Bantuan?</a>
                    </div>
                    <div className="card-button">
                        <button>
                            <span>Selanjutnya</span>
                        </button>
                    </div>
                    <div className="card-or">
                        <p>atau masuk dengan</p>
                    </div>
                    <div className="btn-signin-alt">
                        <button>
                            <img src={qrLogo}  />
                            <span>Scan Kode QR</span>
                        </button>
                    </div>
                    <div className="btn-signin-alt">
                        <button>
                            <img src={google}  />
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