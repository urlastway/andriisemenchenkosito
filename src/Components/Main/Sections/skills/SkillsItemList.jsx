import React from "react";
import SkillsItem from './SkillsItem';
import './SkillsItemList.scss';

const SkillsItemList = ({posts}) => {
    return (
        <>
            {posts.map(post => 
                <SkillsItem post = {post} key={post.id}
            />)}
        </>
    );
};

export default SkillsItemList;