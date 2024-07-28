import React, { useState } from "react";
import Header from "../../../components/Header";

function DigitalLibraryForm() {
    const [subjectName, setSubjectName] = useState("");
    const [department, setDepartment] = useState("");
    const [coverImage, setCoverImage] = useState();
    const [title, setTitle] = useState("");
    const [authorName, setAuthorName] = useState("");
    const [bookPdf, setBookPdf] = useState();

    const handleSubmit = (event) => {
        event.preventDefault();
        // Submit form logic here
        const formData = new FormData();
        formData.append("subjectName", subjectName);
        formData.append("coverImage", coverImage); // Assuming coverImage is a File object
        formData.append("department", department); // Assuming coverImage is a File object
        formData.append("title", title);
        formData.append("authorName", authorName);
        formData.append("bookPdf", bookPdf);

        // Make the fetch POST request
        fetch(
            "https://gpsakoli.ac.in/public/api/connection.php?action=insertDigitalLib",
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
                <h1 className="heading">Digital Library Form</h1>
                {/* Subject Name field */}
                <div className="mb-4">
                    <label className="block text-gray-700 mb-2" htmlFor="subject-name">
                        Subject Name
                    </label>
                    <input
                        required
                        className="appearance-none border-2 border-slate-300 rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-sky-500"
                        id="subject-name"
                        name="subjectName"
                        type="text"
                        placeholder="Enter subject name"
                        value={subjectName}
                        onChange={(event) => setSubjectName(event.target.value)}
                    />
                </div>

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
                {/* Cover Page Image field */}
                <div className="mb-4">
                    <label className="block text-gray-700 mb-2" htmlFor="cover-image">
                        Cover Page Image
                    </label>
                    <input
                        required
                        className="appearance-none border-2 border-slate-300 rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-sky-500"
                        id="cover-image"
                        name="coverImage"
                        type="file"
                        accept="image/*"
                        onChange={(event) => setCoverImage(event.target.files[0])}
                    />
                </div>
                {/* Title of Book field */}
                <div className="mb-4">
                    <label className="block text-gray-700 mb-2" htmlFor="title">
                        Title of Book
                    </label>
                    <input
                        required
                        className="appearance-none border-2 border-slate-300 rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-sky-500"
                        id="title"
                        name="title"
                        type="text"
                        placeholder="Enter title of book"
                        value={title}
                        onChange={(event) => setTitle(event.target.value)}
                    />
                </div>
                {/* Author Name field */}
                <div className="mb-4">
                    <label className="block text-gray-700 mb-2" htmlFor="author-name">
                        Author Name
                    </label>
                    <input
                        required
                        className="appearance-none border-2 border-slate-300 rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-sky-500"
                        id="author-name"
                        name="authorName"
                        type="text"
                        placeholder="Enter author name"
                        value={authorName}
                        onChange={(event) => setAuthorName(event.target.value)}
                    />
                </div>
                {/* Book PDF field */}
                <div className="mb-4">
                    <label className="block text-gray-700 mb-2" htmlFor="bookPdf">
                        Upload Book Pdf
                    </label>
                    <input
                        required
                        className="appearance-none border-2 border-slate-300 rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-sky-500"
                        id="bookPdf"
                        name="bookPdf"
                        type="file"
                        accept="application/pdf"
                        onInput={(event) => {
                            setBookPdf(event.target.files[0]);
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

export default DigitalLibraryForm;
