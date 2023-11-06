function Joke (props) {
    const content = (
        <div className="joke-container">
            <div className="joke">
                <h2> <span>Joke:</span> {props.joke ? props.joke  : "No joke bro"}</h2>
                <p>
                    <span>Punchline: </span>
                    {props.punchline }
                </p>
            </div>
        </div>
    )

    return content 
}

export default Joke 