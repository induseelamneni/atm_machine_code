
import { useState, useEffect } from "react";
import React from "react";
import { Link } from "react-router-dom";


const Products = () => {
    const [data, setData] = useState([])
    const [filter, setFilter] = useState([])
    const [loading, setLoading] = useState([])
    let componentMounted = true;

    useEffect(() => {
        const getProducts = async () => {
            setLoading(true);
            const response = await fetch("https://fakestoreapi.com/products");
            if (componentMounted) {
                setData(await response.clone().json());
                setFilter(await response.json());
                setLoading(false)
                console.log(filter)
                console.log("indu")
            }
            return () => {
                componentMounted = false;
            }
        }
        getProducts()
    }, [])

    const Loading = () => {
        return (
            <>
                Loading....
            </>
        )
    }

    const filterProducts = (cat) => {
        const updatedData = data.filter(e => e.category === cat)

        setFilter(updatedData)
    }

    const ShowProducts = () => {
        return (
            <>
                <div className="button d-flex justify-content-center mb-5 pb-5">
                    <button className="btn btn-outline-dark me-2" onClick={()=> setFilter(data)}>All</button >
                    <button className="btn btn-outline-dark me-2" onClick={()=> filterProducts( "men's clothing")}>Mens Clothings</button >
                    <button className="btn btn-outline-dark me-2" onClick={()=> filterProducts("women's clothing")}>womens Clothings</button >
                    <button className="btn btn-outline-dark me-2" onClick={()=> filterProducts("jewelery")}>Jewelery</button >
                    <button className="btn btn-outline-dark me-2" onClick={()=> filterProducts("electronics")}>Electronics</button >
                </div>
                {filter.map((product) => {
                    return (
                        <>
                            <div className="col-md-3 mb-4">
                                <div className="card h-100 text-center p-4" key={product.id} >
                                    <img src={product.image} class="card-img-top" alt={product.title} height="250px"/>
                                    <div className="card-body ">
                                        <h5 className="card-title mb-0">{product.title.substring(0,12)}...</h5>
                                        <p className="card-text lead fw-bold">${product.price}</p>
                                        <Link to={`/products/${product.id}`}  className="btn btn-outline-dark">Buy Now</Link>
                                    </div>
                                </div>
                            </div>
                        </>
                    )
                })}
            </>)
    }

    return (
        <div>
            <div className="container my-5 py-5">
                <div className="row">
                    <div className="col-12 mb-5">
                        <h1 className="display-6 fw-bolder text-center">Latest Products</h1>
                        <hr />
                    </div>
                </div>
                <div className="row justify-content-center">
                    {loading ? <Loading /> : <ShowProducts />}
                </div>
            </div>

        </div>
    )

}

export default Products