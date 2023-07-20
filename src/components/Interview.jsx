//https://fakestoreapi.com/products

import { useEffect, useState } from "react"

function Interview ()  {
    const [data, setData] = useState({})

    useEffect(() => {
          
        async function fetchData(){
         let response = await fetch("https://fakestoreapi.com/products")
         let jsonResponse = await response.json()
         setData(jsonResponse)

        }
        fetchData()
    })

    
    return (
        
        <ul>
            {data.map(each => (
                <li key = {each.id}>{each.title}</li>
            ))}
        </ul>
    )
}

export default Interview