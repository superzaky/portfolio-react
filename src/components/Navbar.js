import React from 'react';
import logo60x46 from "../logo60x46.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import ScrollReveal from 'scrollreveal';

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '40px',
    duration: 2000,
    reset: true
});

/*SCROLL HOME*/
sr.reveal('.header-title',{}); 
sr.reveal('.typed-text',{delay: 200}); 
sr.reveal('.img-header',{delay: 400}); 

/*SCROLL ABOUT*/
sr.reveal('.img-about',{}); 
sr.reveal('.about_subtitle',{delay: 400}); 
sr.reveal('.about_text',{delay: 400}); 


const Navbar = () => {
    return (
    <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
        <div className="container">
                <a className="navbar-brand" href="#"><img className="logo" src={logo60x46} alt="Man with sunglasses" width="500"/></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <FontAwesomeIcon icon={faBars} style={{color: "#47bab7"}}/>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <a className="nav-link" aria-current="page" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#about">About</a>
                    </li>
                </ul>
                </div>
        </div>
    </nav>
    )
}

export default Navbar
