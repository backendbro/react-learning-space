import Main from "./Main";
import data from "../data/data";

function DMain () {
    const content = data.map((data, index) => {
        return (
            <Main data = {data} key={index}/>
        )
    })

    return content
}

export default DMain