import React from "react";

export const FeesStruct = () => {
	return (
		<>
			<h2 className="heading">Fees Structure</h2>
			<div>
				<iframe
					src={require("../../pdfs/student-corner/Scholarship.pdf")}
					frameborder="0"
					className="w-full h-screen"></iframe>
			</div>
		</>
	);
};
