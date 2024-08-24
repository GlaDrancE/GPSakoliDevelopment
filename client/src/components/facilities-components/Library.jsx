import React from "react";
import libraryStaff from "../../images/staff-imgs/others/kolte.jpeg";
export default function Library() {
	return (
		<>
			<h1 className="heading">Library</h1>
			<div className="about-card w-full p-3 my-5 border-card flex">
				<img
					src={libraryStaff}
					alt=""
					className="library-profile mr-2"
				/>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Omnis, voluptatibus? Esse, dolore ut pariatur quos aperiam
					quam fugit ipsum laboriosam rerum beatae aspernatur quasi
					eos expedita eum repudiandae quis suscipit odit optio
					accusamus quisquam distinctio!{" "}
					<a href="#" className="heading-red">
						more....
					</a>
				</p>
			</div>
			<div className="mt-5">
				<table border="1px">
					<thead>
						<tr>
							<td>Timing</td>
							<td>9.45 AM to 5.45 PM</td>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>No. of Library Staff</td>
							<td>02</td>
						</tr>
						<tr>
							<td>No. of Staff with degree in Library</td>
							<td>01</td>
						</tr>
						<tr>
							<td>Library Management Software</td>
							<td>Lib Man</td>
						</tr>
						<tr>
							<td>Computerization for search indexing</td>
							<td>Yes</td>
						</tr>
						<tr>
							<td>Issue/Return records bar coding used</td>
							<td>Yes</td>
						</tr>
						<tr>
							<td>Carpet Area of Library (in Sq.Mt.)</td>
							<td>495.04 Sq. Mt.</td>
						</tr>
						<tr>
							<td>Reading Space (in Sq.Mt.)</td>
							<td>104 Sq. M.</td>
						</tr>
						<tr>
							<td>Number of seats in Reading Space</td>
							<td>60</td>
						</tr>
					</tbody>
				</table>
			</div>
			<div className="mt-5">
				<h1 className="heading heading-top-left-line">
					No. of Titles & Volumes (Department wise): As per AICTE
					Rules
				</h1>
				<table border="1px">
					<thead>
						<tr>
							<td>Sr No.</td>
							<td>Branch/Course</td>
							<td>Titles</td>
							<td>Volumes</td>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>01</td>
							<td>Civil Engg.</td>
							<td>990 </td>
							<td>8387</td>
						</tr>
						<tr>
							<td>02</td>
							<td>Electrical Engg.</td>
							<td>800</td>
							<td>6560</td>
						</tr>
						<tr>
							<td>03</td>
							<td>Computer Engg.</td>
							<td>500</td>
							<td>1700</td>
						</tr>
						<tr>
							<td>04</td>
							<td>Electronics & Telecommunication Engg.</td>
							<td>750</td>
							<td>6600</td>
						</tr>
						<tr>
							<td>05</td>
							<td>Mechanical Engg.</td>
							<td>1050</td>
							<td>8920</td>
						</tr>
						<tr>
							<td>06</td>
							<td>General</td>
							<td></td>
							<td></td>
						</tr>
						<tr>
							<td></td>
							<td>
								<b>Total</b>
							</td>
							<td>
								<b>4090</b>
							</td>
							<td>
								<b>32167</b>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
			<div className="mt-5">
				<h1 className="heading heading-top-left-line">
					No. of Journals ( Department wise): As Per AICTE Rules
				</h1>
				<table border="1px">
					<thead>
						<tr>
							<td>Sr No.</td>
							<td>Branch/Course</td>
							<td>Titles</td>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>01</td>
							<td>Civil Engg.</td>
							<td>04 </td>
						</tr>
						<tr>
							<td>02</td>
							<td>Electrical Engg.</td>
							<td>04</td>
						</tr>
						<tr>
							<td>03</td>
							<td>Computer Engg.</td>
							<td>03</td>
						</tr>
						<tr>
							<td>04</td>
							<td>Electronics & Telecommunication Engg.</td>
							<td>05</td>
						</tr>
						<tr>
							<td>05</td>
							<td>Mechanical Engg.</td>
							<td>02</td>
						</tr>
						<tr>
							<td></td>
							<td>
								<b>Total</b>
							</td>
							<td>
								<b>18</b>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
			<div className="mt-5">
				<table border="1px">
					<tbody>
						<tr>
							<td>Computerized Lab.</td>
							<td>Yes </td>
						</tr>
						<tr>
							<td>No. of Computers available in Lab.</td>
							<td>05</td>
						</tr>
						<tr>
							<td>Internet Connectivity</td>
							<td>Yes</td>
						</tr>
						<tr>
							<td>All Books Barcoding</td>
							<td>Yes</td>
						</tr>
						<tr>
							<td>OPAC System</td>
							<td>Yes</td>
						</tr>
						<tr>
							<td>Book Issue / Return By Library Software</td>
							<td>Yes</td>
						</tr>
					</tbody>
				</table>
			</div>
		</>
	);
}
