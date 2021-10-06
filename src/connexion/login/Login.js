import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import './Login.css';
import fusee from '../../images/fusee.svg'


const LoginBox = () => {
    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
        },
        validationSchema: Yup.object({
            email: Yup.string().email('Invalid email address').required('Required'),
            password: Yup.string()

                .min(8, 'Must be 8 characters or more')
                .required('Required'),
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
                {formik.touched.email && formik.errors.email ? <div>{formik.errors.email}</div> : null}

                <input id="password" placeholder="Mot de passe..." type="text" {...formik.getFieldProps('password')} />
                {formik.touched.password && formik.errors.password ? <div>{formik.errors.password}</div> : null}

                <button type="submit"><img className="fusee" src={fusee} alt="#" /></button>
            </form>
        </div>
    );
};
export default LoginBox;