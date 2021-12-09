import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import fusee from '../../images/fusee.svg'


const LoginBox = ({ connexion, setConnexion }) => {

    function changeConnexion() {

        setConnexion(!connexion);
    };



    const [loginError, setLoginError] = useState(false)

    const formik = useFormik({
        initialValues: {
            password: '',
            email: '',
        },
        validationSchema: Yup.object({
            email: Yup.string().email('Invalid email address').required('Required'),
            password: Yup.string()
                .min(8, 'Must be 8 characters or more')
                .required('Required'),
        }),
        onSubmit: values => {
            fetch(`http://localhost:8000/api/login`, {
                method: 'POST',
                mode: 'cors',
                headers: {
                    "access-control-allow-origin": "*",
                    "Content-type": "application/json; charset=UTF-8"
                },
                body: JSON.stringify(values)

            }).then((response) => response.json())
                .then((responseData) => {
                    console.log(responseData);
                    if (responseData['token']) {
                        localStorage.setItem('user', JSON.stringify(responseData['token']));
                        window.location.reload(false);
                    } else setLoginError(responseData)
                })
                .catch(error => {
                    console.log("something bad happened somewhere, rollback!");
                });
        }
    });

    return (
        <div className="login">
            <form onSubmit={formik.handleSubmit} >
                <h3>Connexion</h3>
                <input className="logInput" id="email"
                    placeholder="Adresse email..."
                    type="email" {...formik.getFieldProps('email')}
                />
                {formik.touched.email && formik.errors.email ? <div>{formik.errors.email}</div> : null}

                <input className="logInput" id="password"
                    placeholder="Mot de passe..."
                    type="password" {...formik.getFieldProps('password')}
                />
                {formik.touched.password && formik.errors.password ? <div>{formik.errors.password}</div> : null}
                {loginError ? <label className="formError">Nom d'utilisateur ou mot de passe incorrect</label> : null}
                <button className="logButton" type="submit"><img className="fusee" src={fusee} alt="#" /></button>
                <button className="logButton" type="button" id="regButton" onClick={changeConnexion} > Inscription</button>
            </form>
        </div >
    );

};
export default LoginBox;