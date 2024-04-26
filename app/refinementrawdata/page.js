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
          <div className="shadow-[0px_0px_4px_-1px_rgba(0,0,0,0.25)] rounded-[33.1px] border-[1px_solid_#EEEEEE] bg-[#FFFFFF] relative m-[1px_18px_0_0] justify-center flex flex-row p-[8px_12px_8px_0] w-[186px] h-[fit-content] box-sizing-border">
              <div className="m-[0_16.7px_0_0] flex flex-row justify-center box-sizing-border">
                <div className="break-words font-['Poppins'] font-normal text-[17px] text-[#414141]">
                  Get CUSIIPs
                </div>
              </div>
              
            </div>
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
        <div className="filter-sec p-3 m-2 border-t border-l border-r border-black rounded-t-lg rounded-tr-lg rounded-tl-lg">
          <div className='flex justify-between pl-10 pr-10 '>
          <h3 className="font-Poppins font-semibold text-[21px] text-#000842">Filters</h3>

            <div className='count-sec flex gap-3 justify-between'>
            <div className="shadow-[0px_0px_2.8px_-0.7px_rgba(0,0,0,0.25)] rounded-[23.3px] border-[0.7px_solid_#EEEEEE] bg-[#FFFFFF] relative m-[0_0_0.1px_0] flex flex-row p-[5.6px_8.5px_5.3px_11.3px] box-sizing-border">
              <div className="m-[0_5px_0_0] flex flex-row justify-center box-sizing-border">
                <span className="break-words font-['Poppins'] font-normal text-[12px] text-[#414141]">
                  Total Count
                </span>
              </div>
              <div className="rounded-[8.8px] bg-[#F5F6FA] relative m-[0_0_0.4px_0] flex flex-row justify-center p-[1.4px_10px_2.2px_8.5px] box-sizing-border">
                <span className="break-words font-['Poppins'] font-semibold text-[9.6px] text-[#414141]">
                  670
                </span>
              </div>

            </div>
            <div className="shadow-[0px_0px_4px_-1px_rgba(0,0,0,0.25)] rounded-[33.1px] border-[1px_solid_#EEEEEE] bg-[#FFFFFF] relative flex flex-row justify-center p-[6px_11px_6px_15px] box-sizing-border">
              <div className="flex flex-row justify-center box-sizing-border">
                <span className="break-words font-['Poppins'] font-normal text-[11.1px] text-[#414141]">
                  ✨ Run Automation
                </span>
              </div>
            </div>
            <div className="shadow-[0px_0px_4px_-1px_rgba(0,0,0,0.25)] rounded-[33.1px] border-[1px_solid_#EEEEEE] bg-[#F5F6FA] relative flex flex-row p-[3px_3px_3px_15px] box-sizing-border">
              <div className="m-[3px_8.5px_3px_0] flex flex-row justify-center box-sizing-border">
                <span className="break-words font-['Poppins'] font-normal text-[11.1px] text-[#414141]">
                  Records Selected
                </span>
              </div>
              <div className="rounded-[13px] bg-[#FFFFFF] relative flex flex-row justify-center p-[4px_0_4px_0.3px] w-[64px] h-[fit-content] box-sizing-border">
                <span className="break-words font-['Poppins'] font-medium text-[10.1px] text-[#414141]">
                  78
                </span>
              </div>
            </div>
            </div>
          </div>
          <div className='points-sec  flex justify-center gap-4 mt-5'>
          <div className="shadow-[0px_0px_4px_-1px_rgba(0,0,0,0.25)] rounded-[33.1px] border-[1px_solid_#EEEEEE] bg-[#F5F6FA] relative m-[0_16px_0_0] flex flex-row justify-center p-[10px_91.2px_10px_0] w-[193px] box-sizing-border">
            <div className="flex flex-row justify-center box-sizing-border">
              <span className="break-words font-['Poppins'] font-normal text-[14px] text-[#414141]">
                Sources
              </span>
            </div>
          </div>
          <div className="shadow-[0px_0px_4px_-1px_rgba(0,0,0,0.25)] rounded-[33.1px] border-[1px_solid_#EEEEEE] bg-[#F5F6FA] relative m-[0_16px_0_0] flex flex-row justify-center p-[10px_91.2px_10px_0] w-[193px] box-sizing-border">
            <div className="flex flex-row justify-center box-sizing-border">
              <span className="break-words font-['Poppins'] font-normal text-[14px] text-[#414141]">
                Sources
              </span>
            </div>
          </div>
          <div className="shadow-[0px_0px_4px_-1px_rgba(0,0,0,0.25)] rounded-[33.1px] border-[1px_solid_#EEEEEE] bg-[#F5F6FA] relative m-[0_16px_0_0] flex flex-row justify-between p-[10px_12.8px_10px_0] w-[117px] box-sizing-border">
            <div className="flex flex-row justify-center box-sizing-border">
              <span className="break-words font-['Poppins'] font-normal text-[14px] text-[#414141]">
                Rank
              </span>
            </div>
            <div className="m-[2px_0_3.3px_0] flex flex-col items-center w-[8.2px] h-[fit-content] box-sizing-border">
              <div className="m-[0_0_2.3px_0] flex flex-row justify-center w-[8.2px] h-[4.7px] box-sizing-border">
                <img className="w-[8.2px] h-[4.7px]" />
              </div>
              <div className="rounded-[1px] bg-[#ACACAC] m-[0_3.2px_2px_3px] w-[2px] h-[2px]">
              </div>
              <div className="flex flex-row justify-center w-[8.2px] h-[4.7px] box-sizing-border">
                <img className="w-[8.2px] h-[4.7px]" />
              </div>
            </div>
          </div>
          <div className="shadow-[0px_0px_4px_-1px_rgba(0,0,0,0.25)] rounded-[33.1px] border-[1px_solid_#EEEEEE] bg-[#F5F6FA] relative m-[0_16px_0_0] flex flex-row justify-center p-[10px_109.1px_10px_0] w-[193px] box-sizing-border">
            <div className="flex flex-row justify-center box-sizing-border">
              <span className="break-words font-['Poppins'] font-normal text-[14px] text-[#414141]">
                Shelf
              </span>
            </div>
          </div>
          <div className="shadow-[0px_0px_4px_-1px_rgba(0,0,0,0.25)] rounded-[33.1px] border-[1px_solid_#EEEEEE] bg-[#F5F6FA] relative m-[0_18px_0_0] flex flex-row justify-center p-[10px_107.9px_10px_0] w-[193px] box-sizing-border">
            <div className="flex flex-row justify-center box-sizing-border">
              <span className="break-words font-['Poppins'] font-normal text-[14px] text-[#414141]">
                Date
              </span>
            </div>
          </div>
          <div className="shadow-[0px_0px_4px_-1px_rgba(0,0,0,0.25)] rounded-[33.1px] border-[1px_solid_#EEEEEE] bg-[#F5F6FA] relative flex flex-row justify-between p-[10px_17px_10px_19px] w-[289px] box-sizing-border">
          <input className="flex flex-row justify-center box-sizing-border placeholder-gray-500::placeholder rounded-lg" placeholder="Search">

              
            </input>
            <img className="m-[2px_0_4px_0] w-[15px] h-[15px]" />
          </div>
          </div>
          <div className='points-sec  flex justify-center gap-4 mt-3'>
          <div className="shadow-[0px_0px_4px_-1px_rgba(0,0,0,0.25)] rounded-[33.1px] border-[1px_solid_#EEEEEE] bg-[#F5F6FA] relative m-[0_9px_0_0] flex flex-row justify-center p-[10px_91.2px_10px_0] w-[193px] box-sizing-border">
            <div className="flex flex-row justify-center box-sizing-border">
              <span className="pl-4 break-words font-['Poppins'] font-normal text-[14px] text-[#414141]">
              BWIC Outlier
              </span>
            </div>
          </div>
          <div className="shadow-[0px_0px_4px_-1px_rgba(0,0,0,0.25)] rounded-[33.1px] border-[1px_solid_#EEEEEE] bg-[#F5F6FA] relative m-[0_16px_0_0] ml-2 flex flex-row justify-center p-[10px_91.2px_10px_0] w-[193px] box-sizing-border">
            <div className="flex flex-row justify-center box-sizing-border">
              <span className="break-words font-['Poppins'] font-normal text-[14px] text-[#414141]">
              Staleness
              </span>
            </div>
          </div>
          <div className="shadow-[0px_0px_4px_-1px_rgba(0,0,0,0.25)] rounded-[33.1px] border-[1px_dashed_#00B69B] bg-[#CCF0EB] relative m-[0_32px_1px_0] flex flex-row p-[10px_0_10px_0] w-[158px] h-[fit-content] box-sizing-border">
            <img className="m-[4px_14px_6px_0] w-[11px] h-[11px]" />
            <button className="break-words font-['Poppins'] font-normal text-[14px] text-[#00B69B]">
              Add more
            </button>
          </div>
          <div className="shadow-[0px_0px_4px_-1px_rgba(0,0,0,0.25)] rounded-[33.1px] border-[1px_solid_#FEDB89] bg-[#FEF2D6] relative m-[1px_1px_0_0] flex flex-row justify-center p-[10px_0_10px_0.9px] w-[187px] h-[fit-content] box-sizing-border">
            <div className="flex flex-row justify-center box-sizing-border">
              <span className="break-words font-['Poppins'] font-bold text-[14px] text-[#FEC53D]">
                Default Sort data
              </span>
            </div>
          </div>
          <div className="shadow-[0px_0px_4px_-1px_rgba(0,0,0,0.25)] rounded-[33.1px] border-[1px_solid_#FFFFFF] bg-[#FCD7D4] relative m-[1px_11px_0_0] flex flex-row justify-end p-[10px_19.9px_10px_19.9px] w-[157px] box-sizing-border">
            <div className="flex flex-row justify-center box-sizing-border">
              <span className="break-words font-['Poppins'] font-bold text-[14px] text-[#EF3826]">
                Delete Selected
              </span>
            </div>
          </div>
          <div className="shadow-[0px_0px_4px_-1px_rgba(0,0,0,0.25)] rounded-[33.1px] border-[1px_solid_#D6D6FF] bg-[#E4E4FF] relative m-[0_7px_1px_0] flex flex-row justify-center p-[10px_0_10px_1px] w-[157px] h-[fit-content] box-sizing-border">
            <div className="flex flex-row justify-center box-sizing-border">
              <span className="break-words font-['Poppins'] font-bold text-[14px] text-[#8280FF]">
                BIAS Size
              </span>
            </div>
          </div>
          <div className="shadow-[0px_0px_4px_-1px_rgba(0,0,0,0.25)] rounded-[33.1px] border-[1px_solid_#D7FFF9] bg-[#CCF0EB] relative m-[0_0_1px_0] flex flex-row justify-center p-[10px_0_10px_0.3px] w-[125px] h-[fit-content] box-sizing-border">
            <div className="flex flex-row justify-center box-sizing-border">
              <span className="break-words font-['Poppins'] font-bold text-[14px] text-[#00B69B]">
                Save Data
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