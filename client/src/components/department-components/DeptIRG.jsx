import React from "react";
import { CollapseDropdown } from "../Dropdown";
const pdf = "resultAnalysis/computer/2ndsem.pdf";
export default function DeptIRG({ data }) {
    return (
        <>
            <h1 className="heading">Internal Revenue Generation</h1>
            {data.map((ra) => (
                <CollapseDropdown data={ra} />
            ))}
        </>
    );
}
