import React from "react";
import { useContext } from "react";
import { store } from "../App";

const Cpractice1 = () => {
    const [data, setData] = useContext(store)
    return(
        <>
        <h1>Cpractice1 {data}</h1>
        </>
    )
}

export default Cpractice1