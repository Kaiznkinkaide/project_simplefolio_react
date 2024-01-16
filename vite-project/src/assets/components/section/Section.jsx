import CardItem from "../carditem/CardItem";
import "./section.css"

const Section = (props) => {
    return ( 
    <>
    <div className="frame">
    <h2>{props.title}</h2>
    </div>
    <div className="cardOutput">
        <CardItem
        title ={"Project 1"}
        />
        <CardItem
        title ={"Project 2"}
        />
        <CardItem
        title ={"Project 3"}
        />
    </div>
    
    </> );
}

export default Section;