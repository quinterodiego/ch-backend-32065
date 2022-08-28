import React from 'react'
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">DOSAN</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav text-center">
                        <li className="nav-item">
                            <Link to="/" className="nav-link" aria-current="page">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/productos" className="nav-link" aria-current="page">Productos</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/cargar" className="nav-link" aria-current="page">Cargar</Link>
                        </li>
                        {/* <li className="nav-item">
                            <Link to="/carrito" className="nav-link" aria-current="page">Carrito</Link>
                        </li> */}
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;
