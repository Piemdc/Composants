import React from "react";

function Contact(props) {

    function deleteContact() {
        let coucou = 'coucou';
    }

    return (


        <div className="contact">
            <img src={'/images/' + props.avatar} className="contactImg" alt="Icone de contact" />
            <h2 className="contactName">{props.pseudo}</h2>
            <button className="contactDelete" onClick={deleteContact}>X</button>
        </div>

    )
}
export default Contact;