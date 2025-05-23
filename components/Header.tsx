"use client";
import { memo, useMemo } from "react";
import { useRouter, useSearchParams } from "next/navigation";

const steps = [
  { number: 1, label: "Agreement" },
  { number: 2, label: "Applicant Info" },
  { number: 3, label: "Model Info" },
  { number: 4, label: "Document" },
  { number: 5, label: "Test Report" },
  { number: 6, label: "Fees" },
] as const;

const Header = memo(() => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentStep = Number(searchParams?.get("step")) || 1;
  
  const currentStepLabel = useMemo(() => 
    steps.find(step => step.number === currentStep)?.label || 'Agreement',
    [currentStep]
  );

  const btnStyle = "bg-[#FFE2CF] text-[12px] w-[80px] h-[29px] rounded-[3px] text-[#F76300] hover:opacity-90 transition-opacity";

  return (
    <div className="flex justify-between items-center mt-5">
      <button onClick={() => router.push("/protected/productList")} className={btnStyle}>
        Home
      </button>
      <h1 className="font-poppins text-center text-white font-semibold md:text-[27px] text-[20px] leading-[27px]">
        {currentStepLabel}
      </h1>
      <button onClick={() => router.push("/auth/sign-in")} className={btnStyle}>
        Logout
      </button>
    </div>
  );
});

Header.displayName = "Header";
export default Header;