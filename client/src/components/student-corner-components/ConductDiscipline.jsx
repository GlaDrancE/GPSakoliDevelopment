import React from "react";

export default function ConductDiscipline() {
	const rules = [
		"Students are expected to come in the institute as per institute routine",
		"Students are expected to follow academic ethics in the academic buildings. Deviant behavior such as hooting, whistling, loitering, etc. Will be treated as an act of indiscipline",
		"Students are expected to use the class rooms, library or boys /Girls common room available in the academic building for self study and shall avoid sitting in staircases or circulation areas hindering free movement",
		"Access to academic buildings beyond the Institute timing and on holidays without written permission from the concerned Head of Department will be treated as a case of indiscipline.",
		"Keep the campus neat and clean. Do not litter waste anywhere in the campus except in the available waste baskets in the campus",
		"Consumption of intoxicants / psychotropic substances in any form or smoking or using chewing gum, panmasala ,etc. are strictly prohibited.",
	];

	return (
		<>
			<div className="conduct-discipline">
				<h2 className="sub-heading">
					Conduct{" "}
					<span className="sub-heading heading-red"> And </span>{" "}
					Discipline:
				</h2>
				<ol style={{listStyle: "decimal", paddingLeft: "1.5rem"}}>
					{rules.map((rule) => (
						<li style={{marginBottom: "1rem"}}>{rule}</li>
					))}
				</ol>
			</div>
		</>
	);
}
