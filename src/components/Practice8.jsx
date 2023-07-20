import React from "react"
import { useState } from "react"

const Practice8 = () => {
    let [blast, setBlast] = useState("")
    let [clearId , setClearId] = useState(0)

    const increaseCounter = () => {
    let id =   setTimeout(function(){
            setBlast("Divali Bomb Blast please alert") 
        }, 1000)

        setClearId(id)
       
    }
    const decreaseCounter = () => {
       
    
        clearTimeout(clearId)
        setBlast("")
           
        }

    // 

    return(
        <>
        <h1>{blast}</h1>
        <button type="button" onClick={increaseCounter}> Bomb Blast after 1sec</button>
        <button type="button" onClick={decreaseCounter}> clear Bomb Blast after</button>
        </>
    )
}

export default Practice8