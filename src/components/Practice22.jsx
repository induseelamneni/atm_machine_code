import React ,{useState } from "react"

const countries = [
    {name:'India',value:'IN',cities:['Delhi','Mumbai']},
    {name:'Pak',value:'PA',cities:['Lahore','Karachi']},
    {name:'Bangladesh',value:'BG',cities:['Dhaka','Chittagong']},
    

    

]

const Practice22 = () => {
    const [country, setCountry] = useState(countries[0].value)
    const [city, setCity] = useState('')
    const onSubmitForm = event => {
        event.preventDefault()
    }
    // onClick={onSubmitForm()}

    const onChangeOptions = event => {
        setCountry(event.target.value)
    

    }
    console.log(country)
   
    const filteredCities = countries.filter((each) => {
        if(each.value === country) {
            return (each.cities)
        }
        return null
        
    })

    // const filteredCity = (person) => {
    //     if (checkedValue.includes(person.city)) {
    //       return person;
    //     }
    //     return null;
    //   };

    const onChangeCities = event => {
        setCity(event.target.value)

    }

    console.log(filteredCities)
    
  
    return(
        <>
        <h1>Form</h1>
        <form onClick={onSubmitForm}>
            <select onChange={onChangeOptions}>
                {countries.map(each => (
                    <option value={each.value}>{each.name}</option>
                ))}
               
            </select>
            <select onChange={onChangeCities}>
                {filteredCities.map(each => (
                    each.cities.map(each => (
                        <option value={each.citi}>{each}</option>
                    ))
                    
                ))}
               
            </select>
            <button type="submit">Submit</button>
        
        </form>

        <h2>{country}</h2>
        <h2>{city}</h2>
        </>

    )
}

export default Practice22