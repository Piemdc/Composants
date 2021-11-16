// import './account.css';
import React, { useEffect, useState } from "react";
import { useFormik } from 'formik';
import * as Yup from 'yup';

export default function Accountdetails() {


    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    const [avatar, setAvatar] = useState([false])
    let changeAvatar = '';
    let modifierAvatar = '';

    function switchChangeAvatar() { setAvatar(!avatar); };


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
            avatar: items.avatar ? items.avatar : ""

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
    avatar ? changeAvatar = <img className="accountAvatar" src={'/images/' + items.avatar} alt='Avatar Alien' /> : changeAvatar = <select name="avatars" id='avatar' placeholder={items['avatar']} {...formik.getFieldProps('avatar')} />


    avatar ? modifierAvatar = <button className="avatarbutton" onClick={switchChangeAvatar}><img src="/images/SVG/avatarmodif.svg" alt="" /></button> : modifierAvatar = <button onClick={switchChangeAvatar}>valider</button>


    if (error) {
        return <div>Erreur : {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Chargement...</div>;
    } else {

        return (

            <div className="accountbox">
                <h3 className="accountname">{items.pseudo}</h3>
                <div className="avatarbox">
                    {changeAvatar}
                    <br />
                    {modifierAvatar}
                </div>
                <form className="detailsForm" onSubmit={formik.handleSubmit}>

                    <div className='labels'>
                        <label htmlFor="pseudo"><h4>Nom d'utilisateur :</h4></label> <br />
                        <label htmlFor="nom"><h4>Nom :</h4></label> <br />
                        <label htmlFor="prenom"><h4>Prenom :</h4></label> <br />
                        <label htmlFor="email"><h4>Adresse Mail :</h4></label> <br />
                        <label htmlFor="password"><h4>Mot de passe :</h4></label>
                    </div>

                    <div className="inputs">
                        <input id="pseudo" type="text" {...formik.getFieldProps('pseudo')} />
                        {formik.touched.pseudo && formik.errors.pseudo ? <label className="formError">{formik.errors.pseudo}</label> : null}
                        {formik.touched.pseudo && !formik.errors.pseudo ? <label className="formOK">Pseudo valide</label> : null}

                        <input id="nom" type="text" {...formik.getFieldProps('nom')} />

                        <input id="prenom" type="text" {...formik.getFieldProps('prenom')} />

                        <input id="email" type="email" {...formik.getFieldProps('email')} />
                        {formik.touched.email && formik.errors.email ? <label className="formError">{formik.errors.email}</label> : null}
                        {formik.touched.email && !formik.errors.email ? <label className="formOK">Email valide</label> : null}

                        <input id="password" type="password" {...formik.getFieldProps('password')} />
                        {formik.touched.password && formik.errors.password ? <label className="formError">{formik.errors.password}</label> : null}

                        {/* <input id="passwordConf" placeholder="Répetez le Mot de passe *" type="password" {...formik.getFieldProps('passwordConf')} />
                    {formik.touched.passwordConf && formik.errors.passwordConf ? <label className="formError">{formik.errors.passwordConf}</label> : null}
                    {formik.touched.passwordConf && !formik.errors.passwordConf ? <label className="formOK">Mot de passe OK !</label> : null} */}
                    </div>

                    <button type="submit" className="contactbutton">Modifier</button>

                </form>
            </div>
        )
    }
}