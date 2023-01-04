import React from "react";
import InfoItem from './InfoItem';
import './InfoItemList.scss';

const InfoItemList = ({posts}) => {
    return (
        <>
            {posts.map(post => 
                <InfoItem post = {post} key={post.id}
            />)}
        </>
    );
};

export default InfoItemList;