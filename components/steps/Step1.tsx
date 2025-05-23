"use client";
import { memo, Suspense, useEffect, useState, useCallback } from "react";
import { useStepperStore } from "@/store/useStepperStore";
import isEqual from "lodash.isequal";

const Step1 = memo(function Step1() {
  const [selectedOption, setSelectedOption] = useState("");
  const { steps_info, updateStepper } = useStepperStore();

  // Load data from store when component mounts - only once
  useEffect(() => {
    // Make sure steps_info exists and has a first item
    if (steps_info?.[0]?.applicantInfo?.user_agreement !== undefined) {
      setSelectedOption(
        steps_info[0].applicantInfo.user_agreement ? "yes" : "no"
      );
    } else {
      // Default to "no" if not set
      setSelectedOption("no");
    }
  }, []); // Empty dependency array to run only once on mount

  // Update store when user agreement changes
  const handleAgreementChange = useCallback(
    (agreed: boolean) => {
      setSelectedOption(agreed ? "yes" : "no");

      // Get current steps_info from store - ensure it's a new array for immutability
      const currentStepsInfo = [
        ...(useStepperStore.getState().steps_info || []),
      ];

      // If there's no first element, create one
      if (!currentStepsInfo[0]) {
        currentStepsInfo[0] = {};
      }

      // Ensure applicantInfo exists on first element
      if (!currentStepsInfo[0].applicantInfo) {
        currentStepsInfo[0].applicantInfo = {};
      }

      // Now safely update the user_agreement field
      currentStepsInfo[0] = {
        ...currentStepsInfo[0],
        applicantInfo: {
          ...currentStepsInfo[0].applicantInfo,
          user_agreement: agreed,
        },
      };

      // Update the store with new state
      updateStepper({ steps_info: currentStepsInfo });
    },
    [updateStepper]
  );

  return (
    <Suspense fallback={<p>Loading</p>}>
      <div className="flex gap-[2px]">
        <span className="text-[#FB0000] text-[23px]">*</span>
        <p className="w-full font-poppins font-normal sm:text-[20px] text-base leading-8 sm:leading-[44px]">
          6. Read and understand the National Energy Efficiency and Conservation
          (Pakistan Energy Labels for Fans) regulations, 2023.
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#F76300] border-b-2 border-b-[#F76300] p-[5px] hover:opacity-90 transition-opacity"
            href="https://neeca.pk/neecagov/regulations/SRO411(I)-2024.pdf"
          >
            Do you agree with the requirement, criteria, and conditions
          </a>{" "}
          for grant of Pakistan Energy label given in these regulations?
        </p>
      </div>

      <div className="flex gap-5 my-3">
        {["yes", "no"].map((opt) => (
          <div key={opt} className="flex items-center gap-2">
            <input
              className="w-5 h-5 accent-[#F76300]"
              id={`submit${opt}`}
              type="radio"
              value={opt}
              name="checksubmit"
              checked={selectedOption === opt}
              onChange={(e) => handleAgreementChange(e.target.value === "yes")}
            />
            <label htmlFor={`submit${opt}`}>
              {opt === "yes" ? "Yes" : "No"}
            </label>
          </div>
        ))}
      </div>
    </Suspense>
  );
});

export default Step1;
