import './SkillsItem.scss';


const SkillsItem = (props) => {

    return(
        <div className="skills-item">
            <img src={props.post.img} alt={props.post.alt}/>
            <p>{props.post.component}</p>
        </div>
    );
};

export default SkillsItem;