import React from "react";
import './certificati.scss';
import CertificatoBoolean from '../../../../img-certificati/diploma-boolean.png';
import GoogleCertificato from '../../../../img-certificati/google-certificato.png';
import CertificatiItemList from './certificatiItemList';


const Certificati = () => {

    const certifications = ([
        {id: 1, img: CertificatoBoolean, alt: 'Certificato Boolean', title: 'Certificato Boolean', text: 'Ho completato il corso di Boolean cove ho imparato le tecnologie dell sviluppo web'},
        {id: 2, img: GoogleCertificato, alt: 'Certificato Google Digital Trading', title: 'Certificato Google Digital Trading', text: 'E\' stata una bella aventura di fare il corso offerto da Google.'},
        {id: 3, img: GoogleCertificato, alt: 'Diploma Scuola Superiore', title: 'Diploma Scuola Superiore', text: 'IST. TECN. SETT.ECONOMICO INDIRIZZO " AMMINISTRAZIONE, FINANZA E MARKETING" ARTICOLAZIONE "SISTEMI INFORMATIVI AZIENDALI" '}
    ])

    return (
        <>
            <div className="certificati">
                <div className="container">
                    <div className="certificati-content">
                        <div className="blu"></div>
                        <div className="certificati">
                            <CertificatiItemList certifications={certifications}/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Certificati;