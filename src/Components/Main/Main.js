import React from "react";
import Informations from './Sections/Information/Informations'
import Profilo from './Sections/Portfolio/Profilo'
import './main.scss';

function Main(){

    return(
        <main>
            <div className="container">
                <Profilo />
                <Informations />
            </div>
        </main>
    )
}

export default Main;