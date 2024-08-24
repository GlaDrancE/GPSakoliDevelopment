import React from "react";
import { CollapseDropdown } from "../Dropdown";
import { useParams } from "react-router-dom";
export default function DeptLaboratory(props) {
	const { branch } = useParams();
	return (
		<>
			<h2 className="heading-top-left-line">Laboratories</h2>
			<div className="w-full">
				{props.LabsData.map(
					(l) => <CollapseDropdown data={l} />
				)}
			</div>
		</>
	);
}
