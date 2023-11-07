import memeimg from "../images/memeimg.png"

function Image () {
    const content = (
        <div className="image-display">
            <img src={memeimg} alt="A generated meme"/>
        </div>
    )

    return content 
}

export default Image 