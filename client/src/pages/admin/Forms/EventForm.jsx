import React, { useState } from "react";

function EventForm() {
    const [session, setSession] = useState("");
    const [department, setDepartment] = useState("");
    const [eventName, setEventName] = useState("");
    const [image, setImage] = useState();
    const [dateOfEvent, setDateOfEvent] = useState("");
    const [activityDescription, setActivityDescription] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        // Submit form logic here
        const formData = new FormData();
        formData.append("session", session);
        formData.append("department", department);
        formData.append("eventName", eventName);
        formData.append("eventImage", image); // Assuming image is a File object
        formData.append("dateOfEvent", dateOfEvent);
        formData.append("activityDescription", activityDescription);
        // Make the fetch POST request
        fetch("https://gpsakoli.ac.in/public/api/connection.php?action=insertEventDetails", {
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
                {/* Session dropdown */}
                <h1 className="heading">Event Analysis Form</h1>
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
                        <option value="electronics">Electronics and Tele. Comm.</option>
                        <option value="mechanical">Mechanical Engineering</option>
                        <option value="civil">Civil Engineering</option>
                    </select>
                </div>
                {/* Event Name field */}
                <div className="mb-4">
                    <label className="block text-gray-700 mb-2" htmlFor="eventName">
                        Event Name
                    </label>
                    <input
                        required
                        className="appearance-none border-2 border-slate-300 rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-sky-500"
                        id="eventName"
                        name="eventName"
                        type="text"
                        placeholder="Enter event name"
                        value={eventName}
                        onChange={(event) => setEventName(event.target.value)}
                    />
                </div>
                {/* Image field */}
                <div className="mb-4">
                    <label className="block text-gray-700 mb-2" htmlFor="image">
                        Image
                    </label>
                    <input
                        required
                        className="appearance-none border-2 border-slate-300 rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-sky-500"
                        id="image"
                        name="eventImage"
                        type="file"
                        accept="image/*"
                        onInput={(event) => {
                            setImage(event.target.files[0]);
                            console.log(event.target.files[0]);
                        }}
                    />
                </div>
                {/* Date of Event field */}
                <div className="mb-4">
                    <label className="block text-gray-700 mb-2" htmlFor="dateOfEvent">
                        Date of Event
                    </label>
                    <input
                        required
                        className="appearance-none border-2 border-slate-300 rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-sky-500"
                        id="dateOfEvent"
                        name="dateOfEvent"
                        type="date"
                        value={dateOfEvent}
                        onChange={(event) => setDateOfEvent(event.target.value)}
                    />
                </div>
                {/* Activity Description field */}
                <div className="mb-4">
                    <label className="block text-gray-700 mb-2" htmlFor="activityDescription">
                        Activity Description
                    </label>
                    <textarea
                        required
                        className="appearance-none border-2 border-slate-300 rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-sky-500"
                        id="activityDescription"
                        name="activityDescription"
                        placeholder="Enter activity description"
                        rows="4"
                        value={activityDescription}
                        onChange={(event) => setActivityDescription(event.target.value)}
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

export default EventForm;
