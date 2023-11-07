import Main from "./Main";
import data from "../data/data";

function DMain () {


    const content = data.map((data) => {
        return (
            <Main data = {data} key={data.key}/>
        )
    })

    return content
}

export default DMain