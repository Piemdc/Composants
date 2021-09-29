export default function Cards(props) {

    return (
        <div className="card">
            <img className="cardimg" src={props.image} alt={props.titre} />
            <h2 className="cardtitle">{props.titre}</h2>
            <p className="cardtext">{props.texte}</p>
        </div>
    )
}
