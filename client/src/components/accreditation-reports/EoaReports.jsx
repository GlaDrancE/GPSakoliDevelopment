import React, { useEffect, useState } from "react";
import { CollapseDropdown } from "../Dropdown";
export const EoaReports = ({ data }) => {

	return (
		<>
			<h1 className="sub-heading">EOA (AICTE) Reports</h1>
			{data.map((eoa) => (
				<CollapseDropdown data={eoa} />
			))}
		</>
	);
};
