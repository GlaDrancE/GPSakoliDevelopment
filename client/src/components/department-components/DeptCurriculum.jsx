import React from "react";
import {useParams} from "react-router-dom";
export default function DeptCurriculum({curriculum}) {
	const {branch} = useParams();

	return (
		<>
			<div className="curriculum-container">
				{curriculum.map((sem) => (
					<>
						<div className="curriculum-card">
							{sem.branch === branch && (
								<a href={sem.path} target="_blank">
									{sem.name}
								</a>
							)}
							<div className="curriculum-card-connect"></div>
						</div>
					</>
				))}
				<div className="curriculum-connect"></div>
			</div>
		</>
	);
}
