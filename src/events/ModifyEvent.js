import React, { useEffect, useState } from "react";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import fusee from '../images/fusee.svg'
import styles from './modifyevent.css'

export default function ModifyEvent({ event, setEvent, modifyEvent, setModifyEvent }) {


    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(true);
    const [items, setItems] = useState([]);
    const [icon, setIcon] = useState([false])
    let changeIcon = '';
    let modifyIcon = '';

    function switchChangeIcon() { setIcon(!icon); };


    let eventdetails = event[0]


    const formik = useFormik({

        initialValues: {
            nom: eventdetails['nom'],
            adresse: eventdetails['adresse'],
            icone: eventdetails['icone'],
            date: eventdetails['date'],
            details: eventdetails['details']
            // start_time: "20:00",
            // end_time: "22:20"
        },
        validationSchema: Yup.object({
            nom: Yup.string().required(' obligatoire'),
            adresse: Yup.string().required(' obligatoire'),
            icone: Yup.number(),
            date: Yup.date().required().min(new Date, 'Date invalide'),
            details: Yup.string().max(255),
            // start_time: Yup.string().test(
            //     "start_time_test",
            //     "Start time must be lower than end time",
            //     value => {
            //         console.log("hell", value, this);
            //         return false;
            //     }
            // ),
            // end_time: Yup.string()



        }),
        onSubmit: values => {

            setModifyEvent(false);
            fetch((`http://localhost:8000/api/modifyevent/` + eventdetails['id']), {
                method: 'POST',
                mode: 'cors',
                headers: {
                    "access-control-allow-origin": "*",
                    "Content-type": "application/json"
                },
                body: JSON.stringify(values)

            }).then(response => response.json())
                .then(
                    (result) => {
                        console.log(result)

                    },

                    (error) => {
                        console.log(error)
                    }
                )


        }
    })
    icon ? changeIcon = <img className="accountAvatar" src={'/images/' + items.icone} alt='Avatar Alien' /> : changeIcon = <select name="avatars" id='avatar' placeholder={items['icone']} {...formik.getFieldProps('avatar')} />


    icon ? modifyIcon = <button className="avatarbutton" onClick={switchChangeIcon}><img src="/images/SVG/avatarmodif.svg" alt="" /></button> : modifyIcon = <button onClick={switchChangeIcon}>valider</button>


    if (error) {
        return <div>Erreur : {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Chargement...</div>;
    } else {

        return (

            <div className="modifyEvent" >
                <form onSubmit={formik.handleSubmit}>
                    <h3>Modification de l'événement</h3>
                    <label htmlFor="nom">Nom</label>
                    <input className="modifyEventInput" id="nom" placeholder="Nom *" type="text" {...formik.getFieldProps('nom')} />

                    <label htmlFor="adresse">Adresse</label>
                    <input className="modifyEventInput" id="adresse" placeholder="Adresse *" type="text" {...formik.getFieldProps('adresse')} />
                    {formik.touched.adresse && formik.errors.adresse ? <label className="formError">{formik.errors.adresse}</label> : null}

                    <label htmlFor="details">Details</label>
                    <textarea className="modifyEventInput" id="details" placeholder="details" type="text" {...formik.getFieldProps('details')} rows="5" cols="33" />
                    {formik.touched.details && formik.errors.details ? <label className="formError">{formik.errors.details}</label> : null}

                    <label htmlFor="date">Date</label>
                    <input className="modifyEventInput" id="date" type="date" {...formik.getFieldProps('date')} />
                    {formik.touched.date && formik.errors.date ? <label className="formError">{formik.errors.date}</label> : null}

                    {/* <input type="time" placeholder="start_time" name="start_time" {...formik.getFieldProps('start_time')} />
            {formik.errors.start_time && formik.touched.start_time ? (
                <div>{formik.errors.start_time}</div>
            ) : null} */}

                    {/* <input type="time" placeholder="end_time" name="end_time" {...formik.getFieldProps('end_time')} />
            {formik.errors.end_time && formik.touched.end_time ? (
                <div>{formik.errors.end_time}</div>
            ) : null} */}

                    <button type='button' className="createEventInput createEventButton" value="1" >Définir un icône</button>



                    <button type="submit" className="logButton"><img className="fusee" src={fusee} alt="Button de creation" /></button>

                </form>
            </div >
        )
    }
}