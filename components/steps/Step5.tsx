"use client";
import React, { useState, useEffect, useMemo, useCallback } from "react";
import Select from "react-select";
import { Country } from "country-state-city";
import { useQuery } from "@apollo/client";
import { gql } from "@apollo/client";
import { useStepperStore } from "@/store/useStepperStore";
import isEqual from 'lodash.isequal';

const GET_LABS = gql`
  query ClientGetAllLabs($country: String, $labType: String, $productId: String, $labOrigin: String, $labCategory: String) {
    clientGetAllLabs(country: $country, lab_type: $labType, product_id: $productId, lab_origin: $labOrigin, lab_category: $labCategory) {
      id
      name
      country
      lab_type
    }
  }
`;

type LabReportState = {
  test_report: string;
  report_from: string;
  lab_user_name: string;
  lab_id: string;
  lab_country: string;
};

interface FileUploadProps {
  onFileChange: (fileName: string) => void;
  value: string;
}

const FileUpload: React.FC<FileUploadProps> = ({ onFileChange, value }) => {
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) onFileChange(file.name);
  };

  return (
    <div className="w-full border h-[300px] border-zinc-300 flex flex-col items-center justify-center max-w-[500px] mx-auto">
      <input
        id="fileInputuploadedFile"
        className="hidden"
        accept="application/pdf,image/png,image/jpeg,image/jpg"
        type="file"
        onChange={handleFileChange}
      />
      <div className="flex flex-col items-center justify-center w-full">
        <svg viewBox="0 0 1024 1024" focusable="false" data-icon="inbox" width="50px" height="50px" fill="#f76300" aria-hidden="true">
          <path d="M885.2 446.3l-.2-.8-112.2-285.1c-5-16.1-19.9-27.2-36.8-27.2H281.2c-17 0-32.1 11.3-36.9 27.6L139.4 443l-.3.7-.2.8c-1.3 4.9-1.7 9.9-1 14.8-.1 1.6-.2 3.2-.2 4.8V830a60.9 60.9 0 0060.8 60.8h627.2c33.5 0 60.8-27.3 60.9-60.8V464.1c0-1.3 0-2.6-.1-3.7.4-4.9 0-9.6-1.3-14.1zm-295.8-43l-.3 15.7c-.8 44.9-31.8 75.1-77.1 75.1-22.1 0-41.1-7.1-54.8-20.6S436 441.2 435.6 419l-.3-15.7H229.5L309 210h399.2l81.7 193.3H589.4zm-375 76.8h157.3c24.3 57.1 76 90.8 140.4 90.8 33.7 0 65-9.4 90.3-27.2 22.2-15.6 39.5-37.4 50.7-63.6h156.5V814H214.4V480.1z" />
        </svg>
        <p className="mt-2 text-sm font-light">Drag & Drop file here</p>
        <label className="custom-file-upload" htmlFor="fileInputuploadedFile">
          <p className="mt-[10px] mb-4 text-[#362921] font-medium cursor-pointer border-[1px] border-b-primary border-t-0 border-x-0">
            {value || "Browse File"}
          </p>
        </label>
      </div>
    </div>
  );
};

const RadioButton: React.FC<{ label: string; checked: boolean; onChange: () => void }> = ({ label, checked, onChange }) => (
  <div className="flex items-center gap-2">
    <div
      className={`w-6 h-6 border-2 rounded flex items-center justify-center ${checked ? "bg-orange-500 border-orange-500" : "border-gray-300"}`}
      onClick={onChange}
    >
      {checked && (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="white" className="w-4 h-4">
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      )}
    </div>
    <label className="ml-3">{label}</label>
  </div>
);

