
import React, { useEffect, useState } from "react";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import fusee from '../images/fusee.svg'
import EventThumbnail from '../account/EventThumbnail';
import { useHistory } from "react-router-dom";
import styles from './createevent.css'
import jwt_decode from 'jwt-decode'






export default function CreateEvent() {
    const history = useHistory();

    function routeChange(path) {
        history.replace(path)
    }

    const [isCreated, setCreated] = useState(null);
    const [newEvent, setnewEvent] = useState(['']);

    let userdecode = jwt_decode(localStorage.getItem("user"));

    const formik = useFormik({
        initialValues: {
            nom: '',
            adresse: '',
            icone: 1,
            date: new Date(),
            creator: userdecode.username,
            // start_time: "20:00",
            // end_time: "22:20"
        },
        validationSchema: Yup.object({
            nom: Yup.string().required(' obligatoire'),
            adresse: Yup.string().required(' obligatoire'),
            icone: Yup.number(),
            date: Yup.date().required().min(new Date, 'Date invalide'),
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
            fetch(`http://localhost:8000/api/newevent`, {
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
                        setCreated(true);
                        setnewEvent(result)
                    },

                    (error) => {
                        console.log(error)
                    }
                )


        }
    })
    console.log(newEvent)
    if (!isCreated) {
        return (
            <div className="createEvent" >
                <form onSubmit={formik.handleSubmit}>
                    <h3>Création d'évenement</h3>

                    <input className="createEventInput" id="nom" placeholder="Nom *" type="text" {...formik.getFieldProps('nom')} />

                    <input className="createEventInput" id="adresse" placeholder="Adresse *" type="text" {...formik.getFieldProps('adresse')} />
                    {formik.touched.adresse && formik.errors.adresse ? <label className="formError">{formik.errors.adresse}</label> : null}

                    <input className="createEventInput" id="date" type="date" {...formik.getFieldProps('date')} />
                    {formik.touched.date && formik.errors.date ? <label className="formError">{formik.errors.date}</label> : null}

                    <input className="createEventInput" id="creator" type="hidden" {...formik.getFieldProps('creator')} />

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
        );
    }
    else return (
        <div className="createEvent">
            <div className="eventCreateValidation">
                <h3 >Let's Go !</h3>
                {

                    <EventThumbnail id={newEvent.id} icone={newEvent.icone} nom={newEvent.nom} />
                }

            </div>
        </div>
    )

}