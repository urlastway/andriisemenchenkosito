import React, { useEffect, useState} from "react";
import './certificatiItem.scss';
import certificatiStyles1 from'./certificatiStyles1.module.scss';
import certificatiStyles2 from './certificatiStyles2.module.scss';
import certificatiStyles3 from './certificatiStyles3.module.scss';

const CertificatiItem = (props) => {

    let [stile, setStile] = useState('');

    function Styles1(){
        setStile(stile = certificatiStyles1);
    }

    function Styles2(){
        setStile(stile = certificatiStyles2);
    }

    function Styles3(){
        setStile(stile = certificatiStyles3);
    }

    useEffect(() => {
        if(props.certification.id === 1){
            Styles1()
        } 
        else if(props.certification.id === 2){
            Styles2()
        } 
        else if(props.certification.id === 3){
            Styles3()
        }
        console.log('hi')
    })

    return(
        <>
            <div className="certificatiItem">
                <div className="container">
                    <div className={stile.certificatiItemContent}>
                        <div className={stile.backgroundCertifications}>
                            <div className={stile.backgroundCertificationsContent}>
                                <h1 className={stile.title}>{props.certification.title}</h1>
                                <p className={stile.text}>{props.certification.text}</p>
                            </div>
                        </div>
                        <img src={props.certification.img} alt={props.certification.alt} className={stile.img}/>

                    </div>
                </div>

            </div>
        </>
    )
}

export default CertificatiItem;