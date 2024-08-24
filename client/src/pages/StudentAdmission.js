import React, { useEffect, useState } from "react";
import { Slider } from "../components/Slider";
import Footer from "../components/Footer";
import { CollapseDropdown } from "../components/Dropdown";
import pdf from "../pdfs/student-corner/Rules_22_23.pdf";
export const StudentAdmission = () => {
  const [data, setData] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      let response = await fetch(
        "https://gpsakoli.ac.in/public/api/connection.php?student-admission",
        {
          method: "GET",
        }
      );

      let data = await response.json();
      setData(data.data);
    };
    fetchData();
  });
  return (
    <>
      <Slider />
      <div className="main-container">
        {data.map((dp) => (
          <CollapseDropdown data={dp} />
        ))}
        {/* <CollapseDropdown
          data={{
            session:
              "First Year & Direct Second Year Diploma Information Brochure 2022-23",
            path: "/public/api/assets/STUDENT_CORNER_PDFs/FEAdmission_22_23.pdf",
            showCD: true,
          }}
        />
        <CollapseDropdown
          data={{
            session: "Rules 2022 - 2023",
            path: "student-corner/Rules_22_23.pdf",
            showCD: false,
          }}
        /> */}
      </div>
    </>
  );
};
