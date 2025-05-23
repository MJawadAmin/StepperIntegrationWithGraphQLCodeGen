"use client";
import React, { useState, useCallback, memo, useMemo, useEffect } from "react";
import { useStepperStore } from "@/store/useStepperStore";
import { useQuery } from "@apollo/client";
import { gql } from "@apollo/client";
import isEqual from 'lodash.isequal';

const GET_SETTINGS = gql`
  query ClientGetSettingsByKey($key: String!) {
    clientGetSettingsByKey(key: $key) {
      id
      key
      value
    }
  }
`;

type FeeInfo = {
  payOrderNo: string;
  date: string;
  demand_draft: string;
};

interface FeeProps { 
  title: string; 
  productPrice: string; 
  onChange: (info: FeeInfo) => void;
  initialData: FeeInfo;
}

interface FileUploadProps { 
  onFileChange: (fileName: string) => void; 
  inputId: string;
  value: string;
}

const FileUpload = memo(({ onFileChange, inputId, value }: FileUploadProps) => {
  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    onFileChange(file ? file.name : "");
  }, [onFileChange]);

  return (
    <div className="w-full max-w-[350px] h-[300px] border border-zinc-300 flex flex-col items-center justify-center overflow-hidden">
      <input id={inputId} className="hidden" accept="application/pdf,image/png,image/jpeg,image/jpg" type="file" onChange={handleChange} />
      <div className="flex flex-col items-center justify-center w-full">
        <svg viewBox="0 0 1024 1024" width="50px" height="50px" fill="#f76300" aria-hidden="true">
          <path d="M885.2 446.3l-.2-.8-112.2-285.1c-5-16.1-19.9-27.2-36.8-27.2H281.2c-17 0-32.1 11.3-36.9 27.6L139.4 443l-.3.7-.2.8c-1.3 4.9-1.7 9.9-1 14.8-.1 1.6-.2 3.2-.2 4.8V830a60.9 60.9 0 0060.8 60.8h627.2c33.5 0 60.8-27.3 60.9-60.8V464.1c0-1.3 0-2.6-.1-3.7.4-4.9 0-9.6-1.3-14.1zm-295.8-43l-.3 15.7c-.8 44.9-31.8 75.1-77.1 75.1-22.1 0-41.1-7.1-54.8-20.6S436 441.2 435.6 419l-.3-15.7H229.5L309 210h399.2l81.7 193.3H589.4zm-375 76.8h157.3c24.3 57.1 76 90.8 140.4 90.8 33.7 0 65-9.4 90.3-27.2 22.2-15.6 39.5-37.4 50.7-63.6h156.5V814H214.4V480.1z"/>
        </svg>
        <p className="text-sm font-light mt-2">Drag & Drop file here</p>
        <label className="mt-2 text-[#362921] font-medium cursor-pointer border-b-2 border-b-primary" htmlFor={inputId}>
          {value || "Browse File"}
        </label>
      </div>
    </div>
  );
});

const FeeSection = memo(({ title, productPrice, onChange, initialData }: FeeProps) => {
  const [info, setInfo] = useState<FeeInfo>(initialData);

  const handleInput = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInfo(prev => {
      const newInfo = { ...prev, [name]: value };
      onChange(newInfo);
      return newInfo;
    });
  }, [onChange]);

  const handleFile = useCallback((fileName: string) => {
    setInfo(prev => {
      const newInfo = { ...prev, demand_draft: fileName };
      onChange(newInfo);
      return newInfo;
    });
  }, [onChange]);

  return (
    <div className="shadow-md px-5 pt-2 pb-5 rounded-md">
      <div className="flex items-center mb-4">
        <input type="checkbox" className="w-6 h-6 border-2 rounded flex items-center justify-center cursor-pointer border-gray-300" />
        <label className="ml-3">{title}</label>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 items-center">
        <div className="mb-4">
          <label className="block">Product Price</label>
          <input className="mt-1 p-2 border text-gray-600 border-gray-300 rounded-md w-full h-9" readOnly value={productPrice} />
        </div>
        <div className="mb-4">
          <label className="block">Pay Order No:</label>
          <input 
            placeholder="123" 
            className="mt-1 p-2 border rounded-md w-full h-9 border-gray-300" 
            required 
            name="payOrderNo" 
            value={info.payOrderNo} 
            onChange={handleInput} 
          />
        </div>
        <div className="mb-4">
          <label className="block">Date</label>
          <input 
            className="mt-1 p-2 border rounded-md w-full h-9 border-gray-300" 
            required 
            type="date" 
            name="date" 
            value={info.date} 
            onChange={handleInput} 
          />
        </div>
      </div>
      <div className="mt-10">
        <p>Upload Demand Draft / Pay Order Evidence (PDF, JPG, PNG Only)</p>
        <FileUpload 
          onFileChange={handleFile} 
          inputId={`fileInput${title.replace(/\s+/g, "")}`} 
          value={info.demand_draft}
        />
      </div>
    </div>
  );
});

