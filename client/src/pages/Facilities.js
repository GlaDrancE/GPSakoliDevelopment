import React, { useState } from 'react'
import { Slider } from '../components/Slider'
import Footer from '../components/Footer'
import SideMenu from '../components/SideMenu'
import { Route, useParams } from 'react-router-dom'
import Library from '../components/facilities-components/Library'
import Gymkhana from '../components/facilities-components/Gymkhana'
import CooperativeStore from '../components/facilities-components/CooperativeStore'
import Canteen from '../components/facilities-components/Canteen'
import BoysHostel from '../components/facilities-components/BoysHostel'


export default function Facilities() {
    const { facility } = useParams();
    let facilityMenuLinks = [
        { name: 'Library', path: '/facilities/library', id: 1 },
        { name: 'Gymkhana', path: '/facilities/gymkhana', id: 2 },
        { name: 'Student Cooperative Store', path: '/facilities/scs', id: 3 },
        { name: 'Canteen', path: '/facilities/canteen', id: 4 },
        { name: 'Boys Hostel', path: '/facilities/boys-hostel', id: 5 },
        { name: 'Internet', path: '/facilities/internet', id: 6 }
    ]
    return (
        <>
            <Slider />
            <div className="main-container">
                <div className="text-center">
                    <h1 className='heading'>Facilities</h1>
                </div>
                <div className='dynamic-container'>
                    <div className="dynamic-change-container">
                        {facility === 'library' && <Library />}
                        {facility === 'gymkhana' && <Gymkhana />}
                        {facility === 'scs' && <CooperativeStore />}
                        {facility === 'canteen' && <Canteen />}
                        {facility === 'boys-hostel' && <BoysHostel />}
                    </div>
                    <SideMenu links={facilityMenuLinks} />
                </div>
            </div>
        </>
    )
}