const Step5 = () => {
  const { steps_info, updateStepper } = useStepperStore();
  const [labLocation, setLabLocation] = useState<"Pakistan" | "Foreign" | string | null>(null);
  const [labCategory, setLabCategory] = useState<"Basic" | "Professional" | null>(null);
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);
  const [selectedLab, setSelectedLab] = useState<string | null>(null);

  // Memoize step index calculation
  const labReportIndex = useMemo(() =>
    steps_info.findIndex(step => step.labReport !== undefined),
    [steps_info]
  );


  // Memoize existing lab report data
  const existingLabReport = useMemo(() =>
    steps_info[labReportIndex]?.labReport || {
      test_report: "",
      report_from: "",
      lab_user_name: "",
      lab_id: "",
      lab_country: ""
    },
    [steps_info, labReportIndex]
  );

  const [labType, setLabType] = useState<"NEECA Accredited Lab" | "NEECA Enlisted Lab" | null>(
    existingLabReport.report_from === "NEECA Accredited Lab"
      ? "NEECA Accredited Lab"
      : existingLabReport.report_from === "NEECA Enlisted Lab"
        ? "NEECA Enlisted Lab"
        : null
  );
  const [formData, setFormData] = useState<LabReportState>({
    test_report: existingLabReport?.test_report || "",
    report_from: existingLabReport?.report_from || "",
    lab_user_name: existingLabReport?.lab_user_name || "",
    lab_id: existingLabReport?.lab_id || "",
    lab_country: existingLabReport?.lab_country || ""
  });
  console.log("jhsgdja", formData);

  // Update Zustand store when formData changes
  useEffect(() => {
    const updatedStepsInfo = [...steps_info];
    if (labReportIndex === -1) return;

    const updatedLabReport = { ...formData };
    const newStepsInfo = updatedStepsInfo.map((step, index) =>
      index === labReportIndex ? { ...step, labReport: updatedLabReport } : step
    );

    console.log(newStepsInfo);

    if (!isEqual(newStepsInfo, steps_info)) {
      updateStepper({ steps_info: newStepsInfo });
    }
  }, [formData, steps_info, labReportIndex]);

  const { loading, error, data, refetch } = useQuery(GET_LABS, {
    variables: {
      productId: "NEERS-PID-2",
      country: labLocation === "Pakistan" ? "Pakistan" : undefined,
      labType: labType === "NEECA Accredited Lab" ? "NEECA Accredited Lab" : "NEECA Enlisted Lab",
      labOrigin: labLocation === "Foreign" ? "foreign" : undefined,
      labCategory: labCategory ? `${labCategory} Category Lab` : undefined
    },
    context: { headers: { Authorization: localStorage.getItem("NECCA_AUTH_TOKEN") } },
    skip: !labType
  });

  const countryOptions = useMemo(() =>
    Country.getAllCountries().map(country => ({
      value: country.isoCode,
      label: country.name
    })),
    []
  );

  const labOptions = useMemo(() =>
    data?.clientGetAllLabs?.map((lab: { id: string; name: string }) => ({
      value: lab.id,
      label: lab.name
    })) || [],
    [data]
  );

  const handleLabSelect = useCallback((option: { value: string; label: string } | null) => {
    if (!option) return;
    setSelectedLab(option.value);
    setFormData(prev => ({
      ...prev,
      lab_id: option.value,
      lab_user_name: option.label
    }));
  }, []);

  // Get initial country from store if it exists
  const initialCountry = useMemo(() => {
    const storedCountry = existingLabReport.lab_country;
    return storedCountry && storedCountry !== "Pakistan" ? storedCountry : null;
  }, [existingLabReport]);


  // Set labLocation based on stored country
  useEffect(() => {
    if (initialCountry) {
      setLabLocation("Foreign");
    }
  }, [initialCountry]);

  // Update form data when country changes
  const handleCountrySelect = useCallback((option: { value: string } | null) => {
    const country = option ? Country.getCountryByCode(option.value)?.name : "";
    setSelectedCountry(country || "");
    setFormData(prev => ({
      ...prev,
      lab_country: country || "",
      // Clear lab selection when country changes
      lab_id: "",
      lab_user_name: ""
    }));
    setSelectedLab(null); // Reset lab selection
  }, []);

  // Add this useEffect to handle lab location changes
useEffect(() => {
  if (labLocation === "Pakistan") {
    setFormData(prev => ({
      ...prev,
      lab_country: "Pakistan"
    }));
    setSelectedCountry(null); // Clear any foreign country selection
  }
}, [labLocation]);

// Initialize lab location from stored data
useEffect(() => {
  if (existingLabReport.lab_country === "Pakistan") {
    setLabLocation("Pakistan");
  } else if (existingLabReport.lab_country) {
    setLabLocation("Foreign");
  }
}, [existingLabReport.lab_country]);

