import React from 'react'
import Card from '@/component/card'
export default function page() {
    return (
        <div className=' flex flex-wrap flex-col p-10 gap-10 ' >
            <div className=' flex justify-between items-center'>
                <div className=' flex flex-col'>
                    <div className=' text-3xl font-semibold'>
                        Welcome User to the SP Pricing Portal
                    </div>
                    <div>
                        Choose from the below options
                    </div>
                </div>
                <div>
                    <button className=' border px-8 rounded-lg py-2'> logout</button>
                </div>
            </div>
            <div className=' flex flex-1 flex-wrap gap-8 justify-center items-center'>
                <Card heading="Process communication" options={['Select your asset class']} />
                <Card heading="Process communication" options={['Select your asset class']} />
                <Card heading="Process communication" options={['Select your asset class']} />

                <Card heading="Process communication" options={['Select your asset class']} />
            </div>
        </div>
    )
}
