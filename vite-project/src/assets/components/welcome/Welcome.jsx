import Button from "../button/Button";
import "./welcome.css"



const Welcome = () => {
    return ( 
        <>
        <div className="welcome">
        <h1>Hi, I am <span>Daniel Cohen</span></h1>
        <h3>A Front End Developer.</h3>
        <article>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates libero aliquid nesciunt officia architecto voluptate eaque incidunt exercitationem voluptatibus dignissimos? </article>
        <Button
        title = {"resume"}
        />
        </div>
        </>
     );
}
 
export default Welcome;