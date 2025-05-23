"use client";
import { useState, memo, useCallback, useMemo, useEffect } from 'react';
import 'react-phone-input-2/lib/style.css';
import { Country } from "country-state-city"; // Import Country for country options
import { useStepperStore } from "@/store/useStepperStore";
import isEqual from 'lodash.isequal';

type FormState = {
  brand_name: string;
  model_name: string;
  manufacture_date: string;
  origin_country: string;
  kw_rating: number;
  annual_energy_consumption: number;
  cooling_capacity: string;
  refrigerant_type: string;
  colors: string;
  ps_mark: boolean;
  specify_number: string; // Add specify_number to formData
  energy_efficiency_features: string;
  estimated_production_per_anum: string;
};

const Step3 = memo(() => {
  const { steps_info, updateStepper } = useStepperStore();
  
  // Memoize index calculation
  const modelInfoIndex = useMemo(() => 
    steps_info.findIndex((step) => step.modelInfo !== undefined),
    [steps_info]
  );

  // Memoize model info to prevent unnecessary reference changes
  const existingModelInfo = useMemo(() => 
    steps_info[modelInfoIndex]?.modelInfo || {},
    [steps_info, modelInfoIndex]
  );

  const [formData, setFormData] = useState<FormState>({
    brand_name: existingModelInfo?.ac?.brand_name || '',
    model_name: existingModelInfo?.ac?.model_name || '',
    manufacture_date: existingModelInfo?.ac?.manufacture_date || '',
    origin_country: existingModelInfo?.ac?.origin_country || '',
    kw_rating: existingModelInfo?.ac?.kw_rating || 0,
    annual_energy_consumption: existingModelInfo?.ac?.annual_energy_consumption || 0,
    cooling_capacity: existingModelInfo?.ac?.cooling_capacity || '',
    refrigerant_type: existingModelInfo?.ac?.refrigerant_type || '',
    colors: existingModelInfo?.ac?.colors || '',
    ps_mark: existingModelInfo?.ac?.ps_mark || false,
    specify_number: existingModelInfo?.ac?.specify_number || '', // Initialize specify_number
    energy_efficiency_features: existingModelInfo?.ac?.energy_efficiency_features || '',
    estimated_production_per_anum: existingModelInfo?.estimated_production_per_anum || '',
  });

  // Update Zustand store when formData changes
  useEffect(() => {
    const updatedStepsInfo = [...steps_info];
    
    if (modelInfoIndex === -1) return;

    const updatedModelInfo = {
      ...existingModelInfo, // Preserve existing fields
      model_name: formData.model_name,
      estimated_production_per_anum: formData.estimated_production_per_anum,
      ac: {
        ...existingModelInfo.ac,
      brand_name: formData.brand_name,
      model_name: formData.model_name,
      manufacture_date: formData.manufacture_date,
      origin_country: formData.origin_country,
      kw_rating: formData.kw_rating,
      annual_energy_consumption: formData.annual_energy_consumption,
      cooling_capacity: formData.cooling_capacity,
      refrigerant_type: formData.refrigerant_type,
      colors: formData.colors,
      ps_mark: formData.ps_mark,
      specify_number: formData.specify_number,
      energy_efficiency_features: formData.energy_efficiency_features,
      }
    };

    // Create new array only if changes exist
    const newStepsInfo = updatedStepsInfo.map((step, index) => 
      index === modelInfoIndex 
        ? { ...step, modelInfo: updatedModelInfo }
        : step
    );

    // Deep compare to prevent unnecessary updates
    if (!isEqual(newStepsInfo, steps_info)) {
      updateStepper({ steps_info: newStepsInfo });
      console.log("Step 3 updated", steps_info);
      // console.log("Step 3 updated", newStepsInfo);
    }
  }, [formData, steps_info, modelInfoIndex]);

  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === "number" ? Number.parseFloat(value) : value,
    }));
  }, []);

  return (
    <form className="mt-5 p-2 w-full">
      <div className="shadow-md border rounded-xl p-5 mb-5 border-zinc-300 text-sm">
        <h3 className="sm:text-xl text-base mb-4">5. Detailed information of the product for which labelling is required:</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 items-center">
          {[
            { id: "brand_name", label: "a. Brand Name", type: "text", placeholder: "Brand Name..." },
            { id: "model_name", label: "b. Model Name", type: "text", placeholder: "Model Name..." },
            { id: "manufacture_date", label: "c. Date of Manufacturer or Imported Year:", type: "date", placeholder: "Date" },
            { id: "origin_country", label: "d. If Imported, Origin of the Country of the Product:", type: "select" },
            { id: "kw_rating", label: "e. Rating of Product/Appliance in kW:", type: "number", placeholder: "KW Rating..." },
          ].map(field => (
            <div key={field.id} className="w-full flex flex-col">
              <label htmlFor={field.id}>{field.label}<span className="text-red-500">*</span></label>
              {field.type === "select" && field.id === "origin_country" ? (
                <select
                  id={field.id}
                  name={field.id}
                  value={String(formData[field.id as keyof FormState])}
                  onChange={handleInputChange}
                  className="mt-2 text-black w-full h-9 border rounded p-2 border-zinc-300 text-sm"
                  required
                >
                  <option value="">Select Country</option>
                  {Country.getAllCountries().map(c => (
                    <option key={c.isoCode} value={c.name}>{c.name}</option>
                  ))}
                </select>
              ) : field.type === "select" ? (
                <select
                  id={field.id}
                  name={field.id}
                  value={String(formData[field.id as keyof FormState])}
                  onChange={handleInputChange}
                  className="mt-2 text-black w-full h-9 border rounded p-2 border-zinc-300 text-sm"
                  required
                >
                  <option value="">Select {field.label}</option>
                  {/* Add other options here if needed */}
                </select>
              ) : (
                <input
                  id={field.id}
                  name={field.id}
                  placeholder={field.placeholder}
                  className="mt-2 text-black w-full h-9 border rounded p-2 border-zinc-300 text-sm"
                  type={field.type}
                  value={String(formData[field.id as keyof FormState])}
                  onChange={handleInputChange}
                  required
                />
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="shadow-md border rounded-xl p-5 mb-5 border-zinc-300 text-sm">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 items-center">
          {[
            { id: "annual_energy_consumption", label: "f. Rated Annual Energy Consumption:", type: "number", placeholder: "Annual Energy Consumption..." },
            { id: "cooling_capacity", label: "g. Cooling Capacity/Compressor Type:", type: "text", placeholder: "Cooling Capacity..." },
            { id: "refrigerant_type", label: "h. Type of Refrigerant:", type: "text", placeholder: "Type..." },
            { id: "colors", label: "i. Color (Specify All Available Colors):", type: "text", placeholder: "Colors..." },
          ].map(field => (
            <div key={field.id} className="w-full flex flex-col">
              <label htmlFor={field.id}>{field.label}<span className="text-red-500">*</span></label>
              <input
                id={field.id}
                name={field.id}
                placeholder={field.placeholder}
                className="mt-2 text-black w-full h-9 border rounded p-2 border-zinc-300 text-sm"
                type={field.type}
                value={String(formData[field.id as keyof FormState])}
                onChange={handleInputChange}
                required
              />
            </div>
          ))}
        </div>
      </div>

      <div className="shadow-md border rounded-xl p-5 mb-5 border-zinc-300 text-sm">
        <p className="mb-4">j. Is the product granted PS Mark by Pakistan Standards & Quality Control Authority (PSQCA)?</p>
        <div className="flex gap-5 mb-5">
          {["true", "false"].map(opt => (
            <div key={opt} className="flex items-center gap-2">
              <input
                id={`psMark${opt}`}
                className="accent-[#F76300] w-5 h-5"
                type="radio"
                value={opt}
                name="ps_mark"
                checked={formData.ps_mark === (opt === "true")}
                onChange={handleInputChange}
              />
              <label htmlFor={`psMark${opt}`}>{opt === "true" ? "Yes" : "No"}</label>
            </div>
          ))}
        </div>
        {formData.ps_mark === true && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            <div className="flex flex-col">
              <label htmlFor="specify_number">Specify the No.<span className="text-red-500">*</span></label>
              <input
                id="specify_number"
                placeholder="Specify the No."
                className="mt-2 text-black w-full h-9 border rounded p-2 border-zinc-300"
                type="text"
                value={formData.specify_number}
                name="specify_number"
                onChange={handleInputChange}
              />
            </div>
          </div>
        )}
      </div>

      <div className="shadow-md border rounded-xl p-5 mb-5 border-zinc-300 text-sm">
        <p className="mb-4">k. Any other salient feature of the product regarding energy consumption/ efficiency:<span className="text-red-500">*</span></p>
        <input
          id="energy_efficiency_features"
          name="energy_efficiency_features"
          placeholder="Energy Efficiency..."
          className="mt-2 text-black w-full md:max-w-[30vw] h-9 border rounded p-2 border-zinc-300 text-sm"
          type="text"
          value={formData.energy_efficiency_features}
          onChange={handleInputChange}
          required
        />
      </div>

      <div className="shadow-md border rounded-xl p-5 mb-5 border-zinc-300 text-sm">
        <p className="mb-4 mt-4">8. Estimated production per annum of product/appliance of Model for which the application is submitted?<span className="text-red-500">*</span></p>
        <input
          id="estimated_production_per_anum"
          name="estimated_production_per_anum"
          placeholder="Estimated Production per anum..."
          className="mt-2 text-black w-full h-9 border rounded p-2 border-zinc-300 text-sm"
          type="text"
          value={formData.estimated_production_per_anum}
          onChange={handleInputChange}
          required
        />
      </div>
    </form>
  );
});

export default Step3;