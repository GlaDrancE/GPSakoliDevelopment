import React from "react";
import { CollapseDropdown } from "../Dropdown";
export const NBAaccreditation = ({ data }) => {
	return (
		<>

			<h1 className="sub-heading">NBA Accreditation</h1>
			{data.map((ra) => (
				<CollapseDropdown data={ra} />
			))}
		</>
	);
};
