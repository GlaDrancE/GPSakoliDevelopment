import React from "react";

export default function AboutProgramOffered() {
	return (
		<>
			<h1 className="sub-heading heading-top-left-line">
				Program Offered
			</h1>
			<table border="1px">
				<thead>
					<tr>
						<td>Sr. No.</td>
						<td>Branch</td>
						<td>Intake</td>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>1</td>
						<td>Computer Technology</td>
						<td>60</td>
					</tr>
					<tr>
						<td>2</td>
						<td>Civil Engineering</td>
						<td>60</td>
					</tr>
					<tr>
						<td>3</td>
						<td>Mechanical Engineering</td>
						<td>60</td>
					</tr>
					<tr>
						<td>4</td>
						<td>Electrical Engineering</td>
						<td>60</td>
					</tr>
					<tr>
						<td>5</td>
						<td>Electronics and Telecommunications Engineering</td>
						<td>30</td>
					</tr>
				</tbody>
			</table>
		</>
	);
}
