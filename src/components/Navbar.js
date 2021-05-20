import React from 'react';
import logo from "../logo60x46.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from "@fortawesome/react-fontawesome";

const Navbar = () => {
    return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
                <a className="navbar-brand" href="#"><img className="logo" src={logo} alt="Man with sunglasses" width="500"/></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <a className="nav-link" aria-current="page" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">Writing</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">Portfolio</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">About</a>
                    </li>
                </ul>
                </div>
        </div>
    </nav>
    )
}

export default Navbar
