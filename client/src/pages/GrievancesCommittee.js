import React, { useState, useEffect, Suspense } from 'react'
import Table from '../components/Table';
import { Slider } from '../components/Slider';
import { useParams } from 'react-router-dom';
import Preloader from '../components/Preloader';

export const GrievancesCommittee = () => {
    const [committeeData, setCommitteeData] = useState([])
    const { committee } = useParams();
    // const committeeData = [
    //     { columns: ["Sr No.", "Faculty Name", "Designation", "Mobile No."] },
    //     {
    //         rows: [
    //             ["1", "Mrs. K. M. Gaidhane, Sr. Lecturer, Electrical Engg. Dept", "Co-ordinator", "9970076839"],
    //             ["2", "Mrs. S. N. Katekar(Gadekar), Chemistry Lecturer", "Member", "9923815060"],
    //             ["3", "Mrs. K. P. Thaware, Lecturer, Mech. Engg. Dept", "Member", "8600013881"],
    //             ["4", "Mr. V. B. Khobragade, Lecturer, Computer Tech. Dept", "Member", "9766953403"],
    //             ["5", "Mr.N. C. Basena, I/c Registrar", "Member", "9503269764"],
    //             ["6", "Dr.Sakuntala. H. Kapgate, Doctor", "Member", "7507096115"],
    //             ["7", "Mrs.Suchita. Agashe, NGO", "Member", "8390727718"]
    //         ],
    //     },
    // ]


    useEffect(() => {

        const fetchCommittee = async () => {
            let response = await fetch("https://gpsakoli.ac.in/public/api/connection.php?committees=", {
                method: "GET",
            });

            let data = await response.json();
            console.log(data);
            setCommitteeData(data.data);

        }
        fetchCommittee();

    }, [])
    return (
        <>
            {console.log(committeeData)}
            <Slider />
            <h1 className="heading text-center">Grievances <span className="heading-red"> Committee</span></h1>
            <div className="main-container">
                {committeeData.map((committee) => (
                    <div className="my-5" id={committee.CommitteeName.split(' ').join('-').toLowerCase()}>
                        <h1 className="sub-heading heading-top-left-line">{committee.CommitteeName}: ({committee.SessionName})</h1>
                        <Table data={committee} />
                    </div>
                ))}
            </div>
        </>
    )
}
