import Button from "../button/Button";
import "./contact.css"

const Contact = () => {
    return ( 
        <>
        <div className="contactFrame">
        <h2>CONTACT</h2>
        <Button
        title = {"email me"} />
        <p className="footnote"> Created by Daniel Cohen</p>
        </div>
        </>
     );
}
 
export default Contact;