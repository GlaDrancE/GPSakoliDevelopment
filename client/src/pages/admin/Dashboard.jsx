import React, { useState, useEffect } from "react";
import Sidebar from "../../components/SideBar";
import StaffTable, {
  SupportingStaffTable,
  CurriculumTable,
  DeptPortfolioTable,
  DigitalLibTable,
  EoATable,
  EventAnalysisTable,
  IRGTable,
  MOUsTable,
  MonitoringReportTable,
  NewsLettersTable,
  NewsesTable,
  ResultAnalysisTable,
  StudentListTable,
  TimeTableTable,
  LaboratoryTable,
  PublicationTable,
  AdmissionProcessTable,
} from "../../components/DashboardTable";
import { AuditReportTable } from "../../components/DashboardTable";
import FacultyForm from "./Forms/FacultyForm";
import { useParams } from "react-router-dom";
import CurriculamForm from "./Forms/CurriculamForm";
import DigitalLibraryForm from "./Forms/DigitalLibForm";
import CommiteesForm from "./Forms/CommitteesForm";
import AuditReportForm from "./Forms/AuditReportForm";
import EventAnalysisForm from "./Forms/EventForm";
import GPSNewsForm from "./Forms/GPSNewsForm";
import IRGForm from "./Forms/IRGForm";
import MonitoringReportForm from "./Forms/MonitoringReportForm";
import NewsletterForm from "./Forms/NewsletterForm";
import Portfolio from "./Forms/PortfolioDataForm";
import StudentListForm from "./Forms/StudentListForm";
import MoUsForm from "./Forms/MoUsForm";
import TimeTableForm from "./Forms/TimeTableForm";
import ResultAnalysisForm from "./Forms/ResultAnalysisForm";
import FacultySupportingForm from "./Forms/FactultySupportingForm";
import LaboratoryForm from "./Forms/LaboratoryForm";
import EoaForm from "./Forms/EoaForm";
import PublicationForm from "./Forms/PublicationForm";
import StudentAdmissionProcess from "./Forms/StudentAdmissionProcess";
export const Dashboard = () => {
  const { page } = useParams();
  const [recordData, setRecordData] = useState([]);
  const fetchedData = async (url) => {
    let response = await fetch(
      "https://gpsakoli.ac.in/public/api/connection.php?" + url,
      { method: "GET" }
    );

    let data = await response.json();
    setRecordData(data.data);
  };
  const [isEdit, setIsEdit] = useState("Edit");
  function onEdit(url, sno) {
    const row = document.querySelector(`#${sno}`);
    const td = row.querySelectorAll("td:not(:last-child)");
    const edit = row.querySelector(".edit-btn");
    const th = document.querySelectorAll("table th:not(:last-child)");
    td.forEach((element) => {
      element.setAttribute("contenteditable", "true");
    });

    if (edit.innerText == "Edit") {
      edit.innerText = "Save";
    } else {
      let data = {};
      th.forEach((element, index) => {
        data[element.innerText.split(" ").join("_").toLowerCase()] =
          td[index].innerText;
      });
      td.forEach((element) => {
        element.setAttribute("contenteditable", "false");
      });
      console.log(data);
      edit.innerText = "Edit";
      editData(url, data, sno.split("-")[1]);
    }
  }
  async function editData(url, editdata, sno) {
    const formData = new FormData();
    for (var key in editdata) {
      if (editdata.hasOwnProperty(key)) {
        formData.append(key, editdata[key]);
      }
    }
    let response = await fetch(
      "https://gpsakoli.ac.in/public/api/connection.php?action=" +
        url +
        "&sno=" +
        sno,
      { method: "POST", body: formData }
    );
    let data = response.text();
    console.log(data);
  }
  const onDelete = async (url, i) => {
    let response = await fetch(
      "https://gpsakoli.ac.in/public/api/connection.php?action=" +
        url +
        "&sno=" +
        i,
      { method: "GET" }
    );

    let data = await response.text();
    console.log(data);
  };

  const manageDataCols = {
    auditReport: ["Session", "PDF", "Actions"],
    monitoringReport: ["Session", "PDF", "Actions"],
    admissionProcess: ["Session", "PDF", "Actions"],
    committees: [""],
    eoa: ["Session", "PDF", "Actions"],
    eoa: ["Department", "PDF", "Actions"],
    news: [
      "Session",
      "News Title",
      "News Artical Image",
      "Date of Event",
      "Actions",
    ],
    digitalLibrary: [
      "Subject Name",
      "Department",
      "Title Of Book",
      "Author Name",
      "Book PDF",
      "Cover Page Image",
      "Actions",
    ],
    resultAnalysis: [
      "Session",
      "Department",
      "Odd Sem Result",
      "Even Sem Result",
      "Actions",
    ],
    eventAnalysis: [
      "Session",
      "Department",
      "Event Name",
      "Image",
      "Date Of Event",
      "Activity Description",
      "Actions",
    ],
    curriculum: ["Department", "Semester", "PDF", "Actions"],
    mous: [
      "Session",
      "Department",
      "Firm Name",
      "Valid Upto",
      "PDF",
      "Actions",
    ],
    timeTable: [
      "Session",
      "Department",
      "Odd Sem Result",
      "Even Sem Result",
      "Actions",
    ],
    newsLetters: ["Session", "Department", "PDF", "Actions"],
    irg: ["Session", "Department", "PDF", "Actions"],
    labs: ["Session", "Department", "PDF", "Actions"],
    studentList: ["Session", "Department", "Semester", "PDF", "Actions"],
    departmentPortfolio: ["Session", "Department", "PDF", "Actions"],
    staff: [
      "Image",
      "Name",
      "Designation",
      "Qualification",
      "Experience",
      "Contact",
      "Branch",
      "Email",
      "Actions",
    ],
    suppprting_staff: [
      "Image",
      "Name",
      "Designation",
      "Qualification",
      "Experience",
      "Contact",
      "Branch",
      "Email",
      "Actions",
    ],
    publications: ["Faculty Name", "Department", "PDF", "Actions"],
  };

  return (
    <>
      <div
        className="dashboard-container grid"
        style={{ gridTemplateColumns: "250px 100%" }}
      >
        <div>
          <Sidebar />
        </div>
        <div className="dashboard-content p-4">
          {page === "manage-staff-data" && (
            <StaffTable
              fetched_data={fetchedData}
              fetchedData={recordData}
              onEdit={onEdit}
              onDelete={onDelete}
              cols={manageDataCols["staff"]}
            />
          )}
          {page === "manage-audit-report" && (
            <AuditReportTable
              fetched_data={fetchedData}
              fetchedData={recordData}
              onEdit={onEdit}
              onDelete={onDelete}
              cols={manageDataCols["auditReport"]}
            />
          )}
          {page === "manage-monitoring-report" && (
            <MonitoringReportTable
              fetched_data={fetchedData}
              fetchedData={recordData}
              onEdit={onEdit}
              onDelete={onDelete}
              cols={manageDataCols["monitoringReport"]}
            />
          )}
          {page === "manage-admission-process" && (
            <AdmissionProcessTable
              fetched_data={fetchedData}
              fetchedData={recordData}
              onEdit={onEdit}
              onDelete={onDelete}
              cols={manageDataCols["admissionProcess"]}
            />
          )}
          {page === "manage-eoa" && (
            <EoATable
              fetched_data={fetchedData}
              fetchedData={recordData}
              onEdit={onEdit}
              onDelete={onDelete}
              cols={manageDataCols["eoa"]}
            />
          )}
          {page === "manage-gps-newses" && (
            <NewsesTable
              fetched_data={fetchedData}
              fetchedData={recordData}
              onEdit={onEdit}
              onDelete={onDelete}
              cols={manageDataCols["news"]}
            />
          )}
          {page === "manage-digital-library" && (
            <DigitalLibTable
              fetched_data={fetchedData}
              fetchedData={recordData}
              onEdit={onEdit}
              onDelete={onDelete}
              cols={manageDataCols["digitalLibrary"]}
            />
          )}
          {page === "manage-result-analysis" && (
            <ResultAnalysisTable
              fetched_data={fetchedData}
              fetchedData={recordData}
              onEdit={onEdit}
              onDelete={onDelete}
              cols={manageDataCols["resultAnalysis"]}
            />
          )}
          {page === "manage-event-analysis" && (
            <EventAnalysisTable
              fetched_data={fetchedData}
              fetchedData={recordData}
              onEdit={onEdit}
              onDelete={onDelete}
              cols={manageDataCols["resultAnalysis"]}
            />
          )}
          {page === "manage-mous" && (
            <MOUsTable
              fetched_data={fetchedData}
              fetchedData={recordData}
              onEdit={onEdit}
              onDelete={onDelete}
              cols={manageDataCols["mous"]}
            />
          )}
          {page === "manage-curriculum" && (
            <CurriculumTable
              fetched_data={fetchedData}
              fetchedData={recordData}
              onEdit={onEdit}
              onDelete={onDelete}
              cols={manageDataCols["curriculum"]}
            />
          )}
          {page === "manage-timeTable" && (
            <TimeTableTable
              fetched_data={fetchedData}
              fetchedData={recordData}
              onEdit={onEdit}
              onDelete={onDelete}
              cols={manageDataCols["timeTable"]}
            />
          )}
          {page === "manage-newsLetters" && (
            <NewsLettersTable
              fetched_data={fetchedData}
              fetchedData={recordData}
              onEdit={onEdit}
              onDelete={onDelete}
              cols={manageDataCols["newsLetters"]}
            />
          )}
          {page === "manage-irg" && (
            <IRGTable
              fetched_data={fetchedData}
              fetchedData={recordData}
              onEdit={onEdit}
              onDelete={onDelete}
              cols={manageDataCols["irg"]}
            />
          )}
          {page === "manage-studentList" && (
            <StudentListTable
              fetched_data={fetchedData}
              fetchedData={recordData}
              onEdit={onEdit}
              onDelete={onDelete}
              cols={manageDataCols["studentList"]}
            />
          )}
          {page === "manage-departmentPortfolio" && (
            <DeptPortfolioTable
              fetched_data={fetchedData}
              fetchedData={recordData}
              onEdit={onEdit}
              onDelete={onDelete}
              cols={manageDataCols["departmentPortfolio"]}
            />
          )}
          {page === "manage-supporting-staff-data" && (
            <SupportingStaffTable
              fetched_data={fetchedData}
              fetchedData={recordData}
              onEdit={onEdit}
              onDelete={onDelete}
              cols={manageDataCols["staff"]}
            />
          )}
          {page === "manage-labs" && (
            <LaboratoryTable
              fetched_data={fetchedData}
              fetchedData={recordData}
              onEdit={onEdit}
              onDelete={onDelete}
              cols={manageDataCols["labs"]}
            />
          )}
          {page === "manage-publication" && (
            <PublicationTable
              fetched_data={fetchedData}
              fetchedData={recordData}
              onEdit={onEdit}
              onDelete={onDelete}
              cols={manageDataCols["publications"]}
            />
          )}
          {page === "add-staff" && <FacultyForm />}

          {page === "add-supporting-staff" && <FacultySupportingForm />}
          {page === "digital-library" && <DigitalLibraryForm />}
          {page === "result-analysis" && <ResultAnalysisForm />}
          {page === "event-analysis" && <EventAnalysisForm />}
          {page === "labs-add" && <LaboratoryForm />}
          {page === "mous" && <MoUsForm />}
          {page === "curriculum" && <CurriculamForm />}
          {page === "time-table" && <TimeTableForm />}
          {page === "commitees" && <CommiteesForm />}
          {page === "audit-report" && <AuditReportForm />}
          {page === "gps-in-news" && <GPSNewsForm />}
          {page === "irg-add" && <IRGForm />}
          {page === "monitoring-report" && <MonitoringReportForm />}
          {page === "student-admission-process" && <StudentAdmissionProcess />}
          {page === "add-news-letters" && <NewsletterForm />}
          {page === "add-dept-portfolio" && <Portfolio />}
          {page === "student-list-form" && <StudentListForm />}
          {page === "add-eoa" && <EoaForm />}
          {page === "add-publication" && <PublicationForm />}
          {/* {page === "add-admin" && <AddAdminForm />} */}
          {/* {page === "manage-admins" && <ManageAdmin />} */}
        </div>
      </div>
    </>
  );
};
