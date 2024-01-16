import SkillCard from "../skillcard/SkillCard";
import "./skills.css"

const Skills = () => {
    return ( 
        <>
        <div className="skillsFrame">
            <h2>SKILLS</h2>
            <div className="skills">
                <SkillCard
                title = {"HTML"}/>
                <SkillCard
                title = {"CSS"}/>
                <SkillCard
                title = {"Javascript"}/>
                <SkillCard
                title = {"React"}/>
                <SkillCard
                title = {"SASS"}/>
                <SkillCard
                title = {"Tailwind CSS"}/>
                <SkillCard
                title = {"Git"}/>
                <SkillCard
                title = {"UX/UI"}/>
                
            </div>
        </div>
        </>
     );
}
 
export default Skills;