const Step6 = () => {
  const { steps_info, updateStepper } = useStepperStore();
  
  // Fetch fees from API
  const { data: productFeeData } = useQuery(GET_SETTINGS, {
    variables: { key: "Product Registration fee" },
    context: { headers: { Authorization: localStorage.getItem("NECCA_AUTH_TOKEN") } }
  });

  const { data: modelFeeData } = useQuery(GET_SETTINGS, {
    variables: { key: "Model Registration fee" },
    context: { headers: { Authorization: localStorage.getItem("NECCA_AUTH_TOKEN") } }
  });

  // Parse fee values with fallbacks
  const productFee = useMemo(() => 
    parseInt(productFeeData?.clientGetSettingsByKey?.value || "100000"), 
    [productFeeData]
  );

  const modelFee = useMemo(() => 
    parseInt(modelFeeData?.clientGetSettingsByKey?.value || "13000"), 
    [modelFeeData]
  );

  // Format currency display
  const formatCurrency = useCallback((amount: number) => 
    `PKR ${amount.toLocaleString("en-PK")}`, 
    []
  );

  // Find the step index with payment info
  const stepIndex = useMemo(() => 
    steps_info.findIndex(step => step.payment), 
    [steps_info]
  );

  // Memoize payments array
  const payments = useMemo(() => 
    steps_info[stepIndex]?.payment || [], 
    [steps_info, stepIndex]
  );

  // Get initial payment data
  const companyPayment = useMemo(() => 
    payments.find(p => p.payment_type === "companyinfo") || {
      payment_type: "companyinfo",
      amount: productFee,
      payment_date: "",
      pay_order_number: "",
      demand_draft: ""
    }, 
    [payments, productFee]
  );

  const modelPayment = useMemo(() => 
    payments.find(p => p.payment_type === "modelinfo") || {
      payment_type: "modelinfo",
      amount: modelFee,
      payment_date: "",
      pay_order_number: "",
      demand_draft: ""
    }, 
    [payments, modelFee]
  );

  const updatePayment = useCallback((type: "companyinfo" | "modelinfo", newData: FeeInfo, amount: number) => {
    const updatedPayments = payments.map(p => 
      p.payment_type === type ? {
        ...p,
        amount,
        pay_order_number: newData.payOrderNo,
        payment_date: newData.date,
        demand_draft: newData.demand_draft
      } : p
    );

    // Add if not exists
    if (!updatedPayments.some(p => p.payment_type === type)) {
      updatedPayments.push({
        payment_type: type,
        amount,
        pay_order_number: newData.payOrderNo,
        payment_date: newData.date,
        demand_draft: newData.demand_draft
      });
    }

    const newStepsInfo = [...steps_info];
    newStepsInfo[stepIndex] = {
      ...newStepsInfo[stepIndex],
      payment: updatedPayments
    };

    if (!isEqual(newStepsInfo, steps_info)) {
      updateStepper({ steps_info: newStepsInfo });
    }
  }, [payments, steps_info, stepIndex, updateStepper]);

  return (
    <form className="flex flex-col gap-5 text-sm">
      <h1>7. Specify the information about deposited non-refundable Fees payable to NEECA*</h1>
      
      <FeeSection 
        title="Company Registration Fee" 
        productPrice={formatCurrency(productFee)}
        onChange={(info) => updatePayment("companyinfo", info, productFee)}
        initialData={{
          payOrderNo: companyPayment.pay_order_number,
          date: companyPayment.payment_date,
          demand_draft: companyPayment.demand_draft
        }}
      />

      <FeeSection 
        title="Model Registration Fee" 
        productPrice={formatCurrency(modelFee)}
        onChange={(info) => updatePayment("modelinfo", info, modelFee)}
        initialData={{
          payOrderNo: modelPayment.pay_order_number,
          date: modelPayment.payment_date,
          demand_draft: modelPayment.demand_draft
        }}
      />
    </form>
  );
};

export default memo(Step6);