import "./skillcard.css"

const SkillCard = (props) => {
    return ( 
        <>
        <div className="skillcard">
            {props.title}
        </div>
        </>
     );
}
 
export default SkillCard;