import React from "react";
import { CollapseDropdown } from "../Dropdown";
const pdf = "resultAnalysis/computer/2ndsem.pdf";
export default function DeptResultAnalysis({ data }) {
	return (
		<>
			<h1 className="heading heading-top-left-line">Result Analysis</h1>
			{data.map((ra) => (
				<CollapseDropdown data={ra} />
			))}
		</>
	);
}
