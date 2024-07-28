import React, { useState } from 'react'
import { Slider } from '../components/Slider'
import Footer from '../components/Footer'
import SideMenu from '../components/SideMenu'
import { Route, useParams } from 'react-router-dom'
import ConductDiscipline from '../components/student-corner-components/ConductDiscipline'
import { ScholarShip } from '../components/student-corner-components/ScholarShip'
import { FeesStruct } from '../components/student-corner-components/FeesStruct'
import DigitalLibrary from '../components/student-corner-components/DigitalLibrary'



export default function StudentCorner() {
    const { page } = useParams();
    let studentMenuLinks = [
        { name: 'Conduct and Discipline', path: '/students-corner/conduct-discipline' },
        { name: 'Scholarship', path: '/students-corner/scholarship' },
        { name: 'Fee Structure', path: '/students-corner/fee-structure' },
        { name: 'Student Grievance Form', path: '/students-corner/students-grievance-form' },
        { name: 'DigitalLibrary', path: '/students-corner/digital-library' }
    ]
    return (
        <>
            <Slider />
            <div className="main-container">
                <div className="text-center">
                    <h1 className='heading'>Student <span className='heading-red'>Corner</span></h1>
                </div>
                <div className='dynamic-container'>
                    <div className="dynamic-change-container">
                        {page === 'conduct-discipline' && <ConductDiscipline />}
                        {page === 'scholarship' && <ScholarShip />}
                        {page === 'fee-structure' && <FeesStruct />}
                        {page === 'digital-library' && <DigitalLibrary />}
                        {/* {page === 'canteen' && <Canteen />}
                        {page === 'boys-hostel' && <BoysHostel />} */}
                    </div>
                    <SideMenu links={studentMenuLinks} />
                </div>
            </div>
        </>
    )
}
