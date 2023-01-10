import React from "react";
import Skills from './Sections/skills/Skills'
import Profilo from './Sections/Profilo/Profilo'
import './main.scss';
import Certificati from "./Sections/certificati/certificati";

function Main(){

    return(
        <main>
            <Profilo />
            <Skills />
            <Certificati />
        </main>
    )
}

export default Main;