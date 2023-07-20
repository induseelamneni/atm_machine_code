
import React, {useEffect, useState} from "react"

function Practice88(){
    const [count, setCount] = useState(0)
    const [data, setData] = useState({})

    const increaseBtn = event => {
        setCount(count +1)
    }
    useEffect(() => {

        const getData = async () =>  {
           let  response = await fetch('https://fakestoreapi.com/products')
           const data = await response.json()
           console.log(data)
           setData(data)
        }
        getData()

    },[])

    console.log(data)

    return(
        <>
        <h>{count}</h>
        <button onClick={increaseBtn}>increase</button>
        <ul>
            {data.map(each => (
                <li key = {each.id}>{each.title}</li>
            ))}
        </ul>
        </>
    )
}

export default Practice88