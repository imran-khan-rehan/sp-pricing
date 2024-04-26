'use client';
import React from 'react';
import SphericalComponent from '@/component/sphere';
export default function Screen2() {
    return (
      <div className="bg-[#FFFFFF]  flex flex-col p-[26px_56.9px_0_65px] box-sizing-border">
        <div className="m-[0_0_50px_0] flex flex-row justify-between  box-sizing-border">
          <div className="m-[2px_19.5px_1px_0] inline-block w-[798.5px] break-words font-['Poppins']  font-semibold text-[26px] text-[#000842]">
          Color Process - Raw Color DB Data
          </div>
          <div className="flex flex-row box-sizing-border">
            <div className="rounded-[33.1px] bg-[#CCF0EB] relative m-[0_17.9px_1.3px_0] justify-center flex flex-row  p-[7.6px_0_8.1px_0] w-[139.1px] h-[fit-content] box-sizing-border">
              <div className="rounded-[4.2px] bg-[#00B69B] m-[8.5px_5.1px_8px_0] w-[8.5px] h-[8.5px]">
              </div>
              <div className="break-words flex text-center items-center justify-center font-['Poppins'] font-semibold text-[17px] text-[#00B69B]">
                Online
              </div>
            </div>
            
            <div className="shadow-[0px_0px_4px_-1px_rgba(0,0,0,0.25)] rounded-[33.1px] border-[1px_solid_#EEEEEE] bg-[#FFFFFF] relative m-[1px_18px_0_0] justify-center flex flex-row p-[8px_12px_8px_0] w-[186px] h-[fit-content] box-sizing-border">
              <div className="m-[0_16.7px_0_0] flex flex-row justify-center box-sizing-border">
                <div className="break-words font-['Poppins'] font-normal text-[17px] text-[#414141]">
                  Run Sql Query
                </div>
              </div>
              
            </div>
            <div className="shadow-[0px_0px_4px_-1px_rgba(0,0,0,0.25)] rounded-[33.1px] border-[1px_solid_#EEEEEE] bg-[#FFFFFF] relative m-[1px_18px_0_0] justify-center flex flex-row p-[8px_12px_8px_0] w-[186px] h-[fit-content] box-sizing-border">
              <div className="m-[0_16.7px_0_0] flex flex-row justify-center box-sizing-border">
                <div className="break-words font-['Poppins'] font-normal text-[17px] text-[#414141]">
                  Days Offset
                </div>
              </div>
              <div className="rounded-[12.5px] bg-[#F5F6FA] relative flex flex-row justify-center p-[0_17.9px_0_16px] box-sizing-border">
                <span className="break-words font-['Poppins'] font-semibold text-[17px] text-[#414141]">
                  1
                </span>
              </div>
            </div>
            <div className="shadow-[0px_0px_4px_-1px_rgba(0,0,0,0.25)] rounded-[33.1px] border-[1px_solid_#EEEEEE] bg-[#FFFFFF] relative m-[0_0_1.3px_0] flex flex-row justify-center p-[8px_0_7.7px_1.5px] w-[139.1px] h-[fit-content] box-sizing-border">
              <div className="flex flex-row justify-center box-sizing-border">
                <span className="break-words font-['Poppins'] font-semibold text-[17px] text-[#414141]">
                  Logout
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="rounded-[21px] bg-[#F5F6FA] relative m-[0_8.1px_0_0] flex flex-col h-screen items-center p-[264px_32.7px_233px_32.7px] box-sizing-border">
          <div className="m-[0_0_10px_5.5px] inline-block break-words font-['Poppins'] font-semibold text-[35.3px] text-[#000842]">
            Fetching the data from  database name 
          </div>
          <div className="m-[0_2.4px_405px_0] inline-block break-words font-['Poppins'] font-normal text-[19.9px] text-[#000842]">
            Please wait
          </div>
          <div className="flex flex-row self-end w-[fit-content] box-sizing-border">
            <span className="m-[0_16.7px_0_0] break-words font-['Poppins'] font-normal text-[19.9px] text-[#000842]">
              Time Elapsed
            </span>
            <span className="break-words font-['Poppins'] font-normal text-[19.9px] text-[#000842]">
              2m 40s
            </span>
          </div>
        </div>
      </div>
    )
  }