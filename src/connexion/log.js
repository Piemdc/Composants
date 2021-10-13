import fusee from '../images/fusee.svg'
import React, { useState } from 'react';
import LoginBox from './login/Login';
import RegisterBox from './register/Register'
import './log.css';


export default function Signinup() {
    const [connexion, setConnexion] = useState(true)

    if (connexion === true) {
        return (

            <div className="log">
                <LoginBox connexion={connexion} setConnexion={setConnexion} />
            </div>
        )
    }
    else {

        return (

            <div className="log">
                <RegisterBox connexion={connexion} setConnexion={setConnexion} />
            </div>
        )
    }
}