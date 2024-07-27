import React from 'react';
import { ReactTyped } from "react-typed";
import logo from "../logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faTwitter, faMedium } from '@fortawesome/free-brands-svg-icons';
import About from "./About";

const Header = () => {
    return (
        <>
            <div className="header-wrapper" id="home-wrapper">
                <div className="main-info">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-5">
                                <div className="header-content">
                                    <h1 className="header-title">Web development and websites</h1>
                                    <ReactTyped
                                        className="typed-text"
                                        strings={["Web Design", "Web Development", "Software Development", "Software Architecture"]}
                                        typeSpeed={40}
                                        backSpeed={60}
                                        loop
                                    />
                                </div>
                                <div class="home_social">
                                    <a href="https://github.com/superzaky" target="_blank" class="home_social-icon"><FontAwesomeIcon icon={faGithub} /></a>
                                    <a href="https://twitter.com/zakyhuraibi" target="_blank" class="home_social-icon"><FontAwesomeIcon icon={faTwitter} /></a>
                                    <a href="https://medium.com/@zakyhuraibi" target="_blank" class="home_social-icon"><FontAwesomeIcon icon={faMedium} /></a>
                                </div>
                            </div>
                            <div class="col-lg-1">
                            </div>
                            <div class="col-lg-6">
                                <div className="header-image">
                                    <img src={logo} className="img-header img-fluid" alt="Responsive image"></img>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <About/>
        </>
    )
}

export default Header;
