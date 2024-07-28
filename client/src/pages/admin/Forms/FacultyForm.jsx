import React, { useState } from "react";
import Header from "../../../components/Header";
function FacultyForm() {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [department, setDepartment] = useState("");
	const [image, setImage] = useState();
	const [designation, setDesignation] = useState("");
	const [qualification, setQualification] = useState("");
	const [experience, setExperience] = useState("");
	const [contactNumber, setContactNumber] = useState("");

	const handleSubmit = (event) => {
		event.preventDefault();
		// Submit form logic here
		const formData = new FormData();
		formData.append("name", name);
		formData.append("email", email);
		formData.append("department", department);
		formData.append("staffImg", image); // Assuming image is a File object
		formData.append("designation", designation);
		formData.append("qualification", qualification);
		formData.append("experience", experience);
		formData.append("phone", contactNumber);
		// Make the fetch POST request
		fetch(
			"https://gpsakoli.ac.in/public/api/connection.php?action=insertFacultyDetails",
			{
				method: "POST",
				body: formData,
			}
		)
			.then((response) => {
				if (!response.ok) {
					throw new Error("Network response was not ok");
				}
				return response.text();
			})
			.then((data) => {
				// Handle success response
				console.log("Success:", data);
				return true;
			})
			.catch((error) => {
				// Handle error
				console.error("Error:", error);
				return false;
			});
	};

	// Additional form logic (e.g., validation) can be added here

	return (
		<>
			<form
				className="max-w-md my-12 mx-auto confirm-admission"
				method="post">
				{/* Name field */}
				<h1 className="heading">Staff Form</h1>
				<div className="mb-4">
					<label className="block text-gray-700 mb-2" htmlFor="name">
						Name
					</label>
					<input
						required
						className="appearance-none border-2 border-slate-300 rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-sky-500"
						id="name"
						name="name"
						type="text"
						placeholder="Enter your name"
						value={name}
						onChange={(event) => setName(event.target.value)}
					/>
				</div>
				<div className="mb-4">
					<label className="block text-gray-700 mb-2" htmlFor="email">
						Email
					</label>
					<input
						required
						className="appearance-none border-2 border-slate-300 rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-sky-500"
						id="email"
						name="email"
						type="text"
						placeholder="Enter your name"
						value={email}
						onChange={(event) => setEmail(event.target.value)}
					/>
				</div>
				<div className="mb-4">
					<label className="block text-gray-700 mb-2" htmlFor="name">
						Image
					</label>
					<input
						required
						className="appearance-none border-2 border-slate-300 rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-sky-500"
						id="image"
						name="staffImg"
						type="file"
						accept="image/*"
						onInput={(event) => {
							setImage(event.target.files[0]);
							console.log(event.target.files[0]);
						}}
					/>
				</div>
				{/* Designation field */}
				<div className="mb-4">
					<label
						className="block text-gray-700 mb-2"
						htmlFor="designation">
						Designation
					</label>
					<input
						required
						className="appearance-none border-2 border-slate-300 rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-sky-500"
						id="designation"
						name="designation"
						type="text"
						placeholder="Enter your designation"
						value={designation}
						onChange={(event) => setDesignation(event.target.value)}
					/>
				</div>
				{/* Department field */}
				<div className="mb-4">
					<label
						className="block text-gray-700 mb-2"
						htmlFor="department">
						Department
					</label>
					<select
						className="border-2 border-slate-300 rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-sky-500"
						value={department}
						onChange={(event) => setDepartment(event.target.value)}
						name="department">
						<option value="">Select a Department</option>
						<option value="computer">Computer Technology</option>
						<option value="electrical">
							Electrical Engineering
						</option>
						<option value="electronics">
							Electroncis and Tele. Comm.
						</option>
						<option value="mechanical">
							Mechanical Engineering
						</option>
						<option value="civil">Civil Engineering</option>
					</select>
				</div>
				{/* Qualification field */}
				<div className="mb-4">
					<label
						className="block text-gray-700 mb-2"
						htmlFor="qualification">
						Qualification
					</label>
					<input
						required
						className="appearance-none border-2 border-slate-300 rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-sky-500"
						id="qualification"
						name="qualification"
						type="text"
						placeholder="Enter your qualification"
						value={qualification}
						onChange={(event) =>
							setQualification(event.target.value)
						}
					/>
				</div>
				{/* Teaching Experience field */}
				<div className="mb-4">
					<label
						className="block text-gray-700 mb-2"
						htmlFor="teaching_experience">
						Experience (Years)
					</label>
					<input
						required
						className="appearance-none border-2 border-slate-300 rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-sky-500"
						id="teaching-experience"
						name="teaching-experience"
						type="number"
						placeholder="Enter your teaching experience in years"
						value={experience}
						onChange={(event) =>
							setExperience(event.target.value)
						}
					/>
				</div>
				{/* Contact Number field */}
				<div className="mb-4">
					<label
						className="block text-gray-700 mb-2"
						htmlFor="contact-number">
						Contact Number
					</label>
					<input
						required
						className="appearance-none border-2 border-slate-300 rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-sky-500"
						id="contact-number"
						name="contact_number"
						type="tel"
						placeholder="Enter your contact number"
						value={contactNumber}
						onChange={(event) =>
							setContactNumber(event.target.value)
						}
					/>
				</div>
				{/* Submit button */}
				<div className="flex items-center justify-between flex-wrap">
					<button
						className="bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded w-full sm:w-auto mx-auto"
						type="submit"
						onClick={handleSubmit}>
						Submit
					</button>
				</div>
			</form>
		</>
	);
}

export default FacultyForm;
