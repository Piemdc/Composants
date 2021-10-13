import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import './Login.css';
import fusee from '../../images/fusee.svg'


const LoginBox = ({ connexion, setConnexion }) => {

    function changeConnexion() {

        setConnexion(!connexion);
    };



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

            }).then(response => response.json,)
                .catch(error => console.log(error))
                .then(responseJson => {
                    console.log(responseJson);
                })

        },
    });
    return (
        <div className="login">
            <form onSubmit={formik.handleSubmit} >
                <h3>Connexion</h3>
                <input id="email"
                    placeholder="Adresse email..."
                    type="email" {...formik.getFieldProps('email')}
                />
                {formik.touched.email && formik.errors.email ? <div>{formik.errors.email}</div> : null}

                <input id="password"
                    placeholder="Mot de passe..."
                    type="password" {...formik.getFieldProps('password')}
                />
                {formik.touched.password && formik.errors.password ? <div>{formik.errors.password}</div> : null}

                <button type="submit"><img className="fusee" src={fusee} alt="#" /></button>
                <button type="button" id="regButton" onClick={changeConnexion} > Inscription</button>
            </form>
        </div >
    );
};
export default LoginBox;