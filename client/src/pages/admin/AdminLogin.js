import React, { useState, useEffect } from 'react';
import logo from '../../images/logo.png'; // Replace this with the path to your logo
// import background from '../images/eagle.png'; // Replace this with the path to your background
import backgroundPattern from '../../images/background-pattern.png'; // Replace this with the path to your background
import { Dashboard } from './Dashboard'
const AdminLogin = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [adminData, setAdminData] = useState();
    const [validAdmin, setValidAdmin] = useState(false);
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!username || !password) {
            alert('Username and password required');
            return;
        }
        let headersList = {
            'Content-Type': 'application/text',
        };
        let response = await fetch(`https://gpsakoli.ac.in/public/api/connection.php?username=${username}&password=${password}`, {
            method: 'GET',
            headers: headersList,
        });

        let data = await response.text();
        console.log(data);
        if (data === "ok") {
            setValidAdmin(true)
        } else {
            alert("You're not valid admin, please enter valid credentials")
            window.location.href = '/';
        }
    };

    return (
        <>
            {validAdmin ? <Dashboard /> :
                <div className="h-screen grid grid-cols-2 items-center justify-between">
                    <div className="h-screen flex items-center justify-center p-16">

                    </div>
                    <div className="ml-16 rounded w-full max-w-sm">
                        <img src={logo} alt="Logo" className="mx-auto w-36 mb-4 absolute" style={{ top: '1rem', right: '1rem' }} />
                        <h2 className="text-2xl text-center">Welcome Back!</h2>
                        <p className=" mb-6">Please provide your official username ID to proceed.</p>
                        <form className="space-y-4" onSubmit={handleSubmit} action="/">
                            <div>
                                <label htmlFor="username" className="block text-gray-700">
                                    E-mail:
                                </label>
                                <input
                                    type="text"
                                    id="username"
                                    value={username}
                                    name="username"
                                    onChange={(e) => setUsername(e.target.value)}
                                    className="w-full px-3 py-2 placeholder-gray-500 border rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                                />
                            </div>
                            <div>
                                <label htmlFor="password" className="block text-gray-700">
                                    Password:
                                </label>
                                <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="w-full px-3 py-2 placeholder-gray-500 border rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                                />
                            </div>
                            <div className="flex justify-end">
                                <a href="/forgot-password" className="text-black-600 font-semibold hover:underline text-sm text-right">
                                    Forgot Password
                                </a>
                            </div>
                            <div className="flex justify-center">
                                <button type="submit" className="w-full py-2 px-4 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
                                    Sign in
                                </button>
                            </div>
                        </form>
                        <div className="absolute w-screen h-screen right-0 flex justify-end top-0 z-[-1]">
                            <img src={backgroundPattern} alt="" />
                        </div>
                    </div>
                </div>
            }
        </>
    );
};

export default AdminLogin;
