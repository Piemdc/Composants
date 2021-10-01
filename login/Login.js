import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import fusee from '../../images/fusee.svg'


const LoginBox = () => {
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: Yup.object({
            email: Yup.string().email('Adresse mail invalide').required('* Obligatoire'),
            password: Yup.string()

                .min(8, 'Mot de passe trop court (8 mini)')
                .required('* Obligatoire'),
        }),
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });
    return (
        <div className="login">
            <form onSubmit={formik.handleSubmit} >
                <h3>Connexion</h3>
                <input id="email" placeholder="Adresse email..." type="email" {...formik.getFieldProps('email')} />

                <input id="password" placeholder="Mot de passe..." type="password" {...formik.getFieldProps('password')} />

                <button type="submit"><img className="fusee" src={fusee} alt="#" /></button>
            </form>
        </div>
    );
};
export default LoginBox;