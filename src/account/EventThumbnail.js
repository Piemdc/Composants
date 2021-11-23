import styles from './thumbnail.css'
import { useHistory } from "react-router-dom";

export default function EventThumbnail(props) {
    const history = useHistory();

    function routeChange(path) {
        history.push({
            pathname: path

        })
    }
    return (

        <button type='button' className="thumbnail" onClick={() => { routeChange('/event/' + props.id) }}>
            <img className="eventIcone" src={"/images/events/" + props.icone + ".png"} alt="icône evenement" />
            <h2 className="eventTitle">{props.nom}</h2>
        </button>
    )

}