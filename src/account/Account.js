import './account.css';
import React, { useEffect, useState } from "react";
import { useFormik } from 'formik';
import * as Yup from 'yup';


export default function Account() {


    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);


    useEffect(() => {
        fetch(`http://localhost:8000/api/account`, {
            method: 'POST',
            mode: 'cors',
            headers: {
                "access-control-allow-origin": "*",
                "Content-type": "application/json; charset=UTF-8"
            },
            body: localStorage.getItem("user")

        })
            .then(response => response.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setItems(result);
                },

                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [])

    const formik = useFormik({

        enableReinitialize: true,

        initialValues: {
            email: items.email ? items.email : "",
            pseudo: items.pseudo ? items.pseudo : "",
            nom: items.nom ? items.nom : "",
            prenom: items.prenom ? items.prenom : "",
            password: items.password ? items.password : "",
            passwordConf: items.password ? items.password : "",
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
            fetch((`http://localhost:8000/api/updateAccount/` + localStorage.getItem("user")), {
                method: 'POST',
                mode: 'cors',
                headers: {
                    "access-control-allow-origin": "*",
                    "Content-type": "application/json"
                },
                body: JSON.stringify(values)

            }).then(response => response.json,)
                .catch(error => console.log(error))
                .then(responseJson => {

                })

        }
    })

    if (error) {
        return <div>Erreur : {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Chargement...</div>;
    } else {

        return (

            <main>
                <section className="account" >
                    <div className="accountbox">
                        <h3>{items.pseudo}</h3>
                        <img src={'/images/' + items.avatar} alt="Avatar Alien" />

                        <form onSubmit={formik.handleSubmit}>
                            <input id="email" placeholder={items['email']} type="email" {...formik.getFieldProps('email')} />
                            {formik.touched.email && formik.errors.email ? <label className="formError">{formik.errors.email}</label> : null}
                            {formik.touched.email && !formik.errors.email ? <label className="formOK">Email valide</label> : null}

                            <input id="pseudo" placeholder={items['pseudo']} type="text" {...formik.getFieldProps('pseudo')} />
                            {formik.touched.pseudo && formik.errors.pseudo ? <label className="formError">{formik.errors.pseudo}</label> : null}
                            {formik.touched.pseudo && !formik.errors.pseudo ? <label className="formOK">Pseudo valide</label> : null}

                            <input id="prenom" placeholder={items['prenom']} type="text" {...formik.getFieldProps('prenom')} />

                            <input id="nom" value={items['nom']} placeholder={items['nom']} type="text" {...formik.getFieldProps('nom')} />

                            <input id="password" placeholder="Nouveau mot de passe *" type="password" {...formik.getFieldProps('password')} />
                            {formik.touched.password && formik.errors.password ? <label className="formError">{formik.errors.password}</label> : null}

                            <input id="passwordConf" placeholder="Répetez le Mot de passe *" type="password" {...formik.getFieldProps('passwordConf')} />
                            {formik.touched.passwordConf && formik.errors.passwordConf ? <label className="formError">{formik.errors.passwordConf}</label> : null}
                            {formik.touched.passwordConf && !formik.errors.passwordConf ? <label className="formOK">Mot de passe OK !</label> : null}


                            <button type="submit" className="greenbutton">envoyer</button>

                        </form>

                        {/* <p>Nom d'utilisateur <strong>Aujourd'hui</strong><img class="fusee" src={fusee} alt="#" /></p>
                <p>EvenementTEST - <strong>4 jours</strong><img class="fusee" src={fusee} alt="#" /></p>
                <a href="#"> Mes evenements</a> */}
                    </div>
                </section >
            </main>
        )

    }
}