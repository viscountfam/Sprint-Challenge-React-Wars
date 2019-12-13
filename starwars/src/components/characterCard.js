import React from "react";
import styled from "styled-components";
export default function CharacterCard(props) {

    const Charcontainer = styled.div`
        background-color: black;
        opacity: 0.5
        color:  #FFE81F
        border-radius: 20px;
        margin: 3% 0;
        font-family: orbitron;
    `
    const Name = styled.h2`
        font-weight: bold;
        font-size: 2.5rem;
        background: -webkit-linear-gradient(#FFE81F, #FFFFFF);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    `
    
return (

    <Charcontainer>
        <Name> {props.name}</Name>
        <p>GENDER: {props.gender}</p>
        <p>EYE COLOR:{props.eye_color}</p>
        <p>HEIGHT: {props.height}</p>
        <p>HAIR COLOR:{props.hair_color}</p>
    </Charcontainer>



)

}