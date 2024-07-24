import React from 'react'
import perfil from "../react_Zaky.png";
const About = () => {
    return (
        <div className="header-wrapper">
            <div className="about-info" id="about">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6">
                            <div className="header-content">
                                <h2 className="about-title"><u>About</u></h2>
                               
                            </div>
                            <div className="header-image">
                                <img src={perfil} className="img-about img-fluid" alt="Responsive image"></img>
                            </div>
                        </div>
                      
                        <div class="col-lg-6">
                            <div class="home_social">
                                <h2 className="about_subtitle">I am Zaky Huraibi</h2>
                                <p className="about_text">and my passion is IT. In that area I am mainly focused on design and development, because that way I can express my creativity. 
                                    This includes the development of applications and websites, both for computers and mobile devices. Additionally I am open to new techniques and I work very accurately, so that people have a flexible colleague who only delivers quality.</p>
                                <p className="about_text">Do you have questions? Feel free to <a href="https://twitter.com/zakyhuraibi" title="zaky" target="_blank">contact</a> me.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