// Update the lab location radio button handler
const handleLabLocationChange = (location: "Pakistan" | "Foreign") => {
  setLabLocation(location);
  if (location === "Pakistan") {
    setFormData(prev => ({
      ...prev,
      lab_country: "Pakistan",
      lab_id: "",
      lab_user_name: ""
    }));
    setSelectedLab(null);
  }
};



  useEffect(() => {
    if (labType) {
      setFormData(prev => ({
        ...prev,
        report_from: labType === "NEECA Accredited Lab" ? "NEECA Accredited Lab" : "NEECA Enlisted Lab"
      }));
      refetch();
    }
  }, [labType, refetch]);


  // if (labLocation !== "" || undefined || null){
  //   const country = Country.getAllCountries().find(country => country.name === labLocation)?.name;
  //   setSelectedCountry(country || "");
  // setFormData(prev => ({ ...prev, lab_country: country || "" }));
  // console.log("selected country", selectedCountry);
  // }

  return (
    <form className="w-full text-sm">
      <h1 className="text-center mb-2">9. The following documents should be attached with the application</h1>
      <h1 className="text-lg text-center font-semibold">c. Product Test Report</h1>
      <p className="text-sm text-center">Pdf, .png, .jpg Only (Maximum 50 MB)</p>

      <FileUpload
        onFileChange={(fileName) => setFormData(prev => ({ ...prev, test_report: fileName }))}
        value={formData.test_report}
      />

      <div className="mt-5 px-5">
        <p>The test is uploaded from:</p>
        <div className="mt-4 flex gap-5 flex-col sm:flex-row sm:gap-10">
          <RadioButton
            label="PNAC Accredited Lab"
            checked={labType === "NEECA Accredited Lab"}
            onChange={() => setLabType("NEECA Accredited Lab")}
          />
          <RadioButton
            label="NEECA Enlisted Lab"
            checked={labType === "NEECA Enlisted Lab"}
            onChange={() => setLabType("NEECA Enlisted Lab")}
          />
        </div>

        {labType === "NEECA Accredited Lab" && (
          <div className="mt-5">
            <Select
              options={labOptions}
              placeholder="Select Lab"
              onChange={handleLabSelect}
              className="w-full sm:w-80 css-b62m3t-container"
            />
          </div>
        )}

        {labType === "NEECA Enlisted Lab" && (
          <div className="mt-5">
            <p>Lab Location:</p>
            <div className="mt-5 flex gap-5 flex-col sm:flex-row sm:gap-10">
            <RadioButton
        label="Lab in Pakistan"
        checked={labLocation === "Pakistan"}
        onChange={() => handleLabLocationChange("Pakistan")}
      />
      <RadioButton
        label="Foreign Labs"
        checked={labLocation === "Foreign"}
        onChange={() => handleLabLocationChange("Foreign")}
      />
            </div>
          </div>
        )}

        {labType === "NEECA Enlisted Lab" && labLocation === "Pakistan" && (
          <div className="mt-5">
            <p>Lab Category:</p>
            <div className="flex mt-4 gap-5 flex-col sm:flex-row sm:gap-10">
              <RadioButton
                label="Basic Category Lab"
                checked={labCategory === "Basic"}
                onChange={() => setLabCategory("Basic")}
              />
              <RadioButton
                label="Professional Category Lab"
                checked={labCategory === "Professional"}
                onChange={() => setLabCategory("Professional")}
              />
            </div>
            {labCategory && (
              <div className="mt-4">
                <Select
                  options={labOptions}
                  placeholder="Select Lab"
                  onChange={handleLabSelect}
                  className="w-full sm:w-80 css-b62m3t-container"
                />
              </div>
            )}
          </div>
        )}

        {labType === "NEECA Enlisted Lab" && labLocation === "Foreign" && (
          <div className="mt-5 flex gap-5 flex-col sm:flex-row sm:gap-10">
            <div>
              <Select
                options={countryOptions}
                placeholder="Select Country"
                onChange={handleCountrySelect}
                value={countryOptions.find(option =>
                  option.label === formData.lab_country
                )}
                className="w-full sm:w-80 css-b62m3t-container"
              />
            </div>
            <div>
              <Select
                options={labOptions}
                placeholder="Select Lab"
                onChange={handleLabSelect}
                className="w-full sm:w-80 css-b62m3t-container"
              />
            </div>
          </div>
        )}

        <p className="mt-5">
          <span className="text-orange-600">Note:</span> You can Proceed to Next Page when PSQCA has Endorsed / Verified
          the Upload Test Report.
        </p>
      </div>
    </form>
  );
};

export default Step5;