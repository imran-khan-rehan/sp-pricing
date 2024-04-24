'use client';
import React, { useState } from 'react';
//import { useRouter } from 'next/router';

const SignupPage = () => {
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
                    <p className=" mb-14 text-sm">Login with your account ID</p>
                    <div className=' text-[#000842] font-medium'>
                        Username
                    </div>
                    <div className="mb-4 w-full">
                        <div className="relative">
                            <input
                                type="text"
                                id="username"
                                placeholder="Enter your username"
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
            <div className="flex-1 bg-[#000842] border rounded-2xl flex items-center justify-center">
                <h2 className="text-white text-[43px] font-semibold">
                    Welcome to,<br />
                    <span className="inline-block">SP Pricing Portal ✨</span>
                </h2>
            </div>
        </div>
    );
};

export default SignupPage;
