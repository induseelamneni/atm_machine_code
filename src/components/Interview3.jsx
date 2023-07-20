import { useContext, useState } from "react"

import { store } from "../App";

const contries = [
    {name:"India",value:"IN",cities:["Delhi","Hyderabad"]},
    {name:"Australia",value:"AUS",cities:["Australia","Australia5"]},
    {name:"Canada",value:"CA",cities:["Canada","Canada0"]},
    {name:"Canada",value:"EU",cities:["Canada","Canada9"]},
    
]

function Interview3 (){
    const [country,setCountry] = useState(contries[0].value)



    const [data1,setData1] = useContext(store)

    const onChangeOption = event => {
    setCountry(event.target.value)

    }   
    let newCitiesList = []

    const filteredCities = contries.filter(each => {

        if (each.value === country) {
             newCitiesList.push({id:0,city:each.cities[0]},{id:1,city:each.cities[1]})
        }
    })

    console.log(newCitiesList)

    return(

        <>
        <select onChange={onChangeOption}>
        {contries.map((each) => (
            <option value={each.value} key = {each.value}>{each.name}</option>
        ))}
        </select>
        <select>{newCitiesList.map(each => (
            <option key={each.id}>{each.city}</option>
        )

        )}

        </select>

        <h1>{data1}</h1>
        </>
    )

}

export default Interview3