import { useContext, useEffect, useReducer,useState } from "react"

// import {store} from '../App'

const formReducer = (state,event) => {
    return {
            ...state,
            [event.name] : event.value
        }
    
}

function Apple70() {
    // const [data1,setData1] = useContext(store)
    const [data,setData] = useReducer(formReducer,{})
    const [productData, setProductData] = useState({})
    const onChangeInput = (event) => {
        setData({
            name:event.target.name,
            value:event.target.value
        })

    }

    useEffect(() => {
        let getApi = async () =>{
            let data = await fetch("https://fakestoreapi.com/products")
            let response = await data.json()
            console.log(response)
            setProductData(response)
        }

        getApi()
    },[])

    return(
        <>
        {/* <h1>hello {data1}</h1> */}
        <form>
            <input type="input" name="name" onChange={onChangeInput}/>
            <select name="fruit"  onChange={onChangeInput}>
             <option value="Apple">Apple</option>
             <option value="Banana">Banana</option>
            </select>
        </form>
        <ul>
            {Object.entries(data).map(([name,value]) => (
                <li ><strong>{name}</strong> : {value}</li>
            ))}
        </ul>
        <ul>
            {productData.map(each => (
                <li>{each.title}</li>
            ))}
        </ul>
        </>
    )

}

export default Apple70