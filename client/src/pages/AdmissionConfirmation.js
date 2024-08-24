import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";


function EnrollmentForm() {
    const [enrollmentNumber, setEnrollmentNumber] = useState("");
    const [aadharNumber, setAadharNumber] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [gender, setGender] = useState("");
    const [whatsappNumber, setWhatsappNumber] = useState("");
    const [yearOfAdmission, setYearOfAdmission] = useState("");
    const [directSecondYear, setDirectSecondYear] = useState("no");
    const [emailError, setEmailError] = useState("");
    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData();

        // Append each field to the formData object
        formData.append('enrollment', enrollmentNumber);
        formData.append('aadharNo', aadharNumber);
        formData.append('name', name);
        formData.append('email', email);
        formData.append('phone', whatsappNumber);
        formData.append('admissionYear', yearOfAdmission);
        formData.append('directSecondYear', directSecondYear);
        formData.append('gender', gender);

        fetch(
            "https://gpsakoli.ac.in/public/api/connection.php?action=insertStudentAdmissionDetails",
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
            })
            .catch((error) => {
                // Handle error
                console.error("Error:", error);
            });
    };
    const validateEmail = (email) => {
        {
            const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return re.test(email);
        }
    };

    const handleEmailChange = (event) => {
        {
            const email = event.target.value;
            setEmail(email);
            if (!validateEmail(email)) {
                {
                    setEmailError("Please enter a valid email address");
                }
            } else {
                {
                    setEmailError("");
                }
            }
        }
    };
    return (
        <>
            <div className="header-parent sticky top-0">
                <Header />
            </div>
            <form className="max-w-md mx-auto confirm-admission" method="post">
                <div className="mb-4">
                    <label
                        className="block text-gray-700 mb-2"
                        htmlFor="enrollment-number"
                    >
                        Enrollment Number
                    </label>
                    <input
                        required
                        className="appearance-none border-2 border-slate-300 rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-sky-500"
                        id="enrollment-number"
                        type="text"
                        placeholder="Enter your enrollment number"
                        name="enrollment"
                        value={enrollmentNumber}
                        onChange={(event) => setEnrollmentNumber(event.target.value)}
                    />
                </div>
                <div className="mb-4">
                    <label
                        className="block text-gray-700 mb-2"
                        htmlFor="aadhar-number"
                    >
                        Aadhar Number
                    </label>
                    <input
                        required
                        className="appearance-none border-2 border-slate-300 rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-sky-500"
                        id="aadhar-number"
                        type="text"
                        placeholder="Enter your Aadhar number"
                        name="aadharNo"
                        value={aadharNumber}
                        onChange={(event) => setAadharNumber(event.target.value)}
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 mb-2" htmlFor="name">
                        Name
                    </label>
                    <input
                        required
                        className="appearance-none border-2 border-slate-300 rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-sky-500"
                        id="name"
                        type="text"
                        placeholder="Enter your name"
                        name="name"
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 mb-2" htmlFor="email">
                        Email
                    </label>
                    <input
                        className={`appearance-none border-2 border-slate-300 rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-sky-500 ${emailError ? "border-red-500" : ""}`}
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Enter your email address"
                        value={email}
                        onChange={(event) => { setEmail(event.target.value); handleEmailChange(event) }}
                    />
                </div>
                <div className="mb-4">
                    <label
                        className="block text-gray-700 mb-2"
                        htmlFor="Gender"
                    >
                        Gender
                    </label>
                    <div className="flex items-center">
                        <input
                            required
                            className="mr-2 leading-tight"
                            type="radio"
                            name="gender"
                            id="male"
                            value="Male"
                            checked={gender === "Male"}
                            onChange={(event) => setGender(event.target.value)}
                        />
                        <label
                            className="block text-gray-700"
                            htmlFor="male"
                        >
                            Male
                        </label>
                        <input
                            required
                            className="ml-6 mr-2 leading-tight"
                            type="radio"
                            name="gender"
                            id="female"
                            value="Female"
                            checked={gender === "Female"}
                            onChange={(event) => setGender(event.target.value)}
                        />
                        <label
                            className="block text-gray-700"
                            htmlFor="female"
                        >
                            Female
                        </label>
                    </div>
                </div>
                <div className="mb-4">
                    <label
                        className="block text-gray-700 mb-2"
                        htmlFor="whatsapp-number"
                    >
                        WhatsApp Mobile Number
                    </label>
                    <input
                        required
                        className="appearance-none border-2 border-slate-300 rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-sky-500"
                        id="whatsapp-number"
                        name="phone"
                        type="text"
                        placeholder="Enter your WhatsApp mobile number"
                        value={whatsappNumber}
                        onChange={(event) => setWhatsappNumber(event.target.value)}
                    />
                </div>
                <div className="mb-4">
                    <label
                        className="block text-gray-700 mb-2"
                        htmlFor="year-of-admission"
                    >
                        Year of Admission
                    </label>
                    <select className="border-2 border-slate-300 rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-sky-500"
                        value={yearOfAdmission}
                        onChange={(event) => setYearOfAdmission(event.target.value)}
                        name="admissionYear"
                    >
                        <option value="">Select an Year</option>
                        <option value="1st">1st</option>
                        <option value="2nd">2nd</option>
                        <option value="3rd">3rd</option>
                    </select>
                </div>
                <div className="mb-4">
                    <label
                        className="block text-gray-700 mb-2"
                        htmlFor="direct-second-year"
                    >
                        Direct Second Year
                    </label>
                    <div className="flex items-center">
                        <input
                            required
                            className="mr-2 leading-tight"
                            type="radio"
                            name="directSecondYear"
                            id="direct-second-year-yes"
                            value="yes"
                            checked={directSecondYear === "yes"}
                            onChange={(event) => setDirectSecondYear(event.target.value)}
                        />
                        <label
                            className="block text-gray-700"
                            htmlFor="direct-second-year-yes"
                        >
                            Yes
                        </label>
                        <input
                            required
                            className="ml-6 mr-2 leading-tight"
                            type="radio"
                            name="directSecondYear"
                            id="direct-second-year-no"
                            value="no"
                            checked={directSecondYear === "no"}
                            onChange={(event) => setDirectSecondYear(event.target.value)}
                        />
                        <label
                            className="block text-gray-700"
                            htmlFor="direct-second-year-no"
                        >
                            No
                        </label>
                    </div>
                </div>
                <div className="flex items-center justify-between flex-wrap">
                    <button
                        className="bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded w-full sm:w-auto mx-auto"
                        type="button"
                        onClick={handleSubmit}
                    >
                        Submit
                    </button>
                </div>
            </form>
        </>
    );
}

export default EnrollmentForm;