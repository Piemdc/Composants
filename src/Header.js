import React, { useState } from "react";
import logo from './images/logoseul.svg';

function Header() {


    const [isActive, setActive] = useState(false);


    function mobileMenu(a) {

        setActive(!isActive)

    }
    return (
        <header className="violetalien">
            <img src={logo} className="logo"></img>

            <ul className={`navUl ${isActive ? "active" : ""}`}>
                <li className='navlink' onClick={mobileMenu}> <a href="#">Acceuil</a></li>
                <li className="navlink" onClick={mobileMenu}><a href="#">Compte</a></li>
                <li className="navlink" onClick={mobileMenu}><a href="#">Participations</a></li>
            </ul>

            <div className={`hamburger ${isActive ? "active" : ""}`} onClick={
                mobileMenu}>
                <svg className="bar" xmlns="http://www.w3.org/2000/svg" width="35.055" height="3.864" viewBox="0 0 35.055 3.864">
                    <path id="Tracé_11" data-name="Tracé 11" d="M135.788,225.678c-5.462.034-10.236-.3-15.7-.148a1.9,1.9,0,0,0-.993.248.9.9,0,0,0-.263.978l.124.758c.106.651.945,1.794,1.887,1.8,8.1.033,15.783.016,23.88-.048,1.6-.013,3.2-.027,4.787-.146.994-.075,1.982-.189,2.957-.344a2.168,2.168,0,0,0,1-.331.963.963,0,0,0,.306-.6,4.272,4.272,0,0,0,.071-1.129c-.046-.668-.835-1.205-1.795-1.224C146.574,225.38,141.306,225.644,135.788,225.678Zm0,0" transform="translate(-118.796 -225.464)" fill="#fff" />
                </svg>

                <svg className="bar" xmlns="http://www.w3.org/2000/svg" width="35.055" height="3.864" viewBox="0 0 35.055 3.864">
                    <path id="Tracé_11" data-name="Tracé 11" d="M135.788,225.678c-5.462.034-10.236-.3-15.7-.148a1.9,1.9,0,0,0-.993.248.9.9,0,0,0-.263.978l.124.758c.106.651.945,1.794,1.887,1.8,8.1.033,15.783.016,23.88-.048,1.6-.013,3.2-.027,4.787-.146.994-.075,1.982-.189,2.957-.344a2.168,2.168,0,0,0,1-.331.963.963,0,0,0,.306-.6,4.272,4.272,0,0,0,.071-1.129c-.046-.668-.835-1.205-1.795-1.224C146.574,225.38,141.306,225.644,135.788,225.678Zm0,0" transform="translate(-118.796 -225.464)" fill="#fff" />
                </svg>

                <svg className="bar" xmlns="http://www.w3.org/2000/svg" width="35.055" height="3.864" viewBox="0 0 35.055 3.864">
                    <path id="Tracé_11" data-name="Tracé 11" d="M135.788,225.678c-5.462.034-10.236-.3-15.7-.148a1.9,1.9,0,0,0-.993.248.9.9,0,0,0-.263.978l.124.758c.106.651.945,1.794,1.887,1.8,8.1.033,15.783.016,23.88-.048,1.6-.013,3.2-.027,4.787-.146.994-.075,1.982-.189,2.957-.344a2.168,2.168,0,0,0,1-.331.963.963,0,0,0,.306-.6,4.272,4.272,0,0,0,.071-1.129c-.046-.668-.835-1.205-1.795-1.224C146.574,225.38,141.306,225.644,135.788,225.678Zm0,0" transform="translate(-118.796 -225.464)" fill="#fff" />
                </svg>
            </div>

        </header>
    )
}



export default Header;
