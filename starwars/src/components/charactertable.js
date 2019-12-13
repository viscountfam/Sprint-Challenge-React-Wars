import React, {useState, useEffect} from "react";
import CharacterCard from "./characterCard";
import axios from "axios";

export default function CharacterTable() {
    const [people, setPeople] = useState ([]);


useEffect(() => {
    axios
        .get("https://swapi.co/api/people/")
        .then(response => {
            console.log(response);
            setPeople(response.data.results);
        })
        .catch(error => {
            console.log("data could not be retrieved", error);
        })
}, []);

    return (
        <div className="container">
            <div className="entry">
                {people.map((people, index) => {
                    return <CharacterCard key={index}
                     name={people.name} 
                     gender={people.gender}
                      eye_color={people.eye_color}
                       height={people.height}
                        hair_color={people.hair_color}/>
                })}
            </div>
        </div>
    )
}