import React from "react";
import { CollapseDropdown } from "../Dropdown";

export const AuditReports = ({ data }) => {

	return (
		<>
			<h1 className="sub-heading">Audit Reports</h1>
			{data.map((ra) => (
				<CollapseDropdown data={ra} />
			))}
		</>
	);
};
