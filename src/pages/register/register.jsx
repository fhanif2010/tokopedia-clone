import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './register.css'
import google from '../../assets/google.svg'
import InputSign from "../../component/inputSign/inputSign";

function Register() {
    const navigate = useNavigate();
    
    const handlePageLogin = () => {
        navigate(`/`);
    }

    const [buttonDisabled, setButtonDisabled] = useState(true)
    const handleChange = (e) => {
        if(e.target.value.length >= 5) {
           setButtonDisabled(false)
        }else{
            setButtonDisabled(true)
        }
    }

    const handlePage = () => {
        if( buttonDisabled == false){
            navigate('/home')
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
                <div className="card-register">
                    <span className="label">Daftar Sekarang</span>
                    <div className="card-label">
                        <p>Sudah Punya Akun Tokopedia?</p>
                        <a onClick={handlePageLogin}>Masuk</a>
                    </div>
                    <div className="btn-signin-alt">
                        <button>
                            <img src={google} />
                            <span>Google</span>
                        </button>
                    </div>
                    <div className="card-or">
                        <p>atau</p>
                    </div>
                    <div className="card-content">
                        <InputSign label="Nomor HP atau Email" placeholder="Nomor HP atau Email" onChange={handleChange}/>
                        <div className="card-sample">
                            <p>Contoh: 0871819339182</p>
                        </div>
                    </div>
                    <div className="card-button">
                        <button className={`custom-button ${buttonDisabled ? "true" : "false"}`} onClick={handlePage}>
                            <span>Selanjutnya</span>
                        </button>
                    </div>
                    <div className="card-sk">
                        <span>Dengan mendaftar, saya menyetujui</span>
                        <div>
                            <a className="action" href="">Syarat & Ketentuan</a>
                            <span>serta</span>
                            <a className="action" href="">Kebijakan Privasi Tokopedia</a>
                        </div>
                    </div>
                </div>
            </div>

            <footer>

            </footer>
        </div>
    )
}

export default Register;