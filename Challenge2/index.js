function Header () {
    return (
        <header> 
        <nav className="nav">
          
            <img className="image" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ficonape.com%2Fwp-content%2Fpng_logo_vector%2Freact-2.png&f=1&nofb=1&ipt=b92ffe8f1b646edb6cea7929d112ce25ffc2575974f3a4b04c5f739f38d7ddef&ipo=images"/> 
            
            <ul className = "nav-items">
                <li>Pricing</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>
        </header>
    )
}

function MainContent () {
    return (
        <div>
            <h1>Reasons I'm excited to learn React</h1>
            
            <ol>
                <li>It's a popular library, so I'll be able to fit in with the cool kids!</li>
                <li>I'm more likely to get a job as a developer</li>
            </ol>
        </div>
    )
}

function Footer () {
    return (
        <footer className="footer">
        <small className>&#169; 2023 backendbro development. All rights reserved</small>
        </footer>
    )
}


function Page () {
    return (
        <div>
        
        <Header /> 

        <MainContent />

        <Footer />
        
        </div>
    )
}

ReactDOM.render(<Page />, document.getElementById("root"))