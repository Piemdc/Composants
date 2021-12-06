
import styles from "./oneevent.css";

import React, { useEffect, useState } from "react";
import ModifyEvent from './ModifyEvent';
import Need from "./comp/Need";

export default function OneEvent(props) {

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [event, setEvent] = useState([]);
    const [isCreator, setIsCreator] = useState(false);
    const [modifyEvent, setModifyEvent] = useState(false)

    function changeModifyEvent() {
        setModifyEvent(!modifyEvent);
    }


    function changeCreator() {
        setIsCreator(!isCreator);
    }

    var url = document.location.href;
    url = url.replace(/\/$/, "");
    let event_id = url.substring(url.lastIndexOf("/") + 1);



    useEffect(() => {
        fetch(`https://piemdc.fr/api/event`, {
            method: 'POST',
            mode: 'cors',
            headers: {
                "access-control-allow-origin": "*",
                "Content-type": "application/json; charset=UTF-8"
            },
            body: JSON.stringify({ event: + event_id })

        })
            .then(response => response.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setEvent(result);
                },

                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [modifyEvent])


    event.map((e) => {
        if (e.creator_id == localStorage.getItem("user") && isCreator === false) {
            changeCreator();
        }
    })
    console.log(event);




    if (!modifyEvent) {
        return (

            <main className="oneEvent">



                {
                    event.map((e => {
                        return (
                            <>
                                <div className="oneEventTitle">
                                    <img src={"/images/events/" + e.icone + "v.png"} />
                                    <h1>{e.nom}</h1>
                                    <p>{e.adresse}</p>
                                </div>
                                {isCreator === true ? <button type='button' className="modifyButton greenbutton" onClick={() => { changeModifyEvent() }}>Modifier</button> : null}

                                < div className="oneEventDetails" >
                                    <p>{e.details}
                                    </p>
                                </div>
                            </>
                        )
                    }))

                }
                <Need id={event_id} statut={'read'} />





            </main >
        )
    }
    else {
        return (
            <main className="oneEvent">
                {
                    event.map((e) => {
                        return (
                            <ModifyEvent event={event} setEvent={setEvent}
                                modifyEvent={modifyEvent} setModifyEvent={setModifyEvent}
                            />
                        )
                    })
                }

            </main>
        )
    }
}


