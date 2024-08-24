import React, { useState } from "react";
import Header from "../../../components/Header";

function StudentListForm() {
    const [session, setSession] = useState("");
    const [department, setDepartment] = useState("");
    const [semester, setSemester] = useState("");
    const [studentList, setStudentList] = useState();

    const handleSubmit = (event) => {
        event.preventDefault();
        // Submit form logic here
        const formData = new FormData();
        formData.append("session", session);
        formData.append("department", department);
        formData.append("semester", semester);
        formData.append("studentList", studentList); // Assuming studentList is a File object
        // Make the fetch POST request
        fetch(
            "https://gpsakoli.ac.in/public/api/connection.php?action=insertStudentList",
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

    return (
        <>
            <form className="max-w-md my-12 mx-auto confirm-admission" method="post">
                {/* Session dropdown */}
                <div className="mb-4">
                    <label className="block text-gray-700 mb-2" htmlFor="session">
                        Session
                    </label>
                    <select
                        className="border-2 border-slate-300 rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-sky-500"
                        value={session}
                        onChange={(event) => setSession(event.target.value)}
                        name="session"
                    >
                        <option value="">Select a Session</option>
                        <option value="2021-2022">2021-2022</option>
                        <option value="2022-2023">2022-2023</option>
                        <option value="2023-2024">2023-2024</option>
                        <option value="2024-2025">2024-2025</option>
                        <option value="2025-2026">2025-2026</option>
                        <option value="2027-2028">2027-2028</option>
                        <option value="2028-2029">2028-2029</option>
                        <option value="2029-2030">2029-2030</option>
                        <option value="2030-2031">2030-2031</option>
                        {/* Add more options as needed */}
                    </select>
                </div>
                {/* Department dropdown */}
                <div className="mb-4">
                    <label className="block text-gray-700 mb-2" htmlFor="department">
                        Department
                    </label>
                    <select
                        className="border-2 border-slate-300 rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-sky-500"
                        value={department}
                        onChange={(event) => setDepartment(event.target.value)}
                        name="department">
                        <option value="">Select a Department</option>
                        <option value="computer">Computer Technology</option>
                        <option value="electrical">Electrical Engineering</option>
                        <option value="electronics">Electronics and Tele. Comm.</option>
                        <option value="mechanical">Mechanical Engineering</option>
                        <option value="civil">Civil Engineering</option>
                    </select>
                </div>
                {/* Semester field */}
                <div className="mb-4">
                    <label className="block text-gray-700 mb-2" htmlFor="semester">
                        Semester
                    </label>
                    <select
                        className="border-2 border-slate-300 rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-sky-500"
                        value={semester}
                        onChange={(event) => setSemester(event.target.value)}
                        name="semester"
                        id="semester"
                    >
                        <option value="">Select Semester</option>
                        <option value="First Semester">First Semester</option>
                        <option value="Second Semester">Second Semester</option>
                        <option value="Third Semester">Third Semester</option>
                        <option value="Fourth Semester">Fourth Semester</option>
                        <option value="Fifth Semester">Fifth Semester</option>
                        <option value="Sixth Semester">Sixth Semester</option>
                    </select>
                </div>
                {/* Upload Student List PDF */}
                <div className="mb-4">
                    <label className="block text-gray-700 mb-2" htmlFor="student-list">
                        Upload Student List PDF
                    </label>
                    <input
                        required
                        className="appearance-none border-2 border-slate-300 rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-sky-500"
                        id="student-list"
                        name="studentList"
                        type="file"
                        accept="application/pdf"
                        onChange={(event) => {
                            setStudentList(event.target.files[0]);
                            console.log(event.target.files[0]);
                        }}
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

export default StudentListForm;
