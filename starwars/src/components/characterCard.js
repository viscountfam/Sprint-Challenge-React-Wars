import React from "react"

export default function CharacterCard(props) {

return (

    <div>
        <h2>{props.name}</h2>
        <p>{props.gender}</p>
        <p>{props.eye_color}</p>
        <p>{props.homeworld}</p>
        <p>{props.films}</p>
    </div>



)

}