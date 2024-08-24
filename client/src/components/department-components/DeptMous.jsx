import React from "react";
import { CollapseDropdown } from "../Dropdown";
import { useParams } from "react-router-dom";
export default function DeptMous(props) {
  const { branch } = useParams();
  return (
    <>
      <h2 className="heading-top-left-line">MOUs</h2>
      <div className="w-full">
        {props.MousData.map((l) => (
          <CollapseDropdown data={l} />
        ))}
      </div>
    </>
  );
}
