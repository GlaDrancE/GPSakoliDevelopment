import React, { useState } from "react";

function CurriculamForm() {
  const [department, setDepartment] = useState("");
  const [semester, setSemester] = useState("");
  const [syllabusPdf, setSyllabusPdf] = useState();

  const handleSubmit = (event) => {
    event.preventDefault();
    // Submit form logic here
    const formData = new FormData();
    formData.append("department", department);
    formData.append("semester", semester);
    formData.append("syllabusPdf", syllabusPdf); // Assuming syllabusPdf is a File object

    // Make the fetch POST request
    fetch("https://gpsakoli.ac.in/public/api/connection.php?action=insertCurriculamDetails", {
      method: "POST",
      body: formData,
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        // Handle success response
        alert(data.message);
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
        {/* Department field */}
        <h1 className="heading">Curriculum Form</h1>
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

        {/* Syllabus PDF field */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="syllabusPdf">
            Upload Syllabus PDF
          </label>
          <input
            required
            className="appearance-none border-2 border-slate-300 rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-sky-500"
            id="syllabusPdf"
            name="syllabusPdf"
            type="file"
            accept="application/pdf"
            onInput={(event) => {
              setSyllabusPdf(event.target.files[0]);
              console.log(event.target.files[0]);
            }}
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

export default CurriculamForm;
