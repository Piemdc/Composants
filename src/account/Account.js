import styles from "./account.css";
import React, { useEffect, useState } from "react";
import Contact from './Contact';
import Accountdetails from './Accountdetails';
import EventThumbnail from './EventThumbnail';
import { useHistory } from "react-router-dom";
import jwt_decode from 'jwt-decode'


export default function Account() {

    const [isLoaded, setIsLoaded] = useState(true);
    const [events, setEvents] = useState([]);
    const [error, setError] = useState(null);
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


    const history = useHistory();

    function routeChange(path) {
        history.replace(path)
    }

    let userdecode = jwt_decode(localStorage.getItem("user"));
    console.log(userdecode);

    useEffect(() => {
        fetch('http://localhost:8000/api/eventlist', {
            method: 'POST',
            mode: 'cors',
            headers: {
                "access-control-allow-origin": "*",
                "Content-type": "application/json"
            },
            body: JSON.stringify({ username: userdecode.username })
        })
            .then(response => response.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setEvents(result);
                },

                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [])


    if (error) {
        return <div>Erreur : {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Chargement...</div>;
    } else {

        return (

            <main className="account">

                <Accountdetails username={userdecode.username} />

                <div className="contactbox" >

                    <div>
                        <h4 className="accountname">CONTACTS</h4>
                        {
                            user.map((e) => {
                                return (<Contact avatar={e.avatar} pseudo={e.pseudo} texte={e.id} />)
                            })
                        }
                    </div>
                    <button type="submit" className="contactbutton">Ajouter un contact</button>
                </div>

                <div className="eventbox" >
                    <h4 className="accountname">EVENEMENTS</h4>
                    {
                        events.map((e) => {
                            return (<EventThumbnail id={e.id} icone={e.icone} nom={e.nom} />)
                        })
                    }
                    <button type='button' className="thumbnail" onClick={() => { routeChange('/createevent') }}>
                        <img className="eventIcone" src={"/images/events/plus.png"} alt="icône evenement" />
                        <h2 className="eventTitle">Créer</h2>
                    </button>

                </div>





            </main >
        )

    }
}