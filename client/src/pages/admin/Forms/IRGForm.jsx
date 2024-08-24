import React, { useState } from "react";

function IRGForm() {
  const [session, setSession] = useState("");
  const [department, setDepartment] = useState("");
  const [irgPdf, setIRGPdf] = useState();

  const handleSubmit = (event) => {
    event.preventDefault();
    // Submit form logic here
    const formData = new FormData();
    formData.append("session", session);
    formData.append("department", department);
    formData.append("irgPdf", irgPdf); // Assuming irgPdf is a File object
    // Make the fetch POST request
    fetch("https://gpsakoli.ac.in/public/api/connection.php?action=insertIRG", {
      method: "POST",
      body: formData,
    })
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
        <h1 className="heading">IRG Form</h1>
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
          </select>
        </div>
        {/* Department field */}
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
            <option value="electronics">Electronics and Telecommunication</option>
            <option value="mechanical">Mechanical Engineering</option>
            <option value="civil">Civil Engineering</option>
          </select>
        </div>
        {/* Upload IRG PDF field */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="irg-pdf">
            Upload Internal Revenue Generation PDF
          </label>
          <input
            required
            className="appearance-none border-2 border-slate-300 rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-sky-500"
            id="irg-pdf"
            name="irgPdf"
            type="file"
            accept=".pdf"
            onInput={(event) => {
              setIRGPdf(event.target.files[0]);
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

export default IRGForm;
