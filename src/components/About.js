import React from 'react'
import perfil from "../react_Zaky.png";
const About = () => {
    return (
        <div className="about-wrapper">
            <div className="about-info" id="about">
                <h2 class="about-title"><u>About</u></h2>
                <div class="container">
                    <div className="about_img">
                        <img src={perfil} className="img-about img-fluid" alt="Responsive image"></img>
                    </div>
                    <div className="about_content">
                        <h2 className="about_subtitle">I am Zaky Huraibi</h2>
                        <p className="about_text">and my passion is IT. In that area I am mainly focused on design and development, because that way I can express my creativity. 
                            This includes the development of applications and websites, both for computers and mobile devices. Additionally I am open to new techniques and I work very accurately, so that people have a flexible colleague who only delivers quality.</p>
                        <p className="about_text">Do you have questions? Feel free to <a href="https://twitter.com/zakyhuraibi" title="zaky" target="_blank">contact</a> me.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
