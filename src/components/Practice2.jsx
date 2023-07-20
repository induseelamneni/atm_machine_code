import React from "react";
import { useState ,useEffect} from "react";


const Practice2 = () => {
    const [product, setProduct] = useState(0)
   
    useEffect(() => {
        const getProduct = async () => {
            const response = await fetch('https://fakestoreapi.com/products');
            console.log(response, "la")
            const data = await response.json()
            console.log(data,"mn")
            setProduct(data)
        }
        getProduct()
       

    }, [])

    console.log(product)

   return(
    <div style={{display : 'flex', flexDirection:'column', alignItems:"flex-start",justifyContent:'center', marginTop:'20px',marginLeft:'20px',border:'solid 10px purple', padding:"40px"}}>
    {product.map(each => (
       
          <h6 id = {each.id} >{each.title}</h6>
        
    )
    )}
    {/* <h1>hello</h1> */}
    </div>
   )
   
}
export default Practice2