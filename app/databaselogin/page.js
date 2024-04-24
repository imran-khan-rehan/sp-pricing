'use client';
import React, { useState } from 'react';

const DatabaseLogin = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    //const router = useRouter();

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = () => {
        if (username === 'imran' && password === '12345') {
            // Navigate to the home page
            // router.push('/home');
            window.location.href = '/home';
        } else {
            // Show error message
            setError('Invalid username or password');
        }
    };

    return (
        <div className="flex h-screen w-screen bg-white p-8">
            <div className="w-1/2 h-full flex  items-center  justify-center text-center  rounded-lg text-white">
                <div className='flex w-4/6 flex-col justify-start items-start  text-black         '>
                    <h1 className="text-3xl text-black  mb-4 font-bold">System Login</h1>
                    <p className=" mb-14 text-sm">Login with your database
                        ID & password</p>
                    <div className=' text-[#000842] font-medium'>
                        DB Name
                    </div>
                    <div className="mb-4 w-full">
                        <div className="relative">
                            <input
                                type="text"
                                id="username"
                                placeholder="Select Database Name"
                                value={username}
                                onChange={handleUsernameChange}
                                className="pl-10 bg-white rounded-sm w-full pr-2 py-2 text-black border-b-2 border-gray-400 outline-none"
                            />
                            <img src="/icons/database.svg" alt="User Icon" className="absolute left-2 top-1/2 transform -translate-y-1/2" />
                        </div>
                    </div>
                    <div className=' text-[#000842] font-medium'>
                        Username
                    </div>
                    <div className="mb-4 w-full">
                        <div className="relative">
                            <input
                                type="text"
                                id="username"
                                placeholder="Enter your userName"
                                value={username}
                                onChange={handleUsernameChange}
                                className="pl-10 bg-white rounded-sm w-full pr-2 py-2 text-black border-b-2 border-gray-400 outline-none"
                            />
                            <img src="/icons/message.svg" alt="User Icon" className="absolute left-2 top-1/2 transform -translate-y-1/2" />
                        </div>
                    </div>
                    <div className="">
                        Password
                    </div>
                    <div className="mb-6 w-full">
                        <div className="relative">
                            <input
                                type={showPassword ? 'text' : 'password'}
                                id="password"
                                placeholder="Enter your password"
                                value={password}
                                onChange={handlePasswordChange}
                                className="pl-10 w-full rounded-sm pr-2 py-2 text-black border-b-2 border-gray-400 outline-none"
                            />
                            <img src="/icons/password.svg" alt="Lock Icon" className="absolute left-2 top-1/2 transform -translate-y-1/2" />
                            <button
                                type="button"
                                onClick={togglePasswordVisibility}
                                className="absolute right-2 top-1/2 transform -translate-y-1/2"
                            >
                                {showPassword ? (
                                    <img src="/icons/eye-slash.svg" alt="Hide Password" />
                                ) : (
                                    <img src="/icons/eye.svg" alt="Show Password" />
                                )}
                            </button>
                        </div>
                    </div>
                    {error && <p className="text-red-500">{error}</p>}
                    <button onClick={handleSubmit} className="bg-[#0C21C1] w-full rounded rounded-3xl text-white py-2 px-4 hover:bg-[#000842]">Login</button>
                </div>
            </div>
            <div className="flex-1 bg-[#000842] border rounded-2xl flex flex-col gap-1 items-center justify-center">
                <h2 className="text-white ">
                    <span className=' text-[43px]  font-semibold'> Welcome to,</span><br />
                    <span className="inline-block text-[43px]  font-semibold">Color Process ✨</span>
                    <div className='  text-2xl font-semibold'>
                        Quick Links 
                    </div>
                    <div className=' text-sm'>
                        Stale Exclusion List
                    </div>
                    <div className=' text-sm'>
                        BWIC Cover List
                    </div>
                    <div className=' text-sm'>
                        Golden Copy
                    </div>
                    <div className=' text-[9px] text-[#00B69B]'>
                        Last Saved Data 8 Apr 2024 | 5:23 PM EST
                    </div>
                </h2>
            </div>
        </div>
    );
};

export default DatabaseLogin;
