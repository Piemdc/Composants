import React, { useEffect, useState } from "react";


export default function Testapi() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('http://127.0.0.1:8000/api/article')
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



    if (error) {
        return <div>Erreur : {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Chargement...</div>;
    } else {
        return (
            <ul>
                {items.map(item => (
                    <li key={item.titre}>
                        {item.titre} {item.titre}
                    </li>
                ))}
            </ul>
        );
    }
}