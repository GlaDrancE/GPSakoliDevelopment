import React, { useEffect, useRef, useState } from 'react'
import Dropdown from './Dropdown';
import Typewriter from 'typewriter-effect'
import { Link } from 'react-router-dom';
import MobileNav from './MobileNav';

// Logo image
import logo from '../images/logo.png'



const link1 = [
    {
        headings: 'Department', content: [
            { contentTitle: 'Computer Technology', contentUrl: '/dept/computer/about-department' },
            { contentTitle: 'Civil Engineering', contentUrl: '/dept/civil/about-department' },
            { contentTitle: 'Electrical Engineering', contentUrl: '/dept/electrical/about-department' },
            { contentTitle: 'Electronics and Tel. Comm. Engineering', contentUrl: '/dept/electronics/about-department' },
            { contentTitle: 'Mechanical Engineering', contentUrl: '/dept/mechanical/about-department' },
            { contentTitle: 'Science and Humanities', contentUrl: '/dept/science_humanities/about-department' },
            { contentTitle: 'Applied Mechanics', contentUrl: '/dept/applied_mechanics/about-department' },
            { contentTitle: 'Workshop', contentUrl: '/dept/workshop/about-department' }]
    },

    {
        headings: 'Facilities', content: [
            { contentTitle: 'Library', contentUrl: '/facilities/library' },
            { contentTitle: 'Gymkhana', contentUrl: '/facilities/gymkhana' },
            { contentTitle: 'Student Cooperative Store', contentUrl: '/facilities/scs' },
            { contentTitle: 'Canteen', contentUrl: '/facilities/canteen' },
            { contentTitle: 'Boys Hostel', contentUrl: '/facilities/boys-hostel' },
            { contentTitle: 'Internet', contentUrl: '/facilities/internet' }]
    },
    {
        headings: 'Accreditation and Reports', content: [
            { contentTitle: 'NBA Accreditation Status', contentUrl: '/accreditation-reports/nba-accreditation' },
            { contentTitle: 'EOA (AICTE) Reports', contentUrl: '/accreditation-reports/eoa-reports' },
            { contentTitle: 'Monitoring Reports', contentUrl: '/accreditation-reports/monitoring-reports' },
            { contentTitle: 'Audit Reports', contentUrl: '/accreditation-reports/audit-reports' }]
    },
]
const link2 = [
    {
        headings: 'Prospective Students', content: [
            { contentTitle: 'Why GPS?', contentUrl: '/about-institute/about-institute' },
            { contentTitle: 'Program Offered', contentUrl: '/about-institute/program-offered' },
            { contentTitle: 'Admission Process', contentUrl: '/students-admission-process' },
            { contentTitle: 'GPS In News', contentUrl: '/gps-in-news' }
        ]
    },
    {
        headings: 'Existing Students', content: [
            { contentTitle: 'Conduct & Discipline', contentUrl: '/students-corner/conduct-discipline' },
            { contentTitle: 'Scholarship', contentUrl: '/students-corner/scholarship' },
            { contentTitle: 'Fee Structure', contentUrl: '/students-corner/fee-structure' },
            { contentTitle: 'Confirm Admission', contentUrl: '/confirm-admission' },
            { contentTitle: 'Student Grievance Form', contentUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSeOPOjLCvKii-jddniC40V8CMn2WD1mkxrOBlqj52YdJgWvYw/viewform' },
            { contentTitle: 'Digital Library', contentUrl: '/students-corner/digital-library' }
        ]
    },
]
const link3 = [
    {
        headings: 'Training And Placements', content: [
            { contentTitle: 'Activities under T & P Cell', contentUrl: '/training-placements/activity-under-cell' },
            { contentTitle: 'Team Members', contentUrl: '/training-placements/team-member' },
            { contentTitle: 'Recruiters', contentUrl: '/training-placements/recruiters' },
            { contentTitle: 'Online Training Links', contentUrl: '/training-placements/online-training-links' }
        ]
    }
]
const link4 = [
    {
        headings: 'Committees', content: [
            { contentTitle: "Womens Grievance Committee", contentUrl: '/committe/women-grievance-commitee' },
            { contentTitle: "Student Grievance Committee", contentUrl: '/committe/student-grievance-committee' },
            { contentTitle: "Anti Ragging Committee", contentUrl: '/committe/anti-ragging-committee' },
            { contentTitle: "SC-ST Committee", contentUrl: '/committe/sc-st-committee' },
            { contentTitle: "ISTE/IEI Committee", contentUrl: '/committe/iste-committee' },
            { contentTitle: "IIC Committee", contentUrl: '/committe/iic-committee' },
            { contentTitle: "IQAC Committee", contentUrl: '/committe/iqac-committee' },
            { contentTitle: "NBA Committee", contentUrl: '/committe/nba-committee' }
        ]
    }
]
const link5 = [
    {
        headings: 'Alumni Association',
        content: [
            { contentTitle: "Objective of Alumni Association", contentUrl: '/alumni/objective' },
            { contentTitle: "Programs Conducted", contentUrl: '/alumni/programs' },
            { contentTitle: "Photo Gallery", contentUrl: '/alumni/photo-gallery' },
            { contentTitle: "Alumni Membership", contentUrl: '/alumni/membership' },
            { contentTitle: "Alumni Registration Form", contentUrl: '/alumni/registration-form' }
        ]
    }
]
const link6 = [
    {
        headings: 'Achievements of GPS',
        content: [
            { contentTitle: "Researches By Faculty", contentUrl: '/' },
            { contentTitle: "Patents Of Faculties", contentUrl: '/' },
            { contentTitle: "Publications By GPS", contentUrl: '/' },
        ]
    }
]
export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const mobileNavRef = useRef(null);
    const mobileNavIcon = useRef(null);
    const [showMobileNav, setShowMobileNav] = useState(false)
    function handleMobileNav() {
        setShowMobileNav(!showMobileNav)
    }
    function handleClickOutside(event){
        if (
            mobileNavIcon.current && 
            mobileNavRef.current && 
            !mobileNavIcon.current.contains(event.target) && 
            !mobileNavRef.current.contains(event.target)
        ) {
            setShowMobileNav(false);
        }
    }
    useEffect(()=>{
    document.addEventListener('touchstart', handleClickOutside)
    return ()=>{
        document.removeEventListener('touchstart', handleClickOutside)
    }
    }, [mobileNavRef])
    return (
        <>
            <header className="header-comp">
                {/* Mobile Navbar component */}
                <div className="mobile-home top-12 absolute m-4" style={{ width: '2.5rem' }}>
                    <Link to="/" id='home'>
                        <li className='list-none'>
                            <svg width="25" height="15" viewBox="0 0 32 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M26.9779 14.0846V23.2328C26.9779 23.5632 26.8572 23.8491 26.6158 24.0905C26.3744 24.3319 26.0885 24.4526 25.7582 24.4526H18.4395V17.134H13.5604V24.4526H6.2418C5.91145 24.4526 5.62556 24.3319 5.38415 24.0905C5.14274 23.8491 5.02203 23.5632 5.02203 23.2328V14.0846C5.02203 14.0718 5.02521 14.0528 5.03156 14.0274C5.03791 14.002 5.04109 13.9829 5.04109 13.9702L16 4.93626L26.9589 13.9702C26.9716 13.9956 26.9779 14.0337 26.9779 14.0846ZM31.2281 12.7695L30.0464 14.1799C29.9448 14.2942 29.8114 14.3641 29.6462 14.3895H29.589C29.4238 14.3895 29.2904 14.345 29.1888 14.2561L16 3.25908L2.81119 14.2561C2.65872 14.3577 2.50625 14.4022 2.35378 14.3895C2.1886 14.3641 2.05519 14.2942 1.95354 14.1799L0.771883 12.7695C0.670235 12.6424 0.625764 12.4931 0.63847 12.3216C0.651176 12.1501 0.721059 12.0135 0.848119 11.9118L14.5515 0.495532C14.9581 0.165177 15.4409 0 16 0C16.5591 0 17.0419 0.165177 17.4485 0.495532L22.0989 4.38356V0.667063C22.0989 0.489179 22.156 0.343061 22.2704 0.228707C22.3847 0.114354 22.5309 0.0571768 22.7087 0.0571768H26.3681C26.5459 0.0571768 26.6921 0.114354 26.8064 0.228707C26.9208 0.343061 26.9779 0.489179 26.9779 0.667063V8.44311L31.1519 11.9118C31.2789 12.0135 31.3488 12.1501 31.3615 12.3216C31.3742 12.4931 31.3297 12.6424 31.2281 12.7695Z" fill="white" />
                            </svg>
                        </li>
                    </Link>
                </div>
                <div className="mobile-menu top-12 absolute right-0 m-4" ref={mobileNavIcon} onClick={handleMobileNav}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="25" height="25"><path fill="#ffffff" d="M8.2 13h47.5v6.3H8.2zM8.2 28.8h47.5v6.4H8.2zM8.2 44.7h47.5V51H8.2z" className="color134563 svgShape"></path></svg>
                </div>
                <nav ref={mobileNavRef} className={`mobile-dropdown-menu ${showMobileNav ? 'show-mob-nav': 'hide-mob-nav'}`}>
                    <div className="mobile-header-location flex items-center sm:justify-center">
                        <lord-icon
                            src="https://cdn.lordicon.com/surcxhka.json"
                            trigger="loop"
                            state="in-jump-dynami"
                            colors="primary:#ffffff,secondary:#e4e4e4"
                            style={{width:'100px', height: '100px'}}
                            class="invert">
                        </lord-icon>
                        <p className="college-address mx-3">
                            Government Polytechnic, Sakoli Sendurwafa Sakoli, Maharashtra 441802
                        </p>
                    </div>
                    <div>
                        <MobileNav url='#' link='Academics' ddcontent={link1} />
                    </div>
                    <div>
                        <MobileNav url='#' link='Student Corner' ddcontent={link2} />
                    </div>
                    <div>
                        <Link to='/training-placements'><li>Training and Placements
                        </li>
                        </Link>
                    </div>
                    <div>
                        <MobileNav url='#' link='Committees' ddcontent={link4} />
                    </div>
                    <div>
                        <MobileNav url='#' link='Alumni' ddcontent={link5} />
                    </div>
                    <div>
                        <MobileNav url='#' link='Research, Publication and Patents' ddcontent={link6} />
                    </div>
                </nav>
                <div className="logo-header flex justify-between text-white px-8 py-4">
                    <div className="logo flex items-center">
                        <img src={logo} alt="" width={90} />
                        <h2 className='clg-name'>GOVERNMENT POLYTECHNIC SAKOLI</h2>
                    </div>
                    <div className="header-location flex items-center sm:justify-center">
                        <lord-icon
                            src="https://cdn.lordicon.com/surcxhka.json"
                            trigger="loop"
                            state="in-jump-dynami"
                            colors="primary:#ffffff,secondary:#e4e4e4"
                            style={{ width: '100px', height: '100px' }}>
                        </lord-icon>

                        <p className="college-address mx-3">
                            Government Polytechnic, Sakoli Sendurwafa Sakoli, Maharashtra 441802
                        </p>
                    </div>
                </div>
                <nav className='slider-nav flex w-full justify-center'>
                    <ul className='flex justify-center items-center'>
                        <div>
                            <Link to="/" id='home'>
                                <li>
                                    <svg width="25" height="15" viewBox="0 0 32 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M26.9779 14.0846V23.2328C26.9779 23.5632 26.8572 23.8491 26.6158 24.0905C26.3744 24.3319 26.0885 24.4526 25.7582 24.4526H18.4395V17.134H13.5604V24.4526H6.2418C5.91145 24.4526 5.62556 24.3319 5.38415 24.0905C5.14274 23.8491 5.02203 23.5632 5.02203 23.2328V14.0846C5.02203 14.0718 5.02521 14.0528 5.03156 14.0274C5.03791 14.002 5.04109 13.9829 5.04109 13.9702L16 4.93626L26.9589 13.9702C26.9716 13.9956 26.9779 14.0337 26.9779 14.0846ZM31.2281 12.7695L30.0464 14.1799C29.9448 14.2942 29.8114 14.3641 29.6462 14.3895H29.589C29.4238 14.3895 29.2904 14.345 29.1888 14.2561L16 3.25908L2.81119 14.2561C2.65872 14.3577 2.50625 14.4022 2.35378 14.3895C2.1886 14.3641 2.05519 14.2942 1.95354 14.1799L0.771883 12.7695C0.670235 12.6424 0.625764 12.4931 0.63847 12.3216C0.651176 12.1501 0.721059 12.0135 0.848119 11.9118L14.5515 0.495532C14.9581 0.165177 15.4409 0 16 0C16.5591 0 17.0419 0.165177 17.4485 0.495532L22.0989 4.38356V0.667063C22.0989 0.489179 22.156 0.343061 22.2704 0.228707C22.3847 0.114354 22.5309 0.0571768 22.7087 0.0571768H26.3681C26.5459 0.0571768 26.6921 0.114354 26.8064 0.228707C26.9208 0.343061 26.9779 0.489179 26.9779 0.667063V8.44311L31.1519 11.9118C31.2789 12.0135 31.3488 12.1501 31.3615 12.3216C31.3742 12.4931 31.3297 12.6424 31.2281 12.7695Z" fill="white" />
                                    </svg>
                                </li>
                            </Link>
                        </div>

                        <div>
                            <Dropdown url='#' link='Academics' ddcontent={link1} />
                        </div>
                        <div>
                            <Dropdown url='#' link='Student Corner' ddcontent={link2} />
                        </div>
                        <div>
                            <Link to='/training-placements'>Training and Placements</Link>
                        </div>
                        <div>
                            <Dropdown url='#' link='Committees' ddcontent={link4} />
                        </div>
                        <div>
                            <Dropdown url='#' link='Alumni' ddcontent={link5} />
                        </div>
                        <div>
                            <Dropdown url='#' link='Research, Publication and Patents' ddcontent={link6} />
                        </div>
                    </ul>
                </nav>
            </header>
        </>
    )
}
