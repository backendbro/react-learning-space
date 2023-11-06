import HeroImage from "../images/Group.png"

function Hero () {
    const content = (
        <section className="hero">
            <img src={HeroImage} alt="" />
            <div className="bottom-section">
                <h1>Online Experiences</h1>
                <p>Join unique interactive activities 
                    led by one of a kind hosts all without leaving home
                </p>
            </div>
        </section>

    )

    return content 
}

export default Hero