import React, { useContext } from "react";
import { store } from "../App";

const Context2 = () => {
    const [data, setData] = useContext(store)
    console.log(data,"po")
    return(
        <div style={{border: '5px solid red'}}>
        <h1>Component2</h1>
        {/* {data.map(each => (
            <h6 key = {each.id}>{each.title}</h6>
        ))} */}
        
        </div>
    )
}

export default Context2