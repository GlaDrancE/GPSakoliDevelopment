import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";


function AlumniRegistrationForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [whatsappNumber, setWhatsappNumber] = useState("");
    const [yearOfPassing, setYearOfPassing] = useState("");
    const [emailError, setEmailError] = useState("");
    const [dateOfBirth, setDateOfBirth] = useState("");
    const [occupation, setOccupation] = useState("");
    const [address, setAddress] = useState("");
    const [gender, setGender] = useState("");
    const [afterDiploma, setAfterDiploma] = useState("");
    const handleSubmit = (event) => {
        event.preventDefault();
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
            <form className="max-w-md mx-auto confirm-admission" method="post" action="https://gpsakoli.ac.in/public/api/connection?action=insertAlumniDetails" onSubmit={{ handleSubmit }}>
                <h1 className="heading">Alumni <span className="heading-red">Registration</span></h1>
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
                        htmlFor="yearOfPassing"
                    >
                        Year of Passing
                    </label>
                    <input
                        required
                        className="appearance-none border-2 border-slate-300 rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-sky-500"
                        id="year-of-passing"
                        name="yearOfPassing"
                        type="number"
                        placeholder="YYYY"
                        min="1900" max="9999"
                        value={yearOfPassing} onChange={(event) => setYearOfPassing(event.target.value)}
                    />
                </div>
                <div className="mb-4">
                    <label
                        className="block text-gray-700 mb-2"
                        htmlFor="dateOfBirth"
                    >
                        Date of Birth
                    </label>
                    <input
                        required
                        className="appearance-none border-2 border-slate-300 rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-sky-500"
                        id="date-of-birth"
                        name="dateOfBirth"
                        type="date"
                        placeholder="Date of Birth"
                        value={dateOfBirth}
                        onChange={(event) => setDateOfBirth(event.target.value)}
                    />
                </div>
                <div className="mb-4">
                    <label
                        className="block text-gray-700 mb-2"
                        htmlFor="occupation"
                    >
                        Occupation
                    </label>
                    <input
                        required
                        className="appearance-none border-2 border-slate-300 rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-sky-500"
                        id="occupation"
                        name="occupation"
                        type="text"
                        placeholder="Occupation"
                        value={occupation}
                        onChange={(event) => setOccupation(event.target.value)}
                    />
                </div>
                <div className="mb-4">
                    <label
                        className="block text-gray-700 mb-2"
                        htmlFor="gender"
                    >
                        Gender
                    </label>
                    <div className="flex items-center">
                        <input
                            required
                            className="mr-2 leading-tight"
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
                        <input
                            required
                            className="ml-6 mr-2 leading-tight"
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
                    </div>
                </div>
                <div className="mb-4">
                    <label
                        className="block text-gray-700 mb-2"
                        htmlFor="address"
                    >
                        Address
                    </label>
                    <textarea
                        required
                        className="appearance-none border-2 border-slate-300 rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-sky-500"
                        id="address"
                        name="address"
                        type="text"
                        placeholder="Address"
                        value={address}
                        onChange={(event) => setAddress(event.target.value)}
                    ></textarea>
                </div>
                <div className="mb-4">
                    <label
                        className="block text-gray-700 mb-2"
                        htmlFor="afterDiploma"
                    >
                        Where did life take you after Diploma?
                    </label>
                    <textarea
                        required
                        className="appearance-none border-2 border-slate-300 rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-sky-500"
                        id="afterDiploma"
                        name="afterDiploma"
                        type="text"
                        placeholder="What you did after diploma"
                        value={afterDiploma}
                        onChange={(event) => setAfterDiploma(event.target.value)}
                    > </textarea>
                </div>
                <div className="flex items-center justify-between flex-wrap">
                    <button
                        className="bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded w-full sm:w-auto mx-auto"
                        type="submit"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </>
    );
}

export default AlumniRegistrationForm;