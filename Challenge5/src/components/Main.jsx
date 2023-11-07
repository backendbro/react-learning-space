import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationPinLock } from "@fortawesome/free-solid-svg-icons";

function Main (prop) {
    const content = (
        <div className="journal">
            <div className="left-section">
                <img src={prop.data.image} alt="Tourist Location"/>
            </div>

            <div className="right-section">
                <div className="location">
                <FontAwesomeIcon icon={faLocationPinLock} className="icon" />
                    <span>{prop.data.location}</span>
                    <a href="#">View on Google Maps</a>
                </div>

                <h2>{prop.data.place}</h2>

                <p className="date">{prop.data.date}</p>

                <p className="description">
                {prop.data.description}
                </p>
            </div>
        </div>
    )

    return content 
}

export default Main 
