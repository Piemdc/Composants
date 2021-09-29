import fusee from './images/fusee.svg'


export default function Home() {

    return (
        <main>
            <section>
                <h1>Nom du site</h1>
                <div className="coming">
                    <h3>Ca arrive : </h3>
                    <p>EvenementTEST - <strong>Aujourd'hui</strong><img class="fusee" src={fusee} alt="#" /></p>
                    <p>EvenementTEST - <strong>4 jours</strong><img class="fusee" src={fusee} alt="#" /></p>
                    <a href="#"> Mes evenements</a>
                </div>
            </section>


        </main>
    )

}