import { useState, useEffect } from 'react'

import React from 'react'
import { useDispatch } from 'react-redux'
import { addCart } from '../redux/action'
import { Link, useParams } from 'react-router-dom'

const Product = () => {
   
    const { id } = useParams()
    
    console.log(id)
    const [product, setProduct] = useState([])
    console.log(product)
    const [loading, setLoading] = useState(false)

    const dispatch = useDispatch()
    const addProduct = (product) => {
        dispatch(addCart(product))
    }
    
    useEffect(() => {
        const getProduct = async () => {
            setLoading(true)
            const response = await fetch(`https://fakestoreapi.com/products/${id}`);
            console.log(response)
            setProduct(await response.json())
            console.log(product)
            setLoading(false)
        }

        getProduct()

    }, [])

    const Loading = () => {
        return (
            <div col-md-6>
                Loading....
            </div>
        )
    }

    const ShowProduct = () => {
        return (
            <>
                <div className="col-md-6">
                    <img src={product.image} alt={product.title} height="400px" width="400px" />
                </div>
                <div className="col-md-6">
                    <h4 className='text-uppercase text-black-50'>
                        {product.category}
                    </h4>
                    <h1 className='display-5'>{product.title}</h1>
                    <p className='lead'>Rating {product.rating && product.rating.rate}
                        <i className='fa fa-star'></i>
                    </p>
                    <h3 className='display-6 fw-bold my-4'>${product.price}</h3>
                    <p className='lead'>{product.description}</p>
                    <button className='btn btn-outline-dark px-3 py-2' onClick={() => addProduct(product)}>Add to Cart</button>
                    <Link to="/cart" className='btn btn-dark ms-2 px-3 py-2'>Go to Cart
                    </Link>
                </div>
            </>

        )
    }

    return (
        <div>
            <div className="container py-5">
                <div className="row py-5">
                    {loading ? <Loading /> : <ShowProduct />}</div>
            </div>
        </div>
    )

}

export default Product