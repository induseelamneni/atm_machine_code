import { useReducer } from "react"

const formReducer = (state,event) => {
   return {
    ...state,
    [event.name] : event.value
   }
} 
const Apple7 = () => {
    const [data, setData]= useReducer(formReducer,{})

    const onChangeInput = (event) => {
        setData({
            name:event.target.name, 
            value:event.target.value
        })

    }

   
    return (
        <>
        <form>
            <input name ="name" type = "input" onChange={onChangeInput}/>
            {data.name === ""  ? <p style={{color:"red"}}>"please enter name input"</p>: ""}
            <br/>
            <input name ="password" type="password" onChange={onChangeInput}/>
            <br/>
            <select onChange={onChangeInput} name="fruit">
                <option value="apple">Apple</option>
                <option value='banana'>Banana</option>
            </select>
            <br/>
           <label htmlFor="gender">Gender</label>
           <br/>
           <input type="radio" name="Gender" value="male" id="gender" onChange={onChangeInput}/>Male
           <br/>
           <input type="radio" name="Gender" value="female" onChange={onChangeInput}/>Female
           <br/>
        </form>
        <ul>
            {Object.entries(data).map(([name,value]) => (
                 <li>
                    <strong>{name} </strong>: {value}
                 </li>
    ))}
        </ul>
        </>
    )
}

export default Apple7 