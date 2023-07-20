import { useContext, useEffect, useReducer } from "react"
import {store} from '../App'

const formReducer = () => {
    
}

function Apple45 (){
    const [data1,setData1] = useContext(store)
    const [data,setData]  = useReducer(formReducer,{})

    useEffect(() => {
       const apiData = async() => {
            const data = await fetch ("https://fakestoreapi.com/products")
            const response = await data.json()
            console.log(response)
       }
       apiData()

    },[])

    const onChangeInput = event => {
        setData({
            name: event.target.name,
            value:event.target.value
        })
    }
    return (
        <>
        <h1>context api  data{data1}</h1>
        <button onClick={()=> setData1(data1 +1) }>Increment Counter</button>
        <form>
            <input name='name' type="input" onChange={onChangeInput}/>
        </form>
        </>
    )

}

export default Apple45