import './account.css';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import avatar from '../images/alientest.png'


export default function Account() {

    const formik = useFormik({
        initialValues: {
            email: '',
            pseudo: '',
            nom: '',
            prenom: '',
            password: ''
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

            // http://127.0.0.1:8000/api/signup
        })
    })

    return (

        <main>
            <section className="account" >
                <div className="accountbox">
                    <h3>utilisateurTest</h3>
                    <img src={avatar} alt="Avatar Alien" />

                    <form onSubmit={formik.handleSubmit}>
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


                        <button type="submit"></button>

                    </form>

                    {/* <p>Nom d'utilisateur <strong>Aujourd'hui</strong><img class="fusee" src={fusee} alt="#" /></p>
                <p>EvenementTEST - <strong>4 jours</strong><img class="fusee" src={fusee} alt="#" /></p>
                <a href="#"> Mes evenements</a> */}
                </div>
            </section >
        </main>
    )
}