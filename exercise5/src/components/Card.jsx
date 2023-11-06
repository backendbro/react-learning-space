
function Card (props) {
    
    const content = (

        <section className="card-container">

                    <div className="card"> 
            <div className="top-section">
                <span>SOLD OUT</span>
                <img src={props.img[0]} alt="A swimmer" />
            </div>

            <div className="bottom-section">
                <div className="location">
                    <span className="icon"> 
                    <i className="fa fa-star"></i>
                    <small> 
                        {props.rating[0]}
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
                <img src={props.img[1]} alt="A swimmer" />
            </div>

            <div className="bottom-section">
                <div className="location">
                    <span className="icon"> 
                    <i className="fa fa-star"></i>
                    <small> 
                    {props.rating[1]}
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
                <img src={props.img[2]} alt="A swimmer" />
            </div>

            <div className="bottom-section">
                <div className="location">
                    <span className="icon"> 
                    <i className="fa fa-star"></i>
                    <small> 
                    {props.rating[2 ]}
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