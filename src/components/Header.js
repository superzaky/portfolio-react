import React from 'react';
import Typed from "react-typed";
import logo from "../logo.png";
const Header = () => {
    return (
        <div className="header-wrapper">
            <div className="main-info">
                <h1>Web development and websites</h1>
                <Typed
                    className="typed-text"
                    strings={["Web services", "Web Development", "Software Development", "Software Architecture"]}
                    typeSpeed={40}
                    backSpeed={60}
                    loop
                />
                <img src={logo} class="img-fluid" alt="Responsive image"></img>
            </div>
        </div>
    )
}

export default Header
