import React, { useContext } from "react";
import { store } from "../App";

const Context1 = () => {
    const [data, setData] = useContext(store)
    console.log(data,"rt")
    return(
        <div style={{border: '5px solid blue'}}>
        <h1>{data}</h1>
        {/* {data.map(each => (
            <h6 key = {each.id}>{each.title}</h6>
        ))} */}
        
        </div>
    )
}

export default Context1