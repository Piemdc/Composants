import styles from "./account.css";
import React, { useEffect, useState } from "react";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Contact from './Contact';
import Accountdetails from './Accountdetails';


export default function Account() {

    const [isLoaded, setIsLoaded] = useState(true);
    const user = [
        {
            avatar: '1.png',
            pseudo: 'Utilisateur1',
            id: '1',
        },
        {
            avatar: '1.png',
            pseudo: 'Utilisateur2',
            id: '2',
        },
        {
            avatar: '1.png',
            pseudo: 'Utilisateur3',
            id: '3',
        }
    ];
    let error = false;

    if (error) {
        return <div>Erreur : {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Chargement...</div>;
    } else {

        return (

            <main className="account">
                <section className="account" >
                    <Accountdetails />

                    <div className="contactbox" >
                        <h4 className="contactsname">CONTACTS</h4>
                        {
                            user.map((e) => {
                                return (<Contact avatar={e.avatar} pseudo={e.pseudo} texte={e.id} />)
                            })
                        }
                        <button type="submit" className="contactbutton">Ajouter un contact</button>


                    </div>
                </section >

            </main >
        )

    }
}