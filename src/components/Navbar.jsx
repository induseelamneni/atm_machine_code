import React from "react";
import {Link} from 'react-router-dom'
import { useSelector } from "react-redux";

const Navbar = () => {
  const state = useSelector((state) => state.handleCart)
    return(
        <div>
            <nav className="navbar navbar-expand-lg bg-White  py-3 showdow-sm">
  <div className="container">
    <a  className="navbar-brand fw-bold fs-4" href="#">Indu Collections</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link to='/' className="nav-link active" aria-current="page" >Home </Link> 
        </li>
        <li className="nav-item">
        <Link to='/products' className="nav-link" aria-current="page" >Products </Link> 
         
        </li>
        <li className="nav-item">
          <a  className="nav-link" href="#">About</a>
        </li>
        <li className="nav-item">
          <a  className="nav-link" href="#">Contact</a>
        </li>
        
      </ul>
     <div className="buttons">
        <button className="btn">
            <a  href="#" className="btn btn-outline-dark">
                <i className="fa fa-sign-in me-1"></i>Login
            </a>
            <a  href="#" className="btn btn-outline-dark ms-2">
                <i className="fa fa-user-plus me-1"></i>Register
            </a>
            <a  href="#" className="btn btn-outline-dark ms-2">
                <i className="fa fa-shopping-cart me-1"></i>Cart({state.length})
            </a>
        </button>
     </div>
    </div>
  </div>
</nav>
        </div>
    )

}

export default Navbar