import { useContext, useEffect, useState } from "react"

import {store} from '../App'

function Apple () {

    const [data, setData] = useState({})
    const [data1,setData1] = useContext(store)
    const [button3,setButton3] = useState(false)

    const [button2,setButton2]  = useState(false)

    useEffect(()=>{

        async function api(){
            const response = await fetch("https://apis.ccbp.in/blogs")
            const result = await response.json()
            // console.log(result,"in")
            setData(result)
        }


        api()

    })

    const onIncreaseBtn = () => {
           setData1(data1+1)
    }
    
    const onHide2ndChangeBG = () => {
        setButton2(!button2)
        setButton3(!button3)
    }

    let button3Bg = button3 ? "yellow" : "blue"
    
    return (
        <>
         <h1>hi {data1}</h1>
            <button onClick={onIncreaseBtn}>Increase</button>
            <div>
                <button onClick={onHide2ndChangeBG}>Button1</button>
                {button2 ? <button>Button2</button> :""}
                <button style={{backgroundColor:button3Bg}}>Button3</button>
            </div>
        {/* <ul>
           
            {
                data.map(each => (
                    <li id ={each.id}>{each.title}</li>
                ))
            }
           
        </ul> */}
        </>
    )
}

export default Apple

