import React, { useEffect, useState } from "react";
import InfoItemList from "./InfoItemList";
import './informations.scss';
import css from '../../../../img-skills/css.png';
import bootstrap from '../../../../img-skills/bootstrap.png';
import html from '../../../../img-skills/html.png';
import js from '../../../../img-skills/js.png';
import laravel from '../../../../img-skills/laravel.png';
import php from '../../../../img-skills/php.png';
import react from '../../../../img-skills/react.png';
import sass from '../../../../img-skills/sass.png';
import sql from '../../../../img-skills/sql.png';
import vue from '../../../../img-skills/vue.png';

export default function Informations(){

    const titleFronts = ([
        {id: 0, component: 'Html5', img: html},
        {id: 1, component: 'Css', img: css},
        {id: 2, component: 'Sass', img: sass},
        {id: 3, component: 'Javascript', img: js},
        {id: 4, component: 'Vue.js', img: vue},
        {id: 5, component: 'React.js', img: react},
        {id: 6, component: 'Bootstrap', img: bootstrap},
    ])

    const titleBacks = ([
        {id: 0, component: 'Php', img: php},
        {id: 1, component: 'SQL',  img: sql},
        {id: 2, component: 'Laravel', img: laravel},
    ])

    const information = ([
        {id: 0, title: 'Le mie competenze:'}, 
        {id: 1, title: 'Skills:'}]);

    const titleInformations = ([
            {id: 1, title: 'Front-End:'},
            {id: 2, title: 'Back-end:'}
    ]);

    let [index, setIndex] = useState(0);

    const NewIndex = () => {
        if(index === 0){
            setIndex(index += 1);
        }
        else{
            setIndex(index -= 1);
        }
    }

    useEffect(() => {
        setTimeout(function () {
            NewIndex()
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