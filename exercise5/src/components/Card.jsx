import Swimmer from "../images/Swimmer.png"
import WeddingPhoto from "../images/wedding-photography.png"
import MountainBike from "../images/mountain-bike.png"

function Card (props) {
    const content = (

        <section className="card-container">
                    <div className="card"> 
            <div className="top-section">
                <span>SOLD OUT</span>
                <img src={props.img} alt="A swimmer" />
            </div>

            <div className="bottom-section">
                <div className="location">
                    <span className="icon"> 
                    <i className="fa fa-star"></i>
                    <small> 
                        50
                        </small> 
                    </span>

                    <span className="lighter-span">
                    (2)-USA 
                    </span>
                </div>

                <div className="description">
                <p>Live lessons with Micheal Zaferes</p>
                <p><span className="pricing">From $120</span>/person</p>
                </div>
            </div>


        </div>

        <div className="card"> 
            <div className="top-section">
                <span>SOLD OUT</span>
                <img src={WeddingPhoto} alt="A swimmer" />
            </div>

            <div className="bottom-section">
                <div className="location">
                    <span className="icon"> 
                    <i className="fa fa-star"></i>
                    <small> 
                        50
                        </small> 
                    </span>

                    <span className="lighter-span">
                    (2)-USA 
                    </span>
                </div>

                <div className="description">
                <p>Live lessons with Micheal Zaferes</p>
                <p><span className="pricing">From $120</span>/person</p>
                </div>
            </div>


        </div>


        <div className="card"> 
            <div className="top-section">
                <span>SOLD OUT</span>
                <img src={MountainBike} alt="A swimmer" />
            </div>

            <div className="bottom-section">
                <div className="location">
                    <span className="icon"> 
                    <i className="fa fa-star"></i>
                    <small> 
                        50
                        </small> 
                    </span>

                    <span className="lighter-span">
                    (2)-USA 
                    </span>
                </div>

                <div className="description">
                <p>Live lessons with Micheal Zaferes</p>
                <p><span className="pricing">From $120</span>/person</p>
                </div>
            </div>


        </div>
        </section>
    )

    return content 
}

export default Card     