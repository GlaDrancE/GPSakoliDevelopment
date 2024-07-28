import React from "react";
import {CollapseDropdown} from "../Dropdown";

const nl23 = "news-letters/computer/nlct23.pdf";
const nl22 = "news-letters/computer/nlct22.pdf";
const nl21 = "news-letters/computer/nlct21.pdf";
export default function DeptNewsLetter() {
	const deptNewsLetterData = [
		{name: "2022-2023", path: nl23, showCD: true},
		{name: "2021-2022", path: nl22},
		{name: "2020-2021", path: nl21},
	];
	return (
		<>
			<h1 className="heading heading-top-left-line">News Letter</h1>
			{deptNewsLetterData.map((nl) => (
				<CollapseDropdown data={nl} />
			))}
		</>
	);
}
