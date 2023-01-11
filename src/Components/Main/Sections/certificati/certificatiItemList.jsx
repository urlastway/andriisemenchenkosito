import React from "react";
import CertificatiItem from "./certificatiItem";

const certificatiItemList = ({certifications}) => {
    return(
        <>
            {certifications.map(certification => 
                <CertificatiItem certification = {certification} key = {certification.id}/>  
            )}
        </>
    )
}

export default certificatiItemList;