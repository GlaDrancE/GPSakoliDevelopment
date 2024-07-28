import React, { useEffect, useState } from "react";
import StaffComponent from "../StaffComponent";
import { useParams } from "react-router-dom";
export default function DeptPortfolio(props) {
	const [staffData, setStaffData] = useState([])
	const { branch } = useParams();
	useEffect(() => {

		const fetchData = async () => {
			let response = await fetch("https://gpsakoli.ac.in/public/api/connection.php?staff-details=" + branch, {
				method: "GET"
			});

			let data = await response.json();
			setStaffData(data.data)
			console.log(staffData);
		}
		fetchData()
	}, [setStaffData])


	return (
		<>
			{staffData.length ? (<>
				<h2 className="heading-top-left-line" >
					<span className="heading-red">Faculty</span> Profile
				</h2>
				<div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-12">
					{staffData.map((i, index) =>
						<StaffComponent staffimages={i} key={index} />
					)}
				</div>
				<hr className="my-5" />
				<h1 className="heading-top-center-line text-center my-4 supporting-heading">
					Supporting <span className="heading-red"> Staff</span>
				</h1>
				<div className="grid grid-cols-2 gap-12">
					{staffData.map(
						(i, index) =>
							i.branch === branch.branch && (
								<StaffComponent staffimages={i} key={index} />
							)
					)}
				</div>
			</>) : <h1>We are updating our record!</h1>}
		</>
	);
}
