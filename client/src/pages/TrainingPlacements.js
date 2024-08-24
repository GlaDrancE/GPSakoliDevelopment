import React from 'react'
import { Slider } from '../components/Slider'
import SideMenu from '../components/SideMenu'
import { useParams } from 'react-router-dom'
import Recruiters from '../components/Recruiters'
import Footer from '../components/Footer'
import { Table } from '../components/Table'


export const TrainingPlacements = () => {
    const { page } = useParams();
    let MenuLinks = [
        { name: 'Activities under T & P Cell', path: '/training-placements/activity-under-cell' },
        { name: 'Team Members', path: '/training-placements/team-member' },
        { name: 'Recruiters', path: '/training-placements/recruiters' },
        { name: 'Online Training Links', path: '/training-placements/online-training-links' }
    ]
    const PlacementDataPrev = [
        { columns: ["Academic Session", "Total Intake", "No. of Companies arrived for Campus Placement", "Total No. of Student Placed", "No. of students got offer letter of intent from the company", "No. of students expected to join the company", "Reason for Non Recruitment after giving offer, if any"] },
        {
            rows: [
                [
                    "Academic Year 2017-2018",
                    "300",
                    "5",
                    "61",
                    "61",
                    "42",
                ],
                [
                    "Academic Year 2018-2019",
                    "300",
                    "5",
                    "44",
                    "44",
                    "36",
                ],
                [
                    "Academic Year 2019-2020",
                    "300",
                    "6",
                    "73",
                    "73",
                    "55",
                    "Students Opting For Higher Education",
                ],
                [
                    "Academic Year 2020-2021",
                    "300",
                    "6",
                    "30",
                    "30",
                    "28",
                ],
                [
                    "Academic Year 2021-2022",
                    "300",
                    "8",
                    "168",
                    "168",
                    "92",
                ],
            ],
        },
    ];
    const TeamMemberData = [
        { columns: ["Sr No.", "Facilty Name", "Designation"] },
        {
            rows: [
                [
                    "1",
                    "Mr. R. S. Khobragade, Sr. Lecturer, Mechanical Engg. Dept",
                    "Co-oridnator",
                ],
                [
                    "2",
                    "Mr. S. R. Ahirkar, Lecturer, Electrical Engg. Dept",
                    "Member",
                ],
            ],
        },
    ];
    const PlacementRecord = [
        { columns: ["Company", "Total Students Selected", "Package In LPA"] },
        {
            rows: [
                [
                    "Bajaj Auto Ltd",
                    "17",
                    "1.8LPA",
                ],
                [
                    "L&T Construction",
                    "8",
                    "3.6LPA",
                ],
                [
                    "Triveni Turbines",
                    "1",
                    "3.6LPA",
                ],
                [
                    "Infosis Limited Banglore",
                    "1",
                    "4.8LPA",
                ],
                [
                    "Uttam Galva Steel Limited",
                    "17",
                    "3.6LPA",
                ],
                [
                    "Mahindra & Mahindra",
                    "3",
                    "1.8LPA",
                ],
                [
                    "Mittal Steel",
                    "2",
                    "2.8LPA",
                ],
                [
                    "Subros Ltd Pune",
                    "87",
                    "1.44LPA",
                ],
                [
                    "Epitome Component Pvt Ltd",
                    "19",
                    "1.8LPA",
                ],
                [
                    "Sandip Metal Pvt Ltd",
                    "1",
                    "1.8LPA",
                ],
                [
                    "Arms India Pvt Ltd",
                    "10",
                    "1.86LPA",
                ],
            ],
        },
    ]
    const rules = [
        "Students are expected to come in the institute as per institute routine",
        "Students are expected to follow academic ethics in the academic buildings. Deviant behavior such as hooting, whistling, loitering, etc. Will be treated as an act of indiscipline",
        "Students are expected to use the class rooms, library or boys /Girls common room available in the academic building for self study and shall avoid sitting in staircases or circulation areas hindering free movement",
        "Access to academic buildings beyond the Institute timing and on holidays without written permission from the concerned Head of Department will be treated as a case of indiscipline.",
        "Keep the campus neat and clean. Do not litter waste anywhere in the campus except in the available waste baskets in the campus",
        "Consumption of intoxicants / psychotropic substances in any form or smoking or using chewing gum, panmasala ,etc. are strictly prohibited.",
    ];
    return (
        <>
            <Slider />
            <div className="main-container">
                <div className="text-center">
                    <h1 className="heading">Training <span className='heading-red'>And</span> Placements</h1>
                </div>
                <div className="dynamic-container">
                </div>
                <div className="conduct-discipline">
                    <h1 className="sub-heading">Activities under Training & Placement Cell</h1>
                    <ol style={{ listStyle: "decimal", paddingLeft: "1.5rem" }}>
                        {rules.map((rule) => (
                            <li style={{ marginBottom: "1rem" }}>{rule}</li>
                        ))}
                    </ol>
                </div>
                <div>
                    <h1 className="sub-heading">Placement Policy-2023</h1>
                    <li className='list-style pl-3 my-4'>The placement policy will be applicable to all students registered
                        for the campus placements of Government Polytechnic Sakoli and
                        is to be followed during the entire duration of the placement season.</li>
                    <div>
                        <h4 className="text-lg font-bold">Students for CriteriaEligibility</h4>
                        <li className="list-style pl-3 my-4">Student of All Branches of Government Polytechnic Sakoli are expected to complete his/her diploma by June/July of respective academic year is eligible to register for Placement.</li>
                        <li className="list-style pl-3 my-4">Criteria of Eligibility for Every Company varies so criteria given by that particular company will be followed.</li>
                    </div>
                    <div>
                        <h4 className="text-lg font-bold">General Guidelines</h4>
                        <li className="list-style pl-3 my-4">
                            The role of the TPO (Training and placement officer) is of a facilitator and counselor for placement
                            related activities. TPO does NOT guarantee a job. Applying for a company or joining a company is
                            entirely the responsibility/decision of the student concerned.
                        </li>
                        <li className="list-style pl-3 my-4">
                            Students who are placed in a company, having a package below 1.5 Lakhs will be permitted to
                            participate in placement drives only for those companies that are providing an annual package of 2
                            Lakhs and above.
                        </li>
                        <li class="list-style pl-3 my-4">Students who are placed in a company, having a package between 1.5 Lakhs and 2 Lakhs will be permitted to participate in placement drives only for those companies that are providing an annual package of 2 Lakhs and above.</li>
                        <li class="list-style pl-3 my-4">Students who are placed in a company, having a package above 2 Lakhs will be permitted to participate in placement drives for companies that are providing an annual package of 2.5 Lakhs and above.</li>
                        <li class="list-style pl-3 my-4">Placed students will be permitted to attend placement drives in other companies regardless of amount of package and domain of the company, only when 70% students in their respective branches are placed.</li>
                        <li class="list-style pl-3 my-4">There is no restriction on applying/appearing in interviews until the first job is secured. A student will be considered to have secured a job if his/her name appears in the selection list or an appointment letter is received in the TPO.</li>
                        <li class="list-style pl-3 my-4">Students must keep their Identity Card with them at the time of PPT/Test/Group Discussion/ Interviews, and produce the same when demanded by the visiting team or TPO staff or their representatives.</li>
                        <li class="list-style pl-3 my-4">Once a student has been shortlisted by a company for placement process and receive an offer letter he /she is NOT allowed to appear for the placement drive thereafter.</li>
                        <li class="list-style pl-3 my-4">All students are responsible to stay in constant touch with Training &amp; Placement Coordinators for details and updates regarding Placement Matters.</li>

                    </div>
                    <div>
                        <h4 className="text-lg font-bold">Code of Conduct</h4>
                        <li class="list-style pl-3 my-4">Any sort of misbehavior on the part of students which affects the decorum of the PPT or the selection process or the reputation of the TPO attracts to cancellation the registration from placement cell. The fine may be increased at the discretion of the Placement Office as per the severity of the situation. e.g. - Asking inappropriate questions during PPT or Interview.</li>
                        <li class="list-style pl-3 my-4">Cheating in all forms or marking proxies during the selection process is strictly prohibited and those caught indulging in such activities would lose all their points and debarred from the placement process. Also note that no concessions in any form shall be provided in such case.</li>


                    </div>
                </div>
                <h1 className="sub-heading">Team Member</h1>
                <Table data={TeamMemberData} />
                <Recruiters />
                <div>
                    <h1 className="sub-heading">
                        Placement Record 2022
                    </h1>
                    <Table data={PlacementRecord} />
                    <h1 className='heading-red'>Total Students Selected till 25 july 2022 are 166</h1>

                    <li>G.E India</li>
                    <li>JSW Pvt Ltd</li>
                    <li>Anand automotive Ltd</li>
                    <li>Advik Hitech Pvt Ltd</li>
                    <li>Kirloskar Brothers Ltd</li>
                    <li>Samsonite Pvt Ltd
                        Total 6 Companies Results Awaiting</li>
                </div>

                <div className='my-8'>
                    <h1 className="sub-heading">Last Year Placement Data</h1>
                    <Table data={PlacementDataPrev} />
                </div>
                <div className='my-8'>
                    <h1 className="sub-heading">From ACITE (All India Council For Technical Education)</h1>
                    <li className='text-blue-500'><a href="https://internship.aicte-india.org/">National Internship Portal</a></li>
                    <li className='text-blue-500'><a href="https://ekumbh.aicte-india.org/index.php">E-Kumbh, Digital Library to get all Ebooks in Indian Languages</a></li>
                    <li className='text-blue-500'><a href="https://1crore.aicte-india.org/">Digital Skilling - Making India The Global Digital Talent Hub</a></li>
                </div>
                <div className='my-8'>
                    <h1 className="sub-heading">Professional Training Links</h1>
                    <li className='text-blue-500'><a href="https://infyspringboard.onwingspan.com/">Infosys Portal for Industry Specific Training Skills</a></li>
                    <li className='text-blue-500'><a href="https://www.tcsion.com/category/online-courses/">Tata Consultancy Services Portal for Industry Specific Training Skills</a></li>
                    <li className='text-blue-500'><a href="https://nptel.ac.in/">Group of IIT Portal(NPTEL) for Academic Specific Learning</a></li>
                </div>
            </div >
        </>
    )
}
