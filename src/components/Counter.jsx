import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const Counter = (props) => {
    const {data,setData} = props


    return(
        <>
        <h1>Counter{data}</h1>
        <button type="button" onClick={()=> setData(data+1)}>Incr</button>

        </>
    )
}

export default Counter