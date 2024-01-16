import "./carditem.css"

const CardItem = (props) => {
    return ( 
        <>
        <div className="cardFrame">
        <h3>{props.title}</h3>
        <article>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat, natus?</article>
        <h4>JavaScript React Sass</h4>
        </div>
        </>
     );
}
 
export default CardItem;