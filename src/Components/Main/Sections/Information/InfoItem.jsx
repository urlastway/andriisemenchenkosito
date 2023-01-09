import React, { useState } from "react";
import './infoItem.scss';


const InfoItem = (props) => {

    return(
        <div className="info-item">
            <img src={props.post.img}/>
            <p>{props.post.component}</p>
        </div>
    );
};

export default InfoItem;