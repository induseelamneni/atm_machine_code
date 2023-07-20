import { useState } from "react"

function Apple89 () {
    const [amount,setAmount] = useState(0)
    const [curr, setCurr] = useState([])

    const notes = [10,50,100,200,500,1000]

    

    var outputNotes = []

    const minNumOfNotes = (amount) => {
       let notes = [2000,1000,500,200,100,50,20,10,5]
       let notesArr = Array(9).fill(0)
       
       for (let i = 0 ; i < notes.length ; i++){
            if( amount >= notes[i]){
                notesArr[i] =  Math.floor(amount/notes[i])
                amount = amount % notes[i]
            }
       }

     

       for (let i = 0 ; i < notes.length ; i++){
            if (notesArr[i] > 0){
              
                outputNotes.push((notes[i] + " : "
                    + notesArr[i]));
            }
           
       }

    }
   
    const onSubmitForm = (event) => {
        event.preventDefault()
        minNumOfNotes(amount)
        setCurr(outputNotes)
   }
    return(
        <>
        <form onSubmit={onSubmitForm}>
        <input type="input" onChange={(e) => {setAmount(e.target.value)}}/>
        <button type="submit">Submit</button>
        </form>
        <h1>withdrown notes</h1>
        {console.log(curr)}
        {curr.map(each => (
           <li>{each}</li>
        ))}
        </>
    )
}

export default Apple89