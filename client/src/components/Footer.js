import React from 'react'
import SocialmediaIcon from './SocialmediaIcon'
import footerBackground from '../images/footer-background.png'
import instagram from '../images/icons/instagram.svg'
import facebook from '../images/icons/facebook.svg'
import linkedin from '../images/icons/linkedin.svg'
import twitter from '../images/icons/twitter.svg'
export default function Footer() {
    const socialMediaIcons = [
        { iconSvg: instagram, iconUrl: 'www.instagram.com' },
        { iconSvg: facebook, iconUrl: 'www.facebook.com' },
        { iconSvg: linkedin, iconUrl: 'www.linkedinm.com' },
        { iconSvg: twitter, iconUrl: 'www.twitter.com' },
    ]
    return (
        <>
            <div className="footer-container relative mx-auto reveal" style={{ width: '85%' }}>
                <img src={footerBackground} alt="" />
                <div className="inner-footer-container my-20 grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4 ">
                    <div className="about-college lg:w-80 md:w-56">
                        <h1>About us</h1>
                        <p className='my-1'>Welcome! to GPS <br /> Let's make your future together</p>
                        <div className="social-media-footer-container flex">
                            {socialMediaIcons.map((icon, index) => (
                                <SocialmediaIcon icons={icon} key={index} />
                            ))}
                        </div>
                    </div>
                    <div className="f-quick-links">
                        <h1>Quick Links</h1>
                        <ul>
                            <a href="#"><li>About Us</li></a>
                            <a href="#"><li>Vision & Mission</li></a>
                            <a href="#"><li>Admission Procedure</li></a>
                            <a href="#"><li>Administrative Staff</li></a>
                        </ul>
                    </div>
                    <div className="f-imp-links">
                        <h1>Important Links</h1>
                        <ul>
                            <a href="#"><li>Mandatory Disclosure</li></a>
                            <a href="#"><li>MOOC</li></a>
                            <a href="#"><li>SWAYAM</li></a>
                            <a href="#"><li>SAKSHAT</li></a>
                            <a href="/admin-login/manage-staff-data">Admin Corner</a>
                        </ul>
                    </div>
                </div>

                <div className="footer-copyright flex justify-center">
                    Copyright ©2023 All rights reserved | Government Polytechnic, Sakoli : <a href="#">Ayush Ramteke</a>
                </div>
            </div>
        </>
    )
}
