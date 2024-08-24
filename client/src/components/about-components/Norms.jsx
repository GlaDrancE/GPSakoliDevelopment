import React from "react";
import {CollapseDropdown} from "../Dropdown";

export const Norms = () => {
	const norms = [
		{
			name: "OBAN (Outcome Based Assessment Norms) Norms 2021",
			path: "norms/OBAN_2021.pdf",
			showCD: true,
		},
		{
			name: "CIAAN (Curriculum Implementation And Assessment Norms) Norms 2021",
			path: "norms/CIAAN_Norms_2017.pdf",
		},
	];
	return (
		<>
			<h1 className="sub-heading">Norms</h1>
			{norms.map((norm) => (
				<CollapseDropdown data={norm} />
			))}
		</>
	);
};
