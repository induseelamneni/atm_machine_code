import React from "react";
import { useReducer } from "react";
import { useState } from "react";


const formReducer = (state, event) => {
    return {
      ...state,
      [event.name]: event.value,
    }
   }


const Practice3 = () => {
    const [data,setData] = useReducer(formReducer, {})
    const [submitForm, setSubmitForm] = useState(false)

    const handleNameChange = event => {
        setData({
            name: event.target.name ,
            value : event.target.value,
        })
    }

  
    
    const handleSubmit = event => {
        event.preventDefault()
        setSubmitForm(true)
       
    }

    const handleChange = event => {
        const isCheckbox = event.target.type === 'checkbox';
        setData({
          name: event.target.name,
          value: isCheckbox ? event.target.checked : event.target.value,
        })
      }

  


    return(
        <>
        <h1>Form</h1>

       <form onSubmit={handleSubmit}>
       <fieldset>
        <label>Name</label>
        <input name="name" onChange={handleChange}/>
       </fieldset>
       <fieldset>
        <label>email</label>
        <input name = 'email' onChange={handleChange}/>
        </fieldset>
        <fieldset>
         <label>
           <p>Apples</p>
           <select name="apple" onChange={handleChange}>
               <option value="">--Please choose an option--</option>
               <option value="fuji">Fuji</option>
               <option value="jonathan">Jonathan</option>
               <option value="honey-crisp">Honey Crisp</option>
           </select>
         </label>
         <label>
           <p>Count</p>
           <input type="number" name="count" onChange={handleChange} step="1"/>
         </label>
         <label>
           <p>Gift Wrap</p>
           <input type="checkbox" name="gift-wrap" onChange={handleChange} />
         </label>
       </fieldset>
       <button type="submit"> Submit</button>
       </form>
       

       <h1>Form Values</h1>
     {
       submitForm && 
       <div>
       You are submitting the following:
       <ul>
         {Object.entries(data).map(([name, value]) => (
           <li key={name}><strong>{name}</strong>: {value.toString()}</li>
         ))}
       </ul>
     </div>
    }
        </>
    )
}

export default Practice3

{/* <div className="wrapper">
<h1>How About Them Apples</h1>
{submitting &&
  <div>
    You are submitting the following:
    <ul>
      {Object.entries(formData).map(([name, value]) => (
        <li key={name}><strong>{name}</strong>: {value.toString()}</li>
      ))}
    </ul>
  </div>
} */}