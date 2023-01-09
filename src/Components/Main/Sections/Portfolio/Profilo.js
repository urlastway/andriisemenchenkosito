import React, { useEffect, useRef, useState } from "react";
import DiplomaBoolean from '../../../../img-profilo/diploma-boolean.png';
import GoogleCertificato from '../../../../img-profilo/google-certificato.png';
import MiaFoto from '../../../../img-profilo/mia-foto.jpg';
import './Profilo.scss';


function Profilo(){

    const slider = ([
        {id: 1, title: 'Chi sono?', text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.', img: MiaFoto, alt: 'Foto Andrii Semenchenko'},

        {id: 2, title: 'Il mio percorso:', text: 'survived not only five centuries, but also the leap  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.', img: DiplomaBoolean, alt: 'Attestato Boolean Andrii Semenchenko'},

        {id: 2, title: 'Altre Informzazioni:', text: 'ore recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum survived not only five centuries, but also the leap  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.', img: GoogleCertificato, alt: 'Certificato Google Andrii Semenchenko'},
    ])
    let [index, setIndex] = useState(0);
    const timeRef = useRef(null);

    // useEffect(() => {
    //     setTimeout(() => {
    //         setIndex(index => index + 1);

    //         if((index + 1) >= slider.length){
    //             setIndex(index => index = 0);
    //         }                
    //     console.log(index);
    //     }, 3000)
    // })

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


    return(
        <div className="profilo">
            <div className="profilo-content">
                <h3 className='title'>{slider[index].title}</h3>
                <div className="profilo-content-main">
                    <img src={slider[index].img} alt={slider[index].alt}/>
                    <p>{slider[index].text}</p>
                </div>
                <div className="profilo-content-buttons">
                    <button onClick={PreSlide}>indietro</button>
                    <button onClick={NextSlide}>avanti</button>
                </div>
            </div>
        </div>
    );
}

export default Profilo;