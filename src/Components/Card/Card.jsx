import "./Card.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";
function Card(props) {
  return (
    <div className="card-container">
      <div className="card-image">
        <img src={props.image} alt={props.title} />
        <div className="fontContainer">
          <FontAwesomeIcon
            icon={faCirclePlay}
            className="fa-play-circle"
            onClick={() => props.onClick(props.id)}
          />
        </div>
      </div>
      <div className="card-content">
        <h2 className="card-title">{props.title}</h2>
        <h3 className="card-artist">{props.artist}</h3>
        <p className="card-description">{props.description}</p>
      </div>
    </div>
  );
}

export default Card;
