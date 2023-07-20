import { useState } from "react"

const response = {
    data : [{
        name:'indu',

    },
    {
        name:"bindu"
    }
]
}


function Apple1 () {

    // let obj = {
    //     firstName : "indu",
    //     lastName : "bindu",
    //     address:{
    //         firstLine:"seelamneni",
    //         secondLine:"yarlagadda"
    //     }
        
    // }

    const [obj,setObj] = useState({firstName : "indu",
    lastName : "bindu",
    address:{
        firstLine:"seelamneni",
        secondLine:"yarlagadda"
    }})

    

    const onChangeSecondLine = () => {
             setObj({...obj,address:{...obj.address,secondLine:"adda"}})
    }

    // console.log(data,'in')
    return (
        <>
        <h1>{obj['firstName']}</h1>
        <h2>{obj['lastName']}</h2>
        <h2>{obj.address['firstLine']}</h2>
        <h3>{obj.address['secondLine']}</h3>
        <button onClick={onChangeSecondLine}>Change</button>
        </>
    )
}

export default Apple1


