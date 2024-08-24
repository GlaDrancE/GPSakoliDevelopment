import React from "react";
import {CollapseDropdown} from "../Dropdown";

const rti = "right-to-information/RTI.pdf";
export const RightToInformation = () => {
	const Data = [
		{name: "Right To Information Committee", path: rti, showCD: true},
	];
	return (
		<>
			<h1 className="sub-heading">Right To Information</h1>
			{Data.map((ac) => (
				<CollapseDropdown data={ac} />
			))}
		</>
	);
};
