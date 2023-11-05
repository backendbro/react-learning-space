function Header () {
    const content = (
        <div className="header">
            <div className="top-section">
                <img src="https://cdn.pixabay.com/photo/2023/10/27/17/07/woman-8345803_640.jpg"/>
            </div>

            <div className="bottom-section">
                
                <div className="name">
                <h2>Laura Smith</h2>
                <p>Frontend Developer</p>
                </div>

                    <p className="place-of-work">Works at Google</p>

                <div className="btn">
                    <button className="email-btn">
                    <i class="fa fa-envelope"></i>
                        Email 
                    </button>

                    <button className="linkedin-btn">
                        <i className="fa fa-linkedin"></i>     
                        Linkedln
                    </button>
                </div>
            </div>
        </div>
    )
    return content 
}

export default Header