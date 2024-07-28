import React, { useState } from "react";
import Header from "../../../components/Header";

function PublicationForm() {
    const [facultyName, setFacultyName] = useState("");
    const [department, setDepartment] = useState("");
    // const [date, setDate] = useState("");
    const [publicationPdf, setPublicationPdf] = useState();

    const handleSubmit = (event) => {
        event.preventDefault();
        // Submit form logic here
        const formData = new FormData();
        formData.append("facultyName", facultyName);
        formData.append("department", department);
        // formData.append("date", date); // Assuming date is a File object
        formData.append("publicationPdf", publicationPdf); // Assuming publicationPdf is a File object

        // Make the fetch POST request
        fetch(
            "https://gpsakoli.ac.in/public/api/connection.php?action=insertPublications",
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
                <h1 className="heading">Publication Form</h1>
                {/* facultyName dropdown */}
                <div className="mb-4">
                    <label className="block text-gray-700 mb-2" htmlFor="facultyName">
                        Faculty Name
                    </label>
                    <input type="text" className="appearance-none border-2 border-slate-300 rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-sky-500" id="facultyName" name="facultyName" onChange={(event) => setFacultyName(event.target.value)} value={facultyName} />
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
                        name="department"
                    >
                        <option value="">Select Department</option>
                        <option value="computer">Computer Technology</option>
                        <option value="electrical">Electrical Engineering</option>
                        <option value="electronics">Electronics and Telecommunication</option>
                        <option value="mechanical">Mechanical Engineering</option>
                        <option value="civil">Civil Engineering</option>
                    </select>
                </div>
                {/* Publication date
                <div className="mb-4">
                    <label className="block text-gray-700 mb-2" htmlFor="odd-sem-result">
                        Date of Publication
                    </label>
                    <input
                        required
                        className="appearance-none border-2 border-slate-300 rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-sky-500"
                        id="odd-sem-result"
                        name="date"
                        type="date"
                        accept=".pdf"
                        onChange={(event) => setDate(event.value)}
                    />
                </div> */}
                {/* Publication PDF Upload */}
                <div className="mb-4">
                    <label className="block text-gray-700 mb-2" htmlFor="even-sem-result">
                        Publication PDF
                    </label>
                    <input
                        required
                        className="appearance-none border-2 border-slate-300 rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-sky-500"
                        id="even-sem-result"
                        name="publicationPdf"
                        type="file"
                        accept="application/pdf"
                        // value={publicationPdf}
                        onChange={(event) => { setPublicationPdf(event.target.files[0]); console.log(event.target.files[0]); }}
                    />
                </div>
                {/* Submit button */}
                <div className="flex items-center justify-between flex-wrap">
                    <button
                        className="bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded w-full sm:w-auto mx-auto"
                        type="submit"
                        onClick={handleSubmit}
                    >
                        Submit
                    </button>
                </div>
            </form>
        </>
    );
}

export default PublicationForm;
