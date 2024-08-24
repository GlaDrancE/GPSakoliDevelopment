import React, { useState, useEffect } from 'react'
import { Slider } from '../components/Slider'
import Footer from "../components/Footer"
import SideMenu from '../components/SideMenu';


import AboutInstitute from '../components/about-components/AboutInstitute'
import AboutProgramOffered from '../components/about-components/AboutProgramOffered'
import AboutPrincipalRes from '../components/about-components/AboutPrincipalRes';
import OfficeStaff from '../components/about-components/OfficeStaff';
import AcademicCalendar from '../components/about-components/AcademicCalender';
import OrganizationStructure from '../components/about-components/OrganizationStructure';
import PortfolioDetails from '../components/about-components/PortfolioDetails';
import Preloader from '../components/Preloader';
import InstitutionMap from '../components/about-components/InstitutionMap';
import { useParams } from 'react-router-dom';
import { Norms } from '../components/about-components/Norms';
import { RightToInformation } from '../components/about-components/RightToInformation';
import { InstituteCalender } from '../components/about-components/InstituteCalender';
export default function About() {
    const { page } = useParams()
    let aboutMenuLinks = [
        { name: 'About The Institute', path: '/about-institute/about-institute' },
        { name: 'Program Offered', path: '/about-institute/program-offered' },
        { name: 'Principal Responsibilities', path: '/about-institute/principal-res' },
        { name: 'Office Staff', path: '/about-institute/office-staff' },
        { name: 'Organization Structure', path: '/about-institute/organization-structure' },
        { name: 'Institute Map', path: '/about-institute/institute-map' },
        { name: 'Portfolio Details', path: '/about-institute/portfolio-details' },
        { name: 'Academic Calender', path: '/about-institute/academic-calender' },
        { name: 'Norms', path: '/about-institute/norms' },
        { name: 'Right To Information', path: '/about-institute/right_to_information' },
        { name: 'Institute Calender', path: '/about-institute/institute-calender' }
    ]

    return (
        <>
            <Slider />
            <div className="main-container">
                <div className="text-center">
                    <h1 className='heading my-8'>About <span className="heading-red"> Institute</span></h1>
                </div>
                <div className="dynamic-container">
                    <div className="institute-about-container">
                        {page === 'about-institute' && <AboutInstitute />}
                        {page === 'program-offered' && <AboutProgramOffered />}
                        {page === 'principal-res' && <AboutPrincipalRes />}
                        {page === 'office-staff' && <OfficeStaff />}
                        {page === 'organization-structure' && <OrganizationStructure />}
                        {page === 'institute-map' && <InstitutionMap />}
                        {page === 'portfolio-details' && <PortfolioDetails />}
                        {page === 'academic-calender' && <AcademicCalendar />}
                        {page === 'norms' && <Norms />}
                        {page === 'right_to_information' && <RightToInformation />}
                        {page === 'institute-calender' && <InstituteCalender />}
                    </div>
                    <SideMenu links={aboutMenuLinks} />
                </div>
            </div>
        </>
    )
}
