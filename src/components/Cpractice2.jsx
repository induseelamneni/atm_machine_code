import React from "react";
import { useContext } from "react";
import { store } from "../App";

const Cpractice2 = () => {
    const [data, setData] = useContext(store)
    return(
        <>
        <h1>Cpractice2 {data}</h1>
        </>
    )
}

export default Cpractice2