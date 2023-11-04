const staticPage = (
    <div>
        <div className = "top-section">
            <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ficonape.com%2Fwp-content%2Fpng_logo_vector%2Freact-2.png&f=1&nofb=1&ipt=b92ffe8f1b646edb6cea7929d112ce25ffc2575974f3a4b04c5f739f38d7ddef&ipo=images" />
        </div>

        <div className="bottom-section">
            <h1>Fun facts about React</h1>
            <ul>
                <li>Was first released in 2013</li>
                <li>Was originally created by Jordan Walke</li>
                <li>Has well over 100k stars on Github</li>
                <li>Is maintained by Facebook</li>
                <li>Powers thousands of enterprise apps, incluing mobile app</li>
            </ul>
        </div>
    </div>
)

ReactDOM.render(staticPage, document.getElementById("root"))