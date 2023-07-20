import { useEffect, useState } from "react"

function Apple5  () {
    const [data,setData] = useState({})

    useEffect(() => {

      const apiCall = async () => {
        const data  = await fetch("https://fakestoreapi.com/products") 
        const result = await data.json()
        console.log(result)
        setData(result)
        
       }
       
  apiCall()

},[])



    return (
        <>
        <ul>
        {
            data.map(each => (
                <li id = {each.id}>{each.title}</li>
            ))
           
        }
        </ul>
        <div>Hi</div>
        </>
    )
}

export default Apple5