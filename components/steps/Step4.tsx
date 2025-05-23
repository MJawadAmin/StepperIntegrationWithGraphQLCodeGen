"use client";
import React, { useState, useRef, useEffect, useMemo } from "react";
import { useStepperStore } from "@/store/useStepperStore";
import isEqual from 'lodash.isequal';

type FormState = {
  companyBrochure: string;
  productBrochure: string;
};

interface FileUploadProps {
  title: string;
  description: string;
  name: keyof FormState;
  value: string;
  onChange: (name: keyof FormState, fileName: string) => void;
}

const FileUpload: React.FC<FileUploadProps> = ({ title, description, name, value, onChange }) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      onChange(name, selectedFile.name);
    }
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const droppedFile = event.dataTransfer.files[0];
    if (droppedFile) {
      onChange(name, droppedFile.name);
    }
  };

  const handleClick = () => fileInputRef.current?.click();

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-xl font-semibold">{title}</h1>
      <p>{description}</p>
      <div
        className="flex flex-col items-center justify-center w-[300px] h-[150px] border border-zinc-300 cursor-pointer"
        onClick={handleClick}
        onDragOver={(e) => e.preventDefault()}
        onDrop={handleDrop}
      >
        <input
          ref={fileInputRef}
          type="file"
          accept=".pdf,.doc,.docx"
          className="hidden"
          onChange={handleFileChange}
          required // Add required attribute
        />
        <svg viewBox="0 0 1024 1024" width="50px" height="50px" fill="#f76300" aria-hidden="true">
          <path d="M885.2 446.3l-.2-.8-112.2-285.1c-5-16.1-19.9-27.2-36.8-27.2H281.2c-17 0-32.1 11.3-36.9 27.6L139.4 443l-.3.7-.2.8c-1.3 4.9-1.7 9.9-1 14.8-.1 1.6-.2 3.2-.2 4.8V830a60.9 60.9 0 0060.8 60.8h627.2c33.5 0 60.8-27.3 60.9-60.8V464.1c0-1.3 0-2.6-.1-3.7.4-4.9 0-9.6-1.3-14.1zm-295.8-43l-.3 15.7c-.8 44.9-31.8 75.1-77.1 75.1-22.1 0-41.1-7.1-54.8-20.6S436 441.2 435.6 419l-.3-15.7H229.5L309 210h399.2l81.7 193.3H589.4zm-375 76.8h157.3c24.3 57.1 76 90.8 140.4 90.8 33.7 0 63.3-10.9 87.3-31.7 19.2-16.5 33.3-38.8 41.4-65.5h158.1V816H214.4V480.1z" />
        </svg>
        <span>{value || "Drag and drop, or browse"}</span>
      </div>
    </div>
  );
};

const Step4: React.FC = () => {
  const { steps_info, updateStepper } = useStepperStore();

  // Memoize index calculation
  const applicantInfoIndex = useMemo(() => steps_info.findIndex((step) => step.applicantInfo !== undefined), [steps_info]);

  // Memoize applicant info
  const existingApplicantInfo = useMemo(() => steps_info[applicantInfoIndex]?.applicantInfo || {}, [steps_info, applicantInfoIndex]);

  const [formData, setFormData] = useState<FormState>({
    companyBrochure: existingApplicantInfo.company_brochure || "",
    productBrochure: existingApplicantInfo.product_brochure || ""
  });

  // Update Zustand store when formData changes
  useEffect(() => {
    const updatedStepsInfo = [...steps_info];
    if (applicantInfoIndex === -1) return;

    const updatedApplicantInfo = {
      ...existingApplicantInfo,
      company_brochure: formData.companyBrochure,
      product_brochure: formData.productBrochure
    };

    const newStepsInfo = updatedStepsInfo.map((step, index) =>
      index === applicantInfoIndex ? { ...step, applicantInfo: updatedApplicantInfo } : step
    );

    console.log(newStepsInfo);

    if (!isEqual(newStepsInfo, steps_info)) {
      updateStepper({ steps_info: newStepsInfo });
    }
  }, [formData, steps_info, applicantInfoIndex]);

  const handleFileChange = (name: keyof FormState, fileName: string) => {
    setFormData(prev => ({ ...prev, [name]: fileName }));
  };

  return (
    <div className="bg-white rounded-[8px] text-black sm:px-[30px] px-4 text-sm">
      <h1 className="text-center">9. The following documents should be attached with the application</h1>
      <div className="flex flex-col justify-center gap-10 p-4 md:flex-row">
        <FileUpload
          title="a. Company Brochure"
          description="PDF, DOC only (Maximum 100 MB)"
          name="companyBrochure"
          value={formData.companyBrochure}
          onChange={handleFileChange}
        />
        <FileUpload
          title="b. Product Brochure"
          description="PDF, DOC only (Maximum 100 MB)"
          name="productBrochure"
          value={formData.productBrochure}
          onChange={handleFileChange}
        />
      </div>
    </div>
  );
};

export default Step4;