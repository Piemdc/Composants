import React, { useEffect, useState } from "react";
import styles from './need.css';

export default function Need(props) {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [need, setNeed] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:8000/api/need`, {
            method: 'POST',
            mode: 'cors',
            headers: {
                "trol-allow-origin": "*",
                "Content-type": "application/json; charset=UTF-8"
            },
            body: JSON.stringify({ event: + props.id })

        })
            .then(response => response.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setNeed(result);
                },

                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )


    }, []);


    return (
        <>

            <div className="needContainer">
                <div className="needTitle">
                    <p>▼</p>
                    <h2>STOCK</h2>
                    <p>▼</p>
                </div>

                <div className="needlist">


                    {
                        need.map((e => {



                            return (
                                <>
                                    <button className="need" >
                                        <p>{e.nom} {e.reste}/{e.quantite}</p>
                                        <div className="switch">+</div>
                                    </button>

                                </>
                            )
                        }))

                    }
                </div>
                <div className="needEnvolve">
                    <h3 className="needEnvolveTitle"></h3>
                </div>
            </div>
        </>

    )
}
