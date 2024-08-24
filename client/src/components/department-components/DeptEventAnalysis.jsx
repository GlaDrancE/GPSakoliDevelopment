import React from "react";
import { CollapseDropdown } from "../Dropdown";
const pdf = "resultAnalysis/computer/2ndsem.pdf";
export default function DeptEventAnalysis({ data }) {
    return (
        <>
            <h1 className="heading">Event & Analysis</h1>
            {data.map((ra) => (
                <CollapseDropdown data={ra} />
            ))}
        </>
    );
}
