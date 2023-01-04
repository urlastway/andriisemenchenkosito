import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import InfoItemList from "./InfoItemList";
import './informations.scss';

export default function Informations(){

    const [titleFronts, setTitles] = useState([
        {id: 0, component: 'Html5'},
        {id: 1, component: 'Css'},
        {id: 2, component: 'Sass'},
        {id: 3, component: 'Javascript'},
        {id: 4, component: 'Vue.js'},
        {id: 5, component: 'react.js'},
    ])

    const [titleBacks, setBack] = useState([
        {id: 0, component: 'Php'},
        {id: 1, component: 'SQL'},
        {id: 2, component: 'Laravel'},
    ])

    const [information, setInformation] = useState([
        {id: 0, title: 'Le mie competenze:'}, 
        {id: 1, title: 'Skills:'}]);

    const [titleInformations, settitleInformations] = useState([
            {id: 1, title: 'Front-End:'},
            {id: 2, title: 'Back-end:'}
    ]);

    let [index, setIndex] = useState(0)

    useEffect(() => {

            setInterval(function () {
                if(index === 0){
                    setIndex(index += 1);
                }
                else{
                    setIndex(index -= 1);
                }
    
            }, 3000);

      });
    return(
        <div className="informations">
            <h1 className="title">{information[index].title}</h1>
            <div className="informations-items">
                <div className="informations-items-frontEnd">
                    <h2>{titleInformations[0].title}</h2>
                    <div className="InfoItemList">
                        <InfoItemList posts = {titleFronts}/>
                    </div>
                </div>
                <div className="informations-items-backEnd">
                    <h2>{titleInformations[1].title}</h2>
                    <div className="InfoItemList">
                        <InfoItemList posts = {titleBacks}/>
                    </div>
                </div>
            </div>
        </div>
    )
}