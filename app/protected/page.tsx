"use client";
import React from "react";

const AgreementForm = () => {
  const steps = [
    { number: 1, label: "Agreement", active: true },
    { number: 2, label: "Applicant Info", active: true },
    { number: 3, label: "Model Info", active: false },
    { number: 4, label: "Document", active: false },
    { number: 5, label: "Test Report", active: false },
    { number: 6, label: "Fees", active: false },
  ];

  return (
    <main className="bg-[#F76300] min-h-dvh">
      <div className="mx-auto max-w-[1365px] px-6 min-h-full pb-10 pt-9">
        {/* Header Section */}
        <div className="flex justify-between items-center mt-5">
          <button className="bg-[#FFE2CF] text-[12px] w-[80px] h-[29px] rounded-[3px] text-[#F76300] hover:opacity-90 transition-opacity">
            Home
          </button>
          <h1 className="font-poppins text-center text-white font-semibold md:text-[27px] text-[20px] leading-[27px]">
            Agreement
          </h1>
          <button className="bg-[#FFE2CF] text-[12px] w-[80px] h-[29px] rounded-[3px] text-[#F76300] hover:opacity-90 transition-opacity">
            Logout
          </button>
        </div>

        {/* Progress Steps */}
        <div className="bg-[#173B45] mt-10 py-5 px-20 rounded-[5px] overflow-x-auto scrollbar-hidden">
          <div className="flex justify-between items-center">
            {steps.map((step, index) => (
              <React.Fragment key={step.number}>
                <div className="flex flex-col items-center">
                  <div
                    className={`w-8 h-8 flex items-center justify-center rounded-full p-4 font-bold ${
                      step.active
                        ? "bg-[#F76300] border-[#F76300]"
                        : "bg-[#d1d5db]"
                    }`}
                  >
                    {step.number}
                  </div>
                  <p className="mt-4 text-white text-sm">{step.label}</p>
                </div>
                {index < steps.length - 1 && (
                  <div className="border-t-2 border-white flex-1 mx-4 pb-6" />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Agreement Content */}
        <div className="mt-2 bg-white rounded-[8px] text-black sm:px-[30px] px-4 pt-[25px] pb-[52px]">
          <div className="flex gap-[2px]">
            <span className="text-[#FB0000] pt-[9px] text-[23px]">*</span>
            <p className="w-full font-poppins font-normal sm:text-[20px] text-base leading-8 sm:leading-[44px]">
              6. Read and understand the National Energy Efficiency and Conservation (Pakistan Energy Labels for Fans) regulations, 2023.
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#F76300] border-b-[#F76300] border-b-2 p-[5px] hover:opacity-90 transition-opacity"
                href="https://neeca.pk/neecagov/regulations/SRO411(I)-2024.pdf"
              >
                Do you agree with the requirement, criteria, and conditions
              </a>{" "}
              for grant of Pakistan Energy label given in these regulations?
            </p>
          </div>

          {/* Radio Buttons */}
          <div className="flex gap-5 mb-5 mt-3">
            <div className="flex items-center gap-2">
              <input
                className="w-5 h-5 accent-[#F76300]"
                id="submitYes"
                type="radio"
                value="yes"
                name="checksubmit"
              />
              <label htmlFor="submitYes">Yes</label>
            </div>
            <div className="flex items-center gap-2">
              <input
                className="w-5 h-5 accent-[#F76300]"
                id="submitNo"
                type="radio"
                value="no"
                name="checksubmit"
              />
              <label htmlFor="submitNo">No</label>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex sm:flex-row flex-col gap-4 justify-center mt-10 w-full pb-5">
            <button
              disabled
              className="sm:w-[120px] h-[40px] rounded-[3px] border-[1px] border-[#F76300] font-poppins font-bold text-[18px] text-[#F76300] disabled:opacity-35 disabled:cursor-not-allowed hover:bg-[#F76300]/10 transition-colors"
            >
              Previous
            </button>
            <button className="sm:w-[120px] h-[40px] rounded-[3px] bg-[#F76300] font-poppins font-bold text-[18px] text-white hover:bg-[#F76300]/90 transition-colors">
              Next
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AgreementForm;