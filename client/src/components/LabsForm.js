// TimetableForm.jsx
import React, {useState} from "react";
import {Form, Button} from "react-bootstrap";

const TimetableForm = () => {
	const [formData, setFormData] = useState({
		name: "",
		path: "",
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
		console.log("Timetable Form submitted:", formData);
		// You can add logic to send data to the backend here
	};

	return (
		<Form onSubmit={handleSubmit}>
			<Form.Group controlId="name">
				<Form.Label>Name</Form.Label>
				<Form.Control
					type="text"
					name="name"
					value={formData.name}
					onChange={handleInputChange}
				/>
			</Form.Group>
			<Form.Group controlId="path">
				<Form.Label>Path</Form.Label>
				<Form.Control
					type="text"
					name="path"
					value={formData.path}
					onChange={handleInputChange}
				/>
			</Form.Group>
			{/* Repeat similar structure for other fields */}
			<Button variant="primary" type="submit">
				Submit
			</Button>
		</Form>
	);
};

export default TimetableForm;
