
import './Card.css'

function Card(props) {
    return (
        <div className="Card">
            <img src={props.image} alr="image"/>
            <h3>{props.title}</h3>
            <p>{props.description}</p>
            <div><a href={props.link1}>{props.link1Name}</a></div>
            <div><a href={props.link2}>{props.link2Name}</a></div>
        </div>
    )


}

export default Card;

