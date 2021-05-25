import React from 'react';
import Typed from "react-typed";
import logo from "../logo.png";

const Header = () => {
    return (
        <div className="header-wrapper">
            <div className="main-info">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-5">
                            <div className="header-content">
                                <h1>Web development and websites</h1>
                                <Typed
                                    className="typed-text"
                                    strings={["Web Design", "Web Development", "Software Development", "Software Architecture"]}
                                    typeSpeed={40}
                                    backSpeed={60}
                                    loop
                                />
                            </div>
                        </div>

                        <div class="col-lg-1">
                          
                        </div>
                        <div class="col-lg-6">
                            <div className="header-image">
                                <img src={logo} className="img-fluid" alt="Responsive image"></img>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
