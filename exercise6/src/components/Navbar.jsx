import TrollFace from "../images/TrollFace.png"

function Navbar () {
    const content = (
        <nav>
            <div className="left-section">
                <img src={TrollFace} alt="Troll Face Memes" />
                <h2>Meme Generator</h2>
            </div>
            <div className="right-section">
                <h2>React Course-Project 3</h2>
            </div>
        </nav>
    )

    return content 
}

export default Navbar 