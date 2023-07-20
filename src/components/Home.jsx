import React from "react";
import Products from "./Products";


const Home = () => {
    return (
        <div className="hero">
            <div className="card text-bg-light ">
                <img src='https://res.cloudinary.com/dmd5feuh9/image/upload/v1658472450/bg_jison0.jpg' alt="background" height="850px"/>
                <div className="card-img-overlay d-flex flex-column justify-content-center">
                    <div className="container ">

                    <h5 className="card-title display-3 fw-bolder mb-0 text-white" >New Season Arrivals</h5>
                    <p className="card-text lead fs-3 text-white">Check Out The Trends</p>
                  
                    </div>
                   

                </div>
            </div>
           
        </div>
    )
}

export default Home