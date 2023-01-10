import React, { useEffect, useRef, useState } from "react";
import { useInView } from 'react-intersection-observer';
import DiplomaBoolean from '../../../../img-profilo/diploma-boolean.png';
import GoogleCertificato from '../../../../img-profilo/google-certificato.png';
import MiaFoto from '../../../../img-profilo/mia-foto.jpg';
import './Profilo.scss';
import RazzoImg from '../../../../img-profilo/razzo.png';
import myProfilo from './myProfilo.module.scss';
import SpaceIMG from '../../../../img-profilo/space.jpg';


function Profilo(){

    const slider = ([
        {id: 1, title: 'Chi sono?', text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.', img: MiaFoto, alt: 'Foto Andrii Semenchenko'},

        {id: 2, title: 'Il mio percorso:', text: 'survived not only five centuries, but also the leap  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.', img: DiplomaBoolean, alt: 'Attestato Boolean Andrii Semenchenko'},

        {id: 2, title: 'Altre Informzazioni:', text: 'ore recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum survived not only five centuries, but also the leap  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.', img: GoogleCertificato, alt: 'Certificato Google Andrii Semenchenko'},
    ]);

    const profilo = 'Profilo:';
    const Razzo = ([{img: RazzoImg, alt: 'Razzo-immagine'}]);
    const Space = ([{img: SpaceIMG, alt: 'Spazio-immagine'}]);

    let [index, setIndex] = useState(0);
    const timeRef = useRef(null);

    const NextSlide = () => {
        setIndex(index + 1);
        if(index + 1 >= slider.length){
           setIndex(index = 0); 
        }
    }

    const PreSlide = () =>{
        setIndex(index - 1);
        if (index <= 0){
            setIndex(index = slider.length - 1)
        }
    }

    useEffect(() => {
        if(timeRef.current){
            clearTimeout(timeRef.current)
        }
        console.log('use effect')
        timeRef.current = setTimeout(() => {
            NextSlide()
        }, 10000)
        return () => clearTimeout(timeRef.current)
    })

    const { ref: roketRef, inView: RoketView} = useInView();

    return(
        <div className="container">
            <div className="profilo">
                <h1>{profilo}</h1>
                <div className="profilo-background">
                    <img src={Space[0].img} alt={Space[0].alt} />
                </div>
                <div className="profilo-content" ref={roketRef}>
                    <div className={`profilo-content-left ${RoketView ? myProfilo.animationSlider : ''}`}>
                        <div className="profilo-content-left-slides">
                            <h3 className='profilo-content-left-slides-title'>{slider[index].title}</h3>
                            <p className='profilo-content-left-slides-texts'>{slider[index].text}</p>
                        </div>
                        <div className="buttons">
                            <button className='buttons-PreSlide' onClick={PreSlide}><p>Indietro</p></button>
                            <button className='buttons-NextSlide' onClick={NextSlide}><p>Avanti</p></button>
                        </div>
                    </div>
                    <div className="profilo-content-right">
                        <img className={`${RoketView ? myProfilo.animation : ''}`} src={Razzo[0].img} alt={Razzo[0].alt} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profilo;