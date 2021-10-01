import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import fusee from '../../images/fusee.svg'


const RegisterBox = () => {
    const formik = useFormik({
        initialValues: {
            email: '',
            pseudo: '',
            nom: '',
            password: '',
            createdAt: new Date(),
        },
        validationSchema: Yup.object({
            email: Yup.string().email('Adresse mail invalide').required('* obligatoire'),
            pseudo: Yup.string().required('* obligatoire'),
            nom: Yup.string(),
            prenom: Yup.string(),
            password: Yup.string()

                .min(8, 'Mot de passe trop court (8 mini)')
                .required('* obligatoire'),
            passwordConf: Yup.string()
                .min(8, 'Mot de passe trop court (8 mini)')
                .oneOf([Yup.ref('password'), null], 'Les mots de passes doivent être identiques')
                .required('* obligatoire'),


        }),
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });
    return (
        <div className="login">
            <form onSubmit={formik.handleSubmit} >
                <h3>Inscription</h3>
                <input id="email" placeholder="Adresse email *" type="email" {...formik.getFieldProps('email')} />
                {formik.touched.email && formik.errors.email ? <label className="formError">{formik.errors.email}</label> : null}
                {formik.touched.email && !formik.errors.email ? <label className="formOK">Email valide</label> : null}

                <input id="pseudo" placeholder="Pseudo *" type="text" {...formik.getFieldProps('pseudo')} />
                {formik.touched.pseudo && formik.errors.pseudo ? <label className="formError">{formik.errors.pseudo}</label> : null}
                {formik.touched.pseudo && !formik.errors.pseudo ? <label className="formOK">Pseudo valide</label> : null}

                <input id="prenom" placeholder="Prenom" type="text" {...formik.getFieldProps('prenom')} />

                <input id="nom" placeholder="Nom" type="text" {...formik.getFieldProps('nom')} />

                <input id="password" placeholder="Mot de passe *" type="password" {...formik.getFieldProps('password')} />
                {formik.touched.password && formik.errors.password ? <label className="formError">{formik.errors.password}</label> : null}

                <input id="passwordConf" placeholder="Répetez le Mot de passe *" type="password" {...formik.getFieldProps('passwordConf')} />
                {formik.touched.passwordConf && formik.errors.passwordConf ? <label className="formError">{formik.errors.passwordConf}</label> : null}
                {formik.touched.passwordConf && !formik.errors.passwordConf ? <label className="formOK">Mot de passe OK !</label> : null}

                <input id="nom" placeholder="Nom" type="hidden" {...formik.getFieldProps('createdAt')} />


                <button type="submit"><img className="fusee" src={fusee} alt="#" /></button>
            </form>
        </div>
    );
};
export default RegisterBox;