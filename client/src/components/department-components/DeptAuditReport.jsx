import React from "react";

import { CollapseDropdown } from "../Dropdown";
export const DeptAuditReport = ({ data }) => {
    return (
        <>
            <h1 className="heading heading-top-left-line">
                Audit Report
            </h1>
            {data.map(
                (dp) => <CollapseDropdown data={dp} />
            )}
        </>
    );
};
