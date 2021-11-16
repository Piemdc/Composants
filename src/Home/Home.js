import fusee from '../images/fusee.svg'
import Articles from './articles/Articles';
import Cards from './cards/Cards'
import styles from "./home.css";

import React, { useEffect, useState } from "react";


export default function Home() {


    const cardsContent = [
        {
            image: '/images/soucoupe.svg',
            titre: 'Un titre de Card 1',
            texte: 'consectetur adipiscing elit. Etiam imperdiet arcu eu lectus venenatis congue. Phasellus ut justo eget orci consectetur lacinia eget sit amet libero. Pellentesque at eleifend neque, pretium porta dui. Cras consectetur dictum placerat. Aliquam elementum vestibulum scelerisque. Mauris volutpat elit cursus sagittis posuere.',
        },
        {
            image: '/images/comete.svg',
            titre: 'Un titre de Card 2',
            texte: 'consectetur adipiscing elit. Etiam imperdiet arcu eu lectus venenatis congue. Phasellus ut justo eget orci consectetur lacinia eget sit amet libero. Pellentesque at eleifend neque, pretium porta dui. Cras consectetur dictum placerat. Aliquam elementum vestibulum scelerisque. Mauris volutpat elit cursus sagittis posuere.',
        },
        {
            image: '/images/astronaute.svg',
            titre: 'Un titre de Card 3',
            texte: 'consectetur adipiscing elit. Etiam imperdiet arcu eu lectus venenatis congue. Phasellus ut justo eget orci consectetur lacinia eget sit amet libero. Pellentesque at eleifend neque, pretium porta dui. Cras consectetur dictum placerat. Aliquam elementum vestibulum scelerisque. Mauris volutpat elit cursus sagittis posuere.',
        }
    ];


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
            < main className="home" >
                <section class="rappel">
                    <h1>????</h1>
                    <div className="coming">
                        <h3>Ca arrive :</h3>
                        <p>Utilisateurs : </p>
                        <p>EvenementTEST - <strong>Aujourd'hui</strong><img class="fusee" src={fusee} alt="#" /></p>
                        <p>EvenementTEST - <strong>4 jours</strong><img class="fusee" src={fusee} alt="#" /></p>
                        <a href="#"> Mes evenements</a>
                    </div>
                </section>



                {
                    cardsContent.map((e) => {
                        return (<Cards image={e.image} titre={e.titre} texte={e.texte} />)
                    })
                }

                {
                    items.map((e) => {
                        return (<Articles image={e.image} titre={e.titre} texte={e.contenu} />)
                    })
                }

                <span className="more">Articles plus anciens<br></br>...</span>
            </main >
        )
    }
};