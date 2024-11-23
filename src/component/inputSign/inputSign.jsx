import React, { useState } from "react";
import './inputSign.css'

function InputSign({label, placeholder, onChange}) {

    const [inputReady,setInputReady] = useState(false)

    const handleFocus = () => {
        setInputReady(true)
    }

    const handleBlur = () => {
        setInputReady(false)
    }



    return (
        <div className="card-input">
            <div className={`input-type ${inputReady ? "true" : "false"}`}>
                <div className={`label ${inputReady ? "true" : "false"}`}>{label}</div>
                <input type="email" name="" id="" placeholder={inputReady ? '' : placeholder}  onFocus={handleFocus} onBlur={handleBlur} onChange={onChange}/>
            </div>
        </div>
    )
}

export default InputSign;