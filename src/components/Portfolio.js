import React from 'react'
import perfil from "../react_Zaky.png";
const Portfolio = () => {
    return (
        <div className="header-wrapper">
            <div className="about-info" id="about">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6">
                            <div className="header-content">
                                <h2 className="about-title"><u>Portfolio</u></h2>
                               
                            </div>
                            <div className="header-image">
                                <img src={perfil} className="img-about img-fluid" alt="Responsive image"></img>
                            </div>
                        </div>
                      
                        <div class="col-lg-6">
                            <div class="home_social">
                                <h2 className="about_subtitle">IPORTFOLIO PAGE</h2>
                                <p className="about_text">PORTFOLIO CONTENT</p>
                                <p className="about_text">Do you have questions? Feel free to <a href="https://twitter.com/zakyhuraibi" title="zaky" target="_blank">contact</a> me.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Portfolio
