import React from "react";
import {CollapseDropdown} from "../Dropdown";
const ic23 = "institute-calender/instcal23-24.pdf";
const ic22 = "institute-calender/instcal22-23.pdf";
const ic21 = "institute-calender/instcal21-22.pdf";
export const InstituteCalender = () => {
	const Data = [
		{name: "Institute Calender 2023-2024", path: ic23, showCD: true},
		{name: "Institute Calender 2022-2023", path: ic22},
		{name: "Institute Calender 2021-2022", path: ic21},
	];
	return (
		<>
			<h1 className="sub-heading">Institute Calender</h1>
			{Data.map((ac) => (
				<CollapseDropdown data={ac} />
			))}
		</>
	);
};
