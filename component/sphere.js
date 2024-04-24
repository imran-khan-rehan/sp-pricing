import React from 'react';

const SphericalComponent = ({ backgroundImage, text, onClickFunction }) => {
    return (
        <div className="relative w-full h-96 bg-cover bg-center flex flex-col items-center justify-center text-white" style={{ backgroundImage: "url('/icons/shpereblack.svg')" }}>
            <h1 className="text-3xl mb-4">Your Heading</h1>
            <p className="text-lg mb-6">Your text description goes here.</p>
            <button className="px-6 py-3 text-lg bg-blue-500 hover:bg-blue-700 text-white rounded">Click Me</button>
        </div>
        // <div className="w-80 h-30 rounded-full overflow-hidden relative">
        //     <img
        //         className="absolute w-7 h-14 object-cover"
        //         src='/icons/shpereblack.svg'
        //         alt="Background"
        //     />

        //     <div className="absolute inset-0 flex items-center justify-center">
        //         <div className="text-center text-black">
        //             <p>{text}</p>
        //             <button
        //                 onClick={onClickFunction}
        //                 className="mt-2 px-4 py-2 bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
        //             >
        //                 Click Me
        //             </button>
        //         </div>
        //     </div>
        // </div>
    );
};

export default SphericalComponent;
