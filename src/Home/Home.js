import fusee from '../images/fusee.svg'
import Articles from './articles/Articles';
import Cards from './cards/Cards'
import './cards/cards.css'
import './articles/articles.css'

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

    const articleContent = [
        {
            image: '/images/marriage.jpg',
            titre: `Un titre d'article 1`,
            texte: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam imperdiet arcu eu lectus venenatis congue. Phasellus ut justo eget orci consectetur lacinia eget sit amet libero. Pellentesque at eleifend neque, pretium porta dui. Cras consectetur dictum placerat. Aliquam elementum vestibulum scelerisque. Mauris volutpat elit cursus sagittis posuere. Praesent tempor, nunc vitae maximus molestie, nisi nisl efficitur ligula, eget finibus magna arcu id risus. Nam vestibulum volutpat quam non gravida...`,
        },
        {
            image: '/images/balloons.jpg',
            titre: `Un titre d'article 2`,
            texte: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam imperdiet arcu eu lectus venenatis congue. Phasellus ut justo eget orci consectetur lacinia eget sit amet libero. Pellentesque at eleifend neque, pretium porta dui. Cras consectetur dictum placerat. Aliquam elementum vestibulum scelerisque. Mauris volutpat elit cursus sagittis posuere. Praesent tempor, nunc vitae maximus molestie, nisi nisl efficitur ligula, eget finibus magna arcu id risus. Nam vestibulum volutpat quam non gravida...',
        }

    ];



    return (
        <main>
            <section class="rappel">
                <h1>Courtcool</h1>
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

            {articleContent.map((e) => {
                return (<Articles image={e.image} titre={e.titre} texte={e.texte} />)
            })}

            <span className="more">Articles plus anciens<br></br>...</span>
        </main>
    )

};