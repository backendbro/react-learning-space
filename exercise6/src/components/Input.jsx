function Input () {
    const content = (
        <div className="input-tab">
            <div className="inputs">
                <input type="text" name="first-part-joke" placeholder="First Part"/>
                <input type="text" name="second-part-joke" placeholder="Second Part"/>
            </div>

            <div className="btn">
                <button>
                    Get a new meme Image 
                    <i className="fa fa-image"></i>
                </button>
            </div>
        </div>
    )

    return content 
}

export default Input 