import React from "react";
import { CollapseDropdown } from "../Dropdown";

export default function DeptTimeTable({ data }) {
	return (
		<>
			<h1 className="heading heading-top-left-line">Time Table</h1>
			{data.map((tt) => (
				<CollapseDropdown data={tt} />
			))}
		</>
	);
}
