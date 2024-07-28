import React, { useState, useEffect, Suspense, lazy } from 'react'
import { Slider } from '../components/Slider'
import SideMenu from "../components/SideMenu"
import DeptAbout from '../components/department-components/DeptAbout';
// import DeptFaculty from '../components/department-components/DeptFaculty';
import DeptResultAnalysis from '../components/department-components/DeptResultAnalysis';
import DeptTimeTable from '../components/department-components/DeptTimeTable';
import DeptNewsLetter from '../components/department-components/DeptNewsLetter';
import DeptCurriculum from '../components/department-components/DeptCurriculum';
import DeptLaboratory from '../components/department-components/DeptLaboratory';
import { DeptPortfolio } from '../components/department-components/DeptPortfolio';
import DeptIRG from '../components/department-components/DeptIRG';
import DigitalLibrary from '../components/student-corner-components/DigitalLibrary';
import { useParams } from 'react-router-dom';
import Preloader from '../components/Preloader';
import DeptEventAnalysis from '../components/department-components/DeptEventAnalysis';
import DeptMous from '../components/department-components/DeptMous';
const DeptFaculty = lazy(()=>import('../components/department-components/DeptFaculty'))
export default function Department() {
    const [labsData, setLabsData] = useState([])
    const [mousData, setMousData] = useState([])
    const [supportingStaffData, setSupportingStaffData] = useState([])
    const [deptPortfolioData, setDeptPortfolioData] = useState([])
    const [curriculumData, setCurriculumData] = useState([])
    const [irg, setIRGData] = useState([])
    const [timeTable, setTimeTable] = useState([])
    const [resultAnalysis, setResultAnalysis] = useState([])
    const [eventAnalysis, setEventAnalysis] = useState([])
    const deptContent = useParams()
    let deptMenuLinks = [
        { name: 'About Department', path: '/dept/' + deptContent.branch + '/about-department' },
        { name: 'Department Portfolio', path: '/dept/' + deptContent.branch + '/department-portfolio' },
        { name: 'Digital Library', path: '/dept/' + deptContent.branch + '/digital-library' },
        { name: 'Faculties', path: '/dept/' + deptContent.branch + '/faculties' },
        { name: 'Result Analysis', path: '/dept/' + deptContent.branch + '/result-analysis' },
        { name: 'Event & Analysis', path: '/dept/' + deptContent.branch + '/event-analysis' },
        { name: 'MOUs', path: '/dept/' + deptContent.branch + '/mous' },
        { name: 'Laboratories', path: '/dept/' + deptContent.branch + '/laboratories' },
        { name: 'Curriculum', path: '/dept/' + deptContent.branch + '/curriculum' },
        { name: 'Time Table', path: '/dept/' + deptContent.branch + '/time-table' },
        { name: 'News Letter', path: '/dept/' + deptContent.branch + '/news-letter' },
        { name: 'Internal Revenue Generation', path: '/dept/' + deptContent.branch + '/internal-revenue-generation' },
    ]
    useEffect(() => {
        const labsData = async () => {
            let response = await fetch("https://gpsakoli.ac.in/public/api/connection.php?labs=" + deptContent.branch, {
                method: "GET"
            });

            let data = await response.json();
            setLabsData(data.data)
        }
        const mousData = async () => {
            let response = await fetch("https://gpsakoli.ac.in/public/api/connection.php?mouReports=" + deptContent.branch, {
                method: "GET"
            });

            let data = await response.json();
            setMousData(data.data)
        }
        const supportingStaffData = async () => {
            let response = await fetch("https://gpsakoli.ac.in/public/api/connection.php?supporting-staff-details", {
                method: "GET"
            });

            let data = await response.json();
            setSupportingStaffData(data.data)
        }
        const deptPortfolio = async () => {
            let response = await fetch("https://gpsakoli.ac.in/public/api/connection.php?dept-portfolio=" + deptContent.branch, {
                method: "GET"
            });

            let data = await response.json();
            setDeptPortfolioData(data.data)
            console.log(data)
        }

        const curriculum = async () => {
            let response = await fetch("https://gpsakoli.ac.in/public/api/connection.php?curriculum=" + deptContent.branch, {
                method: "GET"
            });

            let data = await response.json();
            setCurriculumData(data.data)
        }
        const irg = async () => {
            let response = await fetch("https://gpsakoli.ac.in/public/api/connection.php?irg=" + deptContent.branch, {
                method: "GET"
            });

            let data = await response.json();
            setIRGData(data.data)
            console.log(data.data);
        }
        const timeTable = async () => {
            let response = await fetch("https://gpsakoli.ac.in/public/api/connection.php?timeTable=" + deptContent.branch, {
                method: "GET"
            });

            let data = await response.json();
            setTimeTable(data.data)
            console.log(data.data);
        }
        const resultAnalysis = async () => {
            let response = await fetch("https://gpsakoli.ac.in/public/api/connection.php?resultAnalysis=" + deptContent.branch, {
                method: "GET"
            });

            let data = await response.json();
            setResultAnalysis(data.data)
            console.log(data.data);
        }
        const eventAnalysis = async () => {
            let response = await fetch("https://gpsakoli.ac.in/public/api/connection.php?eventAnalysis=" + deptContent.branch, {
                method: "GET"
            });

            let data = await response.json();
            setEventAnalysis(data.data)
            console.log(data.data);
        }
        eventAnalysis();
        resultAnalysis();
        timeTable();
        irg();
        curriculum();
        deptPortfolio();
        supportingStaffData();
        labsData();
        mousData()
        // staffData();
    }, [])
    return (
        <>
            <Slider />
            <div className="main-container">

                <div className="text-center">
                    <h1 className='heading'>Department of {deptContent.branch == 'computer' ? 'Computer technology' : deptContent.branch == 'civil' ? 'Civil Engineering' : deptContent.branch == 'electrical' ? 'Electrical Engineering' : deptContent.branch == 'mechanical' ? 'Mechanical Engineering' : 'Electronics and Tele. Comm. Engineering'} </h1>
                    <h1 className='heading heading-red'>{deptContent.branch !== "electronics" && "NBA Accredited"}</h1>
                </div>
                <div className="dynamic-container">
                    <div className="dynamic-change-container">
                        {deptContent.content === 'about-department' && <DeptAbout />}
                        {deptContent.content === 'department-portfolio' && <DeptPortfolio data={deptPortfolioData} />}
                        {deptContent.content === 'digital-library' && <DigitalLibrary />}
                        {deptContent.content === 'faculties' && <Suspense fallback={<p>Loading...</p>}>
                            <DeptFaculty supportingStaff={supportingStaffData} />
                        </Suspense>
                             }
                        {deptContent.content === 'curriculum' && <DeptCurriculum curriculum={curriculumData} />}
                        {deptContent.content === 'result-analysis' && <DeptResultAnalysis data={resultAnalysis} />}
                        {deptContent.content === 'event-analysis' && <DeptEventAnalysis data={eventAnalysis} />}
                        {deptContent.content === 'mous' && <DeptMous MousData={mousData} />}
                        {deptContent.content === 'laboratories' && <DeptLaboratory LabsData={labsData} />}
                        {deptContent.content === 'time-table' && <DeptTimeTable data={timeTable} />}
                        {deptContent.content === 'news-letter' && <DeptNewsLetter />}
                        {deptContent.content === 'internal-revenue-generation' && <DeptIRG data={irg} />}

                    </div>
                    <SideMenu links={deptMenuLinks} />
                </div>
            </div>
        </>
    )
}

