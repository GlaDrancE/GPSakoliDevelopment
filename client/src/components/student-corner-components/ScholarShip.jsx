import React from "react";
export const ScholarShip = () => {
	let academicYear = "2023 - 2024";
	let scholarShipEndingDate = "31-March-2024";
	const documents = [
		"Income Certificate",
		"Admission Confirmation Letter (Cap letter)",
		"Admission Fee Receipt",
		"Leaving Certificate (TC)",
		"(10th, 12th & All Semester) Marksheets",
		"Ration Card",
		"Domicile Certificate",
		"Gap Certificate (If Required)",
		"Father Death Certificate (If Required)",
		"Caste Validity Certificate (Only For Freeship Students)",
	];
	const minorityDocs = [
		"Minority Declaration Certificate",
		"Income Certificate",
		"Admisson Confirmation Letter (Cap letter)",
		"Admission Fee Receipt",
		"Leaving Certificate (TC)",
		"10th, 12th & All Semester Marksheets",
		"Ration Card",
		"Domecile Certificate",
		"Gap Certificate (If Required)",
		"Father Death Certificate (If Required)",
		"Offspring Letter (अपत्याचा दाखला)",
		"Caste Validity Certificate(Only For Freeship Students)",
	];
	const openDocs = [
		"Income Certificate",
		"Admission Confirmation Letter (Cap letter)",
		"Admission Fee Receipt",
		"Leaving Certificate (TC)",
		"10th, 12th & All Semester Marksheets",
		"Ration Card",
		"Domicile Certificate",
		"Gap Certificate (If Required)",
		"Father Death Certificate (If Required)",
		"Offspring Letter (अपत्याचा दाखला)",
		"Caste Validity Certificate (Only For Freeship Students)",
	];
	return (
		<>
			<h2 className="sub-heading">Scholarship</h2>
			<div className="mt-5">
				<h2 className="sub-heading">
					<span className="heading-red">Important</span> Notice:
				</h2>
				<p>
					In the academic year {academicYear}, students admitted in
					the first/second/third year are required to be registered
					online on the website mahadbtmahait.gov.in for scholarship
					applications. While filling out the application, students
					must upload all the necessary documents/certificates
					mentioned below. Additionally, the application, along with
					the relevant documents, must be submitted for verification
					to the student department by the date of
					<b> {scholarShipEndingDate} </b>. Failure to complete the
					process in time will result in the student being deprived of
					the scholarship. Therefore, students should take personal
					responsibility to ensure timely completion of the process.
				</p>
				<ol className="mt-4 border">
					{documents.map((document) => (
						<li>{document}</li>
					))}
				</ol>
			</div>
			<div className="mt-5">
				<h2 className="sub-heading">
					<span className="heading-red">Important</span> Notice For
					<span className="heading-red"> Minority Category</span>:
				</h2>
				<p>
					In the academic year {academicYear}, students admitted in
					the first/second/third year, belonging to the
					<b>(minority)</b>
					categories of{" "}
					<b>
						Muslim, Buddhist, Christian, Sikh, Parsi, Jain, and Jews
					</b>{" "}
					are required to register online on the website
					mahadbtmahait.gov.in for minority scholarships. While
					filling out the application, students must upload all the
					necessary documents/certificates mentioned below.
					Additionally, the application, along with the relevant
					documents, must be submitted for verification to the student
					department by the date of <b> {scholarShipEndingDate} </b>.
					Failure to complete the process in time will result in the
					student being deprived of the scholarship. Therefore,
					students should take personal responsibility to ensure
					timely completion of the process.
				</p>
				<ol className="mt-4 border">
					{minorityDocs.map((document) => (
						<li>{document}</li>
					))}
				</ol>
			</div>
			<div className="mt-5">
				<h2 className="sub-heading">
					<span className="heading-red">Important</span> Notice For
					<span className="heading-red"> Open Category</span>:
				</h2>
				<p>
					In the academic year {academicYear}, students admitted in
					the first/second/third year, belonging to the
					<b>(Open)</b>
					categories are required to register online on the website
					mahadbtmahait.gov.in for{" "}
					<b>
						Rajarshi Chhatrapati Shahu Maharaj Shikshan Shulk
						Shishyavrutti Yojana (education fee reimbursement
						scheme)
					</b>
					. While filling out the application, students must upload
					all the necessary documents/certificates mentioned below.
					Additionally, the application, along with the relevant
					documents, must be submitted for verification to the student
					department by the date of <b> {scholarShipEndingDate} </b>.
					Failure to complete the process in time will result in the
					student being deprived of the scholarship. Therefore,
					students should take personal responsibility to ensure
					timely completion of the process.
				</p>
				<ol className="mt-4 border">
					{openDocs.map((document) => (
						<li>{document}</li>
					))}
				</ol>
			</div>

			<hr className="my-8" />
			<iframe
				src={require("../../pdfs/student-corner/Scholarship.pdf")}
				frameBorder="0"
				className="w-full h-screen"></iframe>
		</>
	);
};
