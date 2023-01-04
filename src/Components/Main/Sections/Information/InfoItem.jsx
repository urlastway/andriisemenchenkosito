import React from "react";
import './infoItem.scss';

const InfoItem = (props) => {
    return(
        <div className="info-item">
            <p>{props.post.component}</p>
        </div>
    );
};

export default InfoItem;