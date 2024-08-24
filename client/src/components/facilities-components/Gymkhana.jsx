import React from "react";
import Table from "../Table";

export default function Gymkhana() {
	const gymkhanaCommitee = [
		{columns: ["Sr No.", "Commitee Members", "Designation"]},
		{
			rows: [
				["1", "Mr. S. P. Lambhade", "President"],
				["2", "Mr. G. R. Dewalkar", "Vice-President"],
				["3", "Mr. A. J. Khobragade", "Gymkhana Secretary"],
				[
					"4",
					"Selection Under Process",
					"Cultural,Sports etc Student Secretary",
				],
			],
		},
	];
	return (
		<>
			<h1 className="heading">Gymkhana</h1>
			<div className="gymkhana-container">
				<div className="my-4">
					<h5>Gymkhana Hall:</h5>
					<p>
						The Gymkhana Hall is equipped with Audio-Visual
						facilities having more than 200 students & faculties
						seating capacity. This facility provides an ideal
						location not only students to attend the lecturers by
						various expert but also covers for various Institutional
						programmes.
					</p>
				</div>
				<div className="my-4">
					<h5>Student Co-operative Store :</h5>
					<p>
						To fulfil the instant needs of
						stationeries,manuals,photocopy etc for students, Student
						Co-Operative Store is set up inside Campus. For Store
						related enquiry contact : Mr. S. D. Gawali Mob:
						9423553740.
					</p>
				</div>
				<div className="my-4">
					<h5>Sports Aminities :</h5>
					<p>
						A big playground is available for playing out-door
						games. All sport items for outdoor or indoor games such
						as football, cricket kit, vollyball, carom,badminton,
						table tennis etc can be issued from Sport Incharges. For
						more details students can contact to Mr. D. A.
						Brahmankar, Sr. Lecturer, ETC Dept. Mob:9011018986 The
						institute encourages students to participate in various
						games like IEDSSAA, Inter zonal competition etc.
					</p>
				</div>
				<hr />
				<h1 className="heading my-6 heading-top-left-line">
					Gymkhana Commitee
				</h1>
				<Table data={gymkhanaCommitee} />
			</div>
		</>
	);
}
