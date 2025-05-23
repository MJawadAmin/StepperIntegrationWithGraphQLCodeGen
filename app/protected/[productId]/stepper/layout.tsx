"use client";
import React from "react";
import Header from "@/components/Header";
import Stepper from "@/components/Stepper";

const StepperLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="bg-[#F76300] min-h-dvh">
      <div className="mx-auto max-w-[1365px] px-6 min-h-full pb-10 pt-9">
        {/* Navbar Section */}
        <Header />

        {/* Stepper Navigation */}
        <Stepper />

        {/* Page Content */}
        <div className="mt-2 bg-white rounded-[8px] text-black sm:px-[30px] px-4 pt-[25px] pb-[52px]">
          {children}
        </div>
      </div>
    </main>
  );
};

export default StepperLayout;
