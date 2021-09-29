

export default function Articles(props) {

    return (

        <div className="article" style={{ background: `center url(${props.image})` }}>
            <div className="blur">
                <h2 className="articletitle">{props.titre}</h2>
                <p className="articletext">{props.texte}</p>
                <button className="greenbutton">Lire la suite</button>
            </div>
        </div>
    )

}