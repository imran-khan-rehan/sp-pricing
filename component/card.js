import React from 'react';
import arrow from '../public/icons/rightArrow.svg';
import Image from 'next/image';
import Link from 'next/link';
const Card = ({ heading, options }) => {
    return (
        <div className="relative bg-[#000842] pl-[50px] border w-[600px] h-[200px] gap-3 rounded-lg p-4 mb-4 flex flex-col justify-center">
            <h2 className="text-xl font-semibold text-white">{heading}</h2>
            <div className="flex w-[70%] ">
                <select className="px-3 py-1 border  text-[#00B69B] bg-[#CCF0EB] items-center rounded-3xl w-full focus:outline-none">
                    {options.map((option, index) => (
                        <option key={index} value={option}>{option}</option>
                    ))}
                </select>
                <div className='absolute right-0 bottom-0 w-[100px] items-center  text-center align-middle h-[90px] bg-[#00B69B] text-white'>
                    <Link href='/databaselogin'> <div className=' m-auto'> <Image src={arrow} width={50} height={50} className=' m-auto mt-[25%] text-center items-center' /></div></Link>
                </div>
            </div>
        </div>
    );
};

export default Card;
