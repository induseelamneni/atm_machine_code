import { useContext } from "react"
import { useReducer } from "react"

import { store } from "../App"

const formReducer = (state,event) => {
    return {
        ...state,
       [event.name] : event.value
    }
}



function Interview1 () {
    const [data,setData] = useReducer(formReducer, {})
    const [data1,setData1] = useContext(store)


    const onChangeUserInput = (event) => {
        setData({
            name:event.target.name,
            value:event.target.value
        })
 }

 const onIncreaseCount = () => {
    setData1(data1 + 1)
 }
    return (
        <>
          <form>
            <input name ='name' type="input" onChange = {onChangeUserInput}/>
            
            <select name='fruit' onChange = {onChangeUserInput}
            
            >
                <option value="Apple">Apple</option>
                <option value = "Orenge">Orange</option>
            </select>
        </form>
        <h1>contextData {data1}</h1>
        <button onClick={onIncreaseCount}>Increment</button>
        
        <ul>
        {Object.entries(data).map(([name,value]) => (
                <li>
                    <strong>{name} </strong>: {value}</li>
               ))}
            </ul>
        </>
      
    )
}

export default Interview1