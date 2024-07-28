import React, {useState} from "react";
import {Form, Button} from "react-bootstrap";

const StaffDataForm = () => {
	const [formData, setFormData] = useState({
		image: "",
		name: "",
		designation: "",
		qualification: "",
		teachingExp: "",
		contact: "",
		email: "",
		bio: "",
		branch: "",
	});

	const handleInputChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log("Staff Data Form submitted:", formData);
		// You can add logic to send data to the backend here
	};

	return (
		<Form onSubmit={handleSubmit}>
			<Form.Group controlId="image">
				<Form.Label>Image</Form.Label>
				<Form.Control
					type="text"
					name="image"
					value={formData.image}
					onChange={handleInputChange}
					placeholder="Enter image URL"
				/>
			</Form.Group>

			<Form.Group controlId="name">
				<Form.Label>Name</Form.Label>
				<Form.Control
					type="text"
					name="name"
					value={formData.name}
					onChange={handleInputChange}
					placeholder="Enter name"
				/>
			</Form.Group>

			<Form.Group controlId="designation">
				<Form.Label>Designation</Form.Label>
				<Form.Control
					type="text"
					name="designation"
					value={formData.designation}
					onChange={handleInputChange}
					placeholder="Enter designation"
				/>
			</Form.Group>

			<Form.Group controlId="qualification">
				<Form.Label>Qualification</Form.Label>
				<Form.Control
					type="text"
					name="qualification"
					value={formData.qualification}
					onChange={handleInputChange}
					placeholder="Enter qualification"
				/>
			</Form.Group>

			<Form.Group controlId="teachingExp">
				<Form.Label>Teaching Experience</Form.Label>
				<Form.Control
					type="text"
					name="teachingExp"
					value={formData.teachingExp}
					onChange={handleInputChange}
					placeholder="Enter teaching experience"
				/>
			</Form.Group>

			<Form.Group controlId="contact">
				<Form.Label>Contact</Form.Label>
				<Form.Control
					type="text"
					name="contact"
					value={formData.contact}
					onChange={handleInputChange}
					placeholder="Enter contact number"
				/>
			</Form.Group>

			<Form.Group controlId="email">
				<Form.Label>Email</Form.Label>
				<Form.Control
					type="email"
					name="email"
					value={formData.email}
					onChange={handleInputChange}
					placeholder="Enter email"
				/>
			</Form.Group>

			<Form.Group controlId="bio">
				<Form.Label>Bio</Form.Label>
				<Form.Control
					as="textarea"
					rows={3}
					name="bio"
					value={formData.bio}
					onChange={handleInputChange}
					placeholder="Enter bio"
				/>
			</Form.Group>

			<Form.Group controlId="branch">
				<Form.Label>Branch</Form.Label>
				<Form.Control
					type="text"
					name="branch"
					value={formData.branch}
					onChange={handleInputChange}
					placeholder="Enter branch"
				/>
			</Form.Group>

			<Button variant="primary" type="submit">
				Submit
			</Button>
		</Form>
	);
};

export default StaffDataForm;
