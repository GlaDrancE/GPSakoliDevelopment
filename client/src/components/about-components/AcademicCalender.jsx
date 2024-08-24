import React from "react";
import {CollapseDropdown} from "../Dropdown";
const ac19 = "academic-calender/MSBTEAcademicCalendar-2019-20.pdf";
const ac20 = "academic-calender/Academic_Calender_2020-21.pdf";
export default function AcademicCalendar() {
	const AcademicCalenderData = [
		{name: "MSBTE Academic Calender 2022-23 ", path: ac19, showCD: true},
		{name: "MSBTE Academic Calender 2021-22", path: ac20},
	];
	return (
		<>
			<h1 className="sub-heading">Academic Calender</h1>
			{AcademicCalenderData.map((ac) => (
				<CollapseDropdown data={ac} />
			))}
		</>
	);
}
