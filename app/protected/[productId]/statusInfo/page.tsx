"use client";
import React from "react";
import { useRouter } from "next/navigation";

const StatusInfoPage = () => {
    const router = useRouter();

  return (
    <main>
      <div 
        className="w-full flex justify-center bg-[#fff] h-full relative" 
      >
        <div className="w-full bg-[#fff] min-h-screen max-w-[1362px] py-6">
          <div>
            {/* Header Section */}
            <div 
              className="w-full sticky top-0 z-10 flex justify-between px-16" 
            >
              <div className="flex gap-3 items-center">
                <button 
                  className="bg-[#FFE2CF] text-[12px] w-[80px] h-[29px] rounded-[3px] text-[#F76300]"
                  type="button"
                    onClick={() => router.push("/protected/productList")}
                >
                  Home
                </button>
              </div>
              <button 
                className="bg-[#FFE2CF] text-[12px] w-[80px] h-[29px] rounded-[3px] text-[#F76300]"
                type="button"
                onClick={() => router.push("/auth/sign-in")}
              >
                Log Out
              </button>
            </div>

            {/* Main Content */}
            <div 
              className="w-11/12 mx-auto sm:px-[40px] px-[20px] lg:px-[100px] xl:px-[80px] md:px-[50px] mt-[30px] bg-white rounded-[5px] shadow-2xl" 
            >
              <div 
                className="h-[500px] overflow-auto pb-[20px]" 
                style={{ scrollbarWidth: "none" as any }}
              >
                <div className="flex flex-col lg:flex-row justify-between items-center">
                  <h1 className="text-[25px] mt-[25px] font-semibold">ALL Info</h1>
                  <div style={{ 
                    position: "fixed", 
                    zIndex: 9999, 
                    inset: "16px", 
                    pointerEvents: "none" 
                  }}></div>
                  <div className="mt-[25px] mx-auto">
                    <p className="font-bold">Stay Tuned</p>
                  </div>
                </div>

                {/* Status Message */}
                <div className="mt-[25px] h-5/6">
                  <h2 
                    className="text-sm h-3/4 flex flex-col justify-center text-center items-center px-4 text-orange-500"
                    style={{ color: "#f97316" }}
                  >
                    Your application is in process. We will get back to you in 15 working days.
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default StatusInfoPage;