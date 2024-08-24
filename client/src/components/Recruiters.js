import React from "react";
// Images of brands 
import brand1 from '../images/brands/SUBROS.NS_BIG.png'
import brand2 from '../images/brands/L&T.png'
import brand3 from '../images/brands/Samsonite.png'
import brand4 from '../images/brands/advik-hi-tech.png'
import brand5 from '../images/brands/anand.png'
import brand6 from '../images/brands/armsit.png'
import brand7 from '../images/brands/bajaj.png'
import brand8 from '../images/brands/epitome.png'
import brand9 from '../images/brands/ge.png'
import brand10 from '../images/brands/infosys.png'
import brand11 from '../images/brands/kirloskar.png'
import brand12 from '../images/brands/mahindra.png'
import brand13 from '../images/brands/mittal.png'
import brand14 from '../images/brands/sandeep-metalcraft.png'
import brand15 from '../images/brands/triveni_turbines.png'
import brand16 from '../images/brands/uttam.png'
const brands = [
    { src: brand1, alt: 'Subros' },
    { src: brand2, alt: 'Laren and turbo' },
    { src: brand3, alt: 'Samsonite' },
    { src: brand4, alt: 'Advik HiTech' },
    { src: brand5, alt: 'Anand' },
    { src: brand6, alt: 'ArmsIt' },
    { src: brand7, alt: 'Bajaj' },
    { src: brand8, alt: 'Epitome' },
    { src: brand9, alt: 'Ge' },
    { src: brand10, alt: 'Infosys' },
    { src: brand11, alt: 'Kirloskar' },
    { src: brand12, alt: 'Mahindra' },
    { src: brand13, alt: 'Mittal' },
    { src: brand14, alt: 'Sandeep Metal Craft' },
    { src: brand15, alt: 'Triveni Turbines' },
    { src: brand16, alt: 'Uttam' }
]
export default function Recruiters() {
    return (
        <>
            <div className="recruiters-container py-16 bg-white">
                <h1 className="flex justify-center align-center heading-top-center-line">Our <span className="heading-red"> Recruiters</span></h1>
                <div className="recruiters-list-container overflow-hidden">
                    <div className="recruiters-list w-auto flex justify-center">

                        {
                            brands.map((b) => (
                                <div className="recruiter">
                                    <img src={b.src} alt="" />
                                </div>
                            ))
                        }
                        {
                            brands.map((b) => (
                                <div className="recruiter">
                                    <img src={b.src} alt="" />
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    )
}