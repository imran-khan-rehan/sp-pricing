'use client';
import React from 'react';
import SphericalComponent from '@/component/sphere';

export default function Screen1() {
    return (
      <div className="bg-[#FFFFFF] flex flex-col items-center p-[26px_56.9px_160.4px_65px] box-sizing-border">
        <div className="m-[0_0_137px_0] flex flex-row justify-between box-sizing-border">
          <div className="m-[2px_19.5px_1px_0] inline-block w-[798.5px] break-words font-['Poppins']  font-semibold text-[26px] text-[#000842]">
            Color Process - Selection
          </div>
          <div className="flex flex-row w-[500.1px] box-sizing-border">
            <div className="rounded-[33.1px] bg-[#CCF0EB] relative m-[0_17.9px_1.3px_0] justify-center flex flex-row p-[7.6px_0_8.1px_0] w-[139.1px] h-[fit-content] box-sizing-border">
              <div className="rounded-[4.2px] bg-[#00B69B] m-[8.5px_5.1px_8px_0] w-[8.5px] h-[8.5px]">
              </div>
              <div className="break-words flex text-center items-center justify-center font-['Poppins'] font-semibold text-[17px] text-[#00B69B]">
                Online
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
        <div className="m-[0_54.1px_0_46px] flex flex-row w-[fit-content] box-sizing-border">
          <div className="rounded-[15.5px] m-[92px_85.9px_179.6px_0] flex flex-col w-[375.1px] box-sizing-border">
            <div>
            <div className="relative m-[0_0_14px_0] p-[0_0_1px_0] w-[fit-content] box-sizing-border">
              <span className="relative break-words font-['Poppins'] font-semibold text-[44.4px] leading-[1.189] text-[#000842]">
                Choose the <br />
                cleaning process
              </span>
            </div>
            <span className="left-[50%] bottom-[0px] translate-x-[-50%] break-words font-['Poppins'] font-light text-[14px] text-[#000842]">
                Manual process will have more control over each step while automation makes task easy.
              </span>
            </div>
            
            <div className="rounded-[15.5px] flex flex-col self-start w-[fit-content] box-sizing-border">
              <div className="m-[0_0_7px_0] inline-block break-words font-['Poppins'] font-semibold text-[20px] text-[#000842]">
                Something went wrong?
              </div>
              <div className="rounded-[15.5px] bg-[#000842] relative m-[0_0_7px_0] flex flex-row justify-center self-start p-[2px_1px_1px_0] w-[181px] box-sizing-border">
                <span className="break-words font-['Poppins'] font-normal text-[13px] leading-[2.173] text-[#FFFFFF]">
                  Restore Old Data
                </span>
              </div>
              <span className="m-[0_3px_0_3px] self-start break-words font-['Poppins'] font-medium text-[9.6px] text-[#00B69B]">
                Last Saved Data 8 Apr 2024 | 5:23 PM EST
              </span>
            </div>
          </div>
          <div className="flex flex-row box-sizing-border">
            <div className="relative m-[1px_43px_0_0] flex flex-row justify-center p-[0_0_43.6px_0] w-[357px] h-[533.6px] box-sizing-border">
              <div className="rounded-[178.5px] bg-[#000842] relative flex flex-row justify-center p-[59px_10px_0_0] w-[357px] h-[490px] box-sizing-border">
                <div className="relative flex flex-row justify-center p-[3px_0_0_0] box-sizing-border">
                  <span className="relative text-center break-words font-['Poppins'] font-bold text-[29.6px] leading-[1.147] text-[#FFFFFF]">
                    Auto <br />
                    Cleaning Process 
                  </span>
                  <div className="relative top-[0px] right-[64.2px] break-words font-['Poppins'] font-bold text-white text-[29.6px] leading-[1.147]">
    ✨
</div>


                </div>
                
              </div>
              <div className="rounded-[178.5px] absolute left-[28px] right-[29.6px] bottom-[0px] flex flex-col justify-center items-center box-sizing-border">
                <div className="rounded-[15.5px] bg-[#FFFFFF] relative m-[0_0_50px_7.6px] flex flex-row justify-center p-[1px_1px_2px_0] w-[117px] box-sizing-border">
                  <span className="break-words font-['Poppins'] font-normal text-[13px] leading-[2.173] text-[#000842]">
                    Click here
                  </span>
                </div>
                <div class="bg-[50%_50%] bg-cover bg-no-repeat rotate-[-19.366deg] w-[299.4px] h-[286.6px]" style={{backgroundImage: "url('/public/icons/preview1.png')"}}>
</div>

              </div>
            </div>
            <div className="rounded-[178.5px] bg-[#F5F6FA] relative m-[0_0_44.6px_0] flex justify-center flex-col p-[63px_0_291px_30.9px] w-[357px] box-sizing-border">
              <div className=" ml-6 relative m-[0_0_35px_0] flex flex-row justify-center self-start p-[2px_0_0_0] box-sizing-border">
                <span className="relative text-center break-words font-['Poppins'] font-bold text-[29.6px] leading-[1.147] text-[#000842]">
                  Manual <br />
                  Cleaning Process 
                </span>
                <div className=" ml-4 relative top-[0px] right-[64.2px] break-words font-['Poppins'] font-bold text-white text-[29.6px] leading-[1.147]">
                <img  src='/icons/fileexe.png'></img>
                </div>
              </div>
              
              <div className="mr-14 rounded-[15.5px] bg-[#000842] relative m-[0_0_0_50px] flex flex-row justify-center self-center p-[1px_1px_2px_0] w-[117px] box-sizing-border">
                <div className="break-words font-['Poppins'] font-normal text-[13px] leading-[2.173] text-[#FFFFFF]">
                  Click here
                </div>
              </div>
              <div className="rounded-[178.5px] absolute left-[0px] top-[0px] right-[0px] bottom-[0px] h-[100%]">
                <div className="bg-black banner1 bg-[50%_50%] bg-cover bg-no-repeat rotate-[-20.159deg] absolute right-[-99.5px] bottom-[-69.7px] w-[424.5px] h-[342.7px]">

                </div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    )
  }
