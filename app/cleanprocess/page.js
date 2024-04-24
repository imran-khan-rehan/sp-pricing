'use client';
import React from 'react';
import SphericalComponent from '@/component/sphere';
const YourPage = () => {
    const handleClick = () => {
        // Your function logic here
        console.log('Button clicked!');
    };

    return (
        <div className="flex justify-center items-center h-screen">
            <SphericalComponent
                backgroundImage="/icons/shpereblack.svg"
                text="Your Text Here"
                onClickFunction={handleClick}
            />
        </div>
    );
};

export default YourPage;
