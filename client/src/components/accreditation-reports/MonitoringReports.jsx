import React from "react";
import { CollapseDropdown } from "../Dropdown";
const pdf = "reports/EOA/EOA23-24.pdf";

export const MonitoringReports = ({ data }) => {


	return (
		<>
			<h1 className="sub-heading">Monitoring Reports</h1>
			{data.map((ra) => (
				<CollapseDropdown data={ra} />
			))}
		</>
	);
};
