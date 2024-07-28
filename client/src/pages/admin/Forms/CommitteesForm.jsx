import React, { useState } from "react";

function CommitteesForm() {
    const [session, setSession] = useState("");
    const [committeeName, setCommitteeName] = useState("");
    const [chairmanName, setChairmanName] = useState("");
    const [chairmanMobNo, setChairmanMobNo] = useState("");

    const [inputNumber, setInputNumber] = useState('');
    const [inputBoxes, setInputBoxes] = useState([]);

    const [memberNames, setMemberNames] = useState([]);
    const [memberNumber, setMemberNumber] = useState([]);

    const handleSubmit = (event) => {
        event.preventDefault();

        console.log(memberNames);
        // Create FormData object
        const formData = new FormData();

        // Append form data to FormData object
        formData.append("session", session);
        formData.append("committeeName", committeeName);
        formData.append("chairmanName", chairmanName);
        formData.append("chairmanMobNo", chairmanMobNo);

        memberNames.forEach((element) => {
            formData.append("memberNames[]", element);
        });
        memberNumber.forEach((element) => {
            formData.append("memberNumber[]", element);
        });

        // Make the fetch POST request
        fetch("https://gpsakoli.ac.in/public/api/connection.php?action=insertCommittee", {
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
                alert(data);
                return true;
            })
            .catch((error) => {
                // Handle error
                console.error("Error:", error);
                return false;
            });

    };
    const handleChange = (e) => {
        setInputNumber(e.target.value);
    };
    function handleMemeberNameChange(index, e) {
        const value = [...memberNames];
        value[index] = e.target.value;
        setMemberNames(value);
    }
    function handleMemeberNumberChange(index, e) {
        const value = [...memberNumber];
        value[index] = e.target.value;
        setMemberNumber(value);
    }
    const generateInputs = () => {
        setInputBoxes([]);
        for (let i = 0; i < inputNumber; i++) {
            setInputBoxes(prevInputBoxes => [...prevInputBoxes, { id: i }]);
        }
    };

    return (
        <>
            <form
                className="max-w-md my-12 mx-auto confirm-admission"
                method="post"
            >
                <h1 className="heading">Committees Form</h1>
                {/* Session Drop Down */}
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
                </div>                {/* Name of Committee */}
                <div className="mb-4">
                    <label className="block text-gray-700 mb-2" htmlFor="committeeName">
                        Name of Committee
                    </label>
                    <input
                        required
                        className="appearance-none border-2 border-slate-300 rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-sky-500"
                        id="committeeName"
                        name="committeeName"
                        type="text"
                        placeholder="Enter committee name"
                        value={committeeName}
                        onChange={(event) => setCommitteeName(event.target.value)}
                    />
                </div>
                {/* Chairman Name */}
                <div className="mb-4">
                    <label className="block text-gray-700 mb-2" htmlFor="chairmanName">
                        Chairman Name
                    </label>
                    <input
                        required
                        className="appearance-none border-2 border-slate-300 rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-sky-500"
                        id="chairmanName"
                        name="chairmanName"
                        type="text"
                        placeholder="Enter chairman name"
                        value={chairmanName}
                        onChange={(event) => setChairmanName(event.target.value)}
                    />
                </div>
                {/* Chairman Mobile Number */}
                <div className="mb-4">
                    <label className="block text-gray-700 mb-2" htmlFor="chairmanMobNo">
                        Chairman Mobile Number
                    </label>
                    <input
                        required
                        className="appearance-none border-2 border-slate-300 rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-sky-500"
                        id="chairmanMobNo"
                        name="chairmanMobNo"
                        type="tel"
                        placeholder="Enter chairman mobile number"
                        value={chairmanMobNo}
                        onChange={(event) => setChairmanMobNo(event.target.value)}
                    />
                </div>

                <div>
                    Enter the number of Members:
                    <input type="number" value={inputNumber} onChange={handleChange} className="appearance-none border-2 border-slate-300 rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-sky-500" />
                    <button onClick={generateInputs} className="bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded w-full sm:w-auto mx-auto my-3">Next</button>
                </div>
                {/* Member 1 Name and Mobile Number */}
                {inputBoxes.map((inputBox, index) => (
                    <div className="mb-4" key={inputBox.id}>
                        <label className="block text-gray-700 mb-2" htmlFor={`member${inputBox.id}Name`}>
                            Member {inputBox.id + 1} Name
                        </label>
                        <input
                            required
                            className="appearance-none border-2 border-slate-300 rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-sky-500"
                            id={`member${inputBox.id + 1}Name`}
                            name={`member${inputBox.id + 1}Name`}
                            type="text"
                            placeholder={`Enter member ${inputBox.id} name`}
                            onChange={(e) => handleMemeberNameChange(index, e)}
                        />
                        <label className="block text-gray-700 mb-2 mt-4" htmlFor={`member${inputBox.id}MobNo`}>
                            Member {inputBox.id + 1} Mobile Number
                        </label>
                        <input
                            required
                            className="appearance-none border-2 border-slate-300 rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-sky-500"
                            id={`member${inputBox.id + 1}MobNo`}
                            name={`member${inputBox.id + 1}MobNo`}
                            type="tel"
                            placeholder={`Enter member ${inputBox.id + 1} mobile number`}
                            onChange={(e) => handleMemeberNumberChange(index, e)}
                        />
                    </div>
                ))}
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

export default CommitteesForm;
