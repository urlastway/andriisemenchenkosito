import React, { useState } from "react";
import './informations.scss';

export default function Informations(){

    const [information, setInformation] = useState([
        {id: 0, title: 'Informazioni:'}, 
        {id: 1, title: 'Le mie competenze:'}]);

    let [index, setIndex] = useState(0)

    function cambiaInformazioni(){

        setInterval(function () {
            if(index === 0){
                setIndex(index += 1);
            }
            else{
                setIndex(index -= 1);
            }

        }, 3000);
    }

    cambiaInformazioni()

    return(
        <div className="informations">
            <h1 className="title">{information[index].title}</h1>
            <h1>{information.text}</h1>
        </div>
    )
}