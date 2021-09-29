import fusee from '../images/fusee.svg'
import Cards from './cards/Cards'
import './cards/cards.css'

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


    return (
        <main>
            <section class="rappel">
                <h1>Nom du site</h1>
                <div className="coming">
                    <h3>Ca arrive : </h3>
                    <p>EvenementTEST - <strong>Aujourd'hui</strong><img class="fusee" src={fusee} alt="#" /></p>
                    <p>EvenementTEST - <strong>4 jours</strong><img class="fusee" src={fusee} alt="#" /></p>
                    <a href="#"> Mes evenements</a>
                </div>
            </section>

            {cardsContent.map((e) => {
                return (<Cards image={e.image} titre={e.titre} texte={e.texte} />)
            })}



        </main>
    )

};