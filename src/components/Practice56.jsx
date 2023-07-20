import { useReducer } from "react"

const formReducer = (state,event) => {
      return {
        ...state,
        [event.name] : event.value,

      }
       
}

const Practice56 = () => {
    const [data, setData] = useReducer(formReducer,{})
    const onChangeForm = event => {
        event.preventDefault()

    }

    const onChangeValue = event => {
        setData({
            name:event.target.name,
            value  : event.target.value
        })

    }

    return(
        <>
       <form onChange={onChangeForm}>
        <h1>Form</h1>
        <input name="name" onChange={onChangeValue}/>
        <select name="fruit" onChange={onChangeValue}>
            <option value = "Apple">Apple</option>
            <option value = "orenge">Orange</option>
        </select>
        <button type="submit">Submit</button>
       
       </form>
        <h1>Result</h1>
        <ul>
        {Object.entries(data).map(([name,value]) => (
            <li>
            <strong>{name}</strong>:{value.toString()}
            </li>
        ))}
        </ul>
        </>

    )
}

export default Practice56