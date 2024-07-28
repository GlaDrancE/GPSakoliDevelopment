import React from "react";

import { CollapseDropdown } from "../Dropdown";
import { useParams } from "react-router-dom";
export const DeptPortfolio = ({ data }) => {
	return (
		<>
			<h1 className="heading heading-top-left-line">
				Department Portfolio
			</h1>
			{data.map(
				(dp) => <CollapseDropdown data={dp} />
			)}
		</>
	);
};
