import React, { useEffect, useState } from 'react'
import { Slider } from '../components/Slider'
import SideMenu from '../components/SideMenu'
import { useParams } from 'react-router-dom'

import { NBAaccreditation } from '../components/accreditation-reports/NBAaccreditation'
import { EoaReports } from '../components/accreditation-reports/EoaReports'
import { MonitoringReports } from '../components/accreditation-reports/MonitoringReports'
import { AuditReports } from '../components/accreditation-reports/AuditReports'

export const AccreditationReports = () => {
    const { page } = useParams();
    const [monitoringReport, setMonitoringReport] = useState([])
    const [eoaData, setEoaData] = useState([])
    const [auditReport, setAuditReport] = useState([])
    const [nbaAccreditation, setNbaAccreditation] = useState([])
    let MenuLinks = [
        { name: 'NBA Accreditation', path: '/accreditation-reports/nba-accreditation' },
        { name: 'EOA (AICTE) Reports', path: '/accreditation-reports/eoa-reports' },
        { name: 'Monitoring Report', path: '/accreditation-reports/monitoring-reports' },
        { name: 'Audit Report', path: '/accreditation-reports/audit-reports' }
    ]
    useEffect(() => {
        const monitoringReport = async () => {
            let response = await fetch("https://gpsakoli.ac.in/public/api/connection.php?monitoringReport", {
                method: "GET"
            });

            let data = await response.json();
            setMonitoringReport(data.data)
        };
        const eoaData = async () => {
            let response = await fetch("https://gpsakoli.ac.in/public/api/connection.php?eoaReports", {
                method: "GET"
            });

            let data = await response.json();
            setEoaData(data.data)
        };
        const auditReport = async () => {
            let response = await fetch("https://gpsakoli.ac.in/public/api/connection.php?auditReport", {
                method: "GET"
            });

            let data = await response.json();
            setAuditReport(data.data)
            console.log(data.data);
        }
        const NBAReport = async () => {
            let response = await fetch("https://gpsakoli.ac.in/public/api/connection.php?nbaReports", {
                method: "GET"
            });

            let data = await response.json();
            setNbaAccreditation(data.data)
            console.log(data.data);
        }
        auditReport();
        eoaData()
        NBAReport();
        monitoringReport();
    }, [])

    return (
        <>
            <Slider />
            <div className="main-container">
                <div className="text-center">
                    <h1 className="heading"><span className='heading-red'>Accreditation</span> and Reports</h1>
                </div>
                <div className="dynamic-container">
                    <div className="dynamic-change-container">
                        {page === 'nba-accreditation' && <NBAaccreditation data={nbaAccreditation} />}
                        {page === 'eoa-reports' && <EoaReports data={eoaData} />}
                        {page === 'monitoring-reports' && <MonitoringReports data={monitoringReport} />}
                        {page === 'audit-reports' && <AuditReports data={auditReport} />}
                    </div>
                    <SideMenu links={MenuLinks} />
                </div>
            </div>
        </>
    )
}
