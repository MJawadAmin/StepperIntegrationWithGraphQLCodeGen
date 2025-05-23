"use client";
import { useState, useEffect } from "react";
import { useStepperStore } from "@/store/useStepperStore";
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { Country } from 'country-state-city';

interface FormState {
  company_name: string;
  company_address: string;
  company_country: string;
  company_province: string;
  company_city: string;
  factory_country: string;
  factory_province: string;
  factory_city: string;
  factory_address: string;
  factory_telephone: string;
  office_telephone: string;
  office_managing_director_name: string;
  contact_person_name: string;
  contact_person_phone: string;
  contact_person_telephone: string;
  contact_person_email: string;
  registered_with_chamber: "yes" | "no";
  member_of_association: "yes" | "no";
  registration_number: string;
  registration_year: string;
  membership_name: string;
  membership_number: string;
  membership_year: string;
  sales_network_regions: string[];
}

const Step2 = () => {
  const [formData, setFormData] = useState<FormState>({
    company_name: "",
    company_address: "",
    company_country: "",
    company_province: "",
    company_city: "",
    factory_country: "",
    factory_province: "",
    factory_city: "",
    factory_address: "",
    factory_telephone: "",
    office_telephone: "",
    office_managing_director_name: "",
    contact_person_name: "",
    contact_person_phone: "",
    contact_person_telephone: "",
    contact_person_email: "",
    registered_with_chamber: "no",
    member_of_association: "no",
    registration_number: "",
    registration_year: "",
    membership_name: "",
    membership_number: "",
    membership_year: "",
    sales_network_regions: [],
  });

  const { steps_info, updateStepper } = useStepperStore();
  const regions = ['Punjab', 'Sindh', 'KPK', 'Balochistan', 'AJK', 'Gilgit-Baltistan'];

  useEffect(() => {
    if (steps_info?.[0]?.applicantInfo) {
      const applicantInfo = steps_info[0].applicantInfo;
      setFormData({
        company_name: applicantInfo.company_name ?? "",
        company_address: applicantInfo.company_address ?? "",
        company_country: applicantInfo.company_country ?? "",
        company_province: applicantInfo.company_province ?? "",
        company_city: applicantInfo.company_city ?? "",
        factory_country: applicantInfo.factory_country ?? "",
        factory_province: applicantInfo.factory_province ?? "",
        factory_city: applicantInfo.factory_city ?? "",
        factory_address: applicantInfo.factory_address ?? "",
        factory_telephone: applicantInfo.factory_telephone ?? "",
        office_telephone: applicantInfo.office_telephone ?? "",
        office_managing_director_name: applicantInfo.office_managing_director_name ?? "",
        contact_person_name: applicantInfo.contact_person_name ?? "",
        contact_person_phone: applicantInfo.contact_person_phone ?? "",
        contact_person_telephone: applicantInfo.contact_person_telephone ?? "",
        contact_person_email: applicantInfo.contact_person_email ?? "",
        registered_with_chamber: applicantInfo.registered_with_chamber ? "yes" : "no",
        member_of_association: applicantInfo.member_of_association ? "yes" : "no",
        registration_number: applicantInfo.registration_number ?? "",
        registration_year: applicantInfo.registration_year ?? "",
        membership_name: applicantInfo.membership_name ?? "",
        membership_number: applicantInfo.membership_number ?? "",
        membership_year: applicantInfo.membership_year ?? "",
        sales_network_regions: (applicantInfo.sales_network_regions ?? []) as string[],
      });
    }
  }, [steps_info]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    updateFormState(name, value);
  };

  const handlePhoneChange = (value: string, field: keyof FormState) => {
    updateFormState(field, value);
  };

  const handleCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    setFormData(prev => {
      const newRegions = checked 
        ? [...prev.sales_network_regions, value]
        : prev.sales_network_regions.filter(region => region !== value);
      return { ...prev, sales_network_regions: newRegions };
    });
    updateStore('sales_network_regions', 
      formData.sales_network_regions.includes(value)
        ? formData.sales_network_regions.filter(region => region !== value)
        : [...formData.sales_network_regions, value]
    );
  };

  const updateFormState = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
    updateStore(name as keyof FormState, value);
  };

  const updateStore = (field: keyof FormState, value: string | string[]) => {
    const updatedInfo = [...steps_info];
    const applicantInfo = updatedInfo[0]?.applicantInfo ?? {};
    
    updatedInfo[0] = {
      ...updatedInfo[0],
      applicantInfo: {
        ...applicantInfo,
        [field]: value
      }
    };

    updateStepper({ steps_info: updatedInfo });
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6">Company Information</h2>

      {/* Company Information Section */}
      <div className="shadow-md border rounded-xl p-5 mb-5 border-zinc-300 text-sm">
        <h3 className="text-lg mb-4">Company Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 items-center">
          <div className="flex flex-col">
            <label htmlFor="company_name">Company Name<span className="text-red-500">*</span></label>
            <input
              id="company_name"
              name="company_name"
              value={formData.company_name}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded mt-1"
              required
            />
          </div>
          
          <div className="flex flex-col">
            <label htmlFor="company_country">Country<span className="text-red-500">*</span></label>
            <select
              id="company_country"
              name="company_country"
              value={formData.company_country}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded mt-1"
              required
            >
              <option value="">Select Country</option>
              {Country.getAllCountries().map(c => (
                <option key={c.isoCode} value={c.isoCode}>{c.name}</option>
              ))}
            </select>
          </div>

          <div className="flex flex-col">
            <label htmlFor="company_province">Province/State<span className="text-red-500">*</span></label>
            <input
              id="company_province"
              name="company_province"
              value={formData.company_province}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded mt-1"
              required
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="company_city">City<span className="text-red-500">*</span></label>
            <input
              id="company_city"
              name="company_city"
              value={formData.company_city}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded mt-1"
              required
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="company_address">Company Address<span className="text-red-500">*</span></label>
            <textarea
              id="company_address"
              name="company_address"
              value={formData.company_address}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded mt-1"
              required
            />
          </div>
        </div>
      </div>

      {/* Factory Information Section */}
      <div className="shadow-md border rounded-xl p-5 mb-5 border-zinc-300 text-sm">
        <h3 className="text-lg mb-4">Factory Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 items-center">
          <div className="flex flex-col">
            <label htmlFor="factory_country">Country<span className="text-red-500">*</span></label>
            <select
              id="factory_country"
              name="factory_country"
              value={formData.factory_country}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded mt-1"
              required
            >
              <option value="">Select Country</option>
              {Country.getAllCountries().map(c => (
                <option key={c.isoCode} value={c.isoCode}>{c.name}</option>
              ))}
            </select>
          </div>

          <div className="flex flex-col">
            <label htmlFor="factory_province">Province/State<span className="text-red-500">*</span></label>
            <input
              id="factory_province"
              name="factory_province"
              value={formData.factory_province}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded mt-1"
              required
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="factory_city">City<span className="text-red-500">*</span></label>
            <input
              id="factory_city"
              name="factory_city"
              value={formData.factory_city}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded mt-1"
              required
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="factory_address">Factory Address<span className="text-red-500">*</span></label>
            <textarea
              id="factory_address"
              name="factory_address"
              value={formData.factory_address}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded mt-1"
              required
            />
          </div>

          <div className="flex flex-col">
            <label>Factory Telephone<span className="text-red-500">*</span></label>
            <PhoneInput
              country={'pk'}
              value={formData.factory_telephone}
              onChange={(value) => handlePhoneChange(value, 'factory_telephone')}
              inputClass="w-full p-2 border border-gray-300 rounded"
            />
          </div>

          <div className="flex flex-col">
            <label>Office Telephone<span className="text-red-500">*</span></label>
            <PhoneInput
              country={'pk'}
              value={formData.office_telephone}
              onChange={(value) => handlePhoneChange(value, 'office_telephone')}
              inputClass="w-full p-2 border border-gray-300 rounded"
            />
          </div>
        </div>
      </div>

      {/* Contact Information Section */}
      <div className="shadow-md border rounded-xl p-5 mb-5 border-zinc-300 text-sm">
        <h3 className="text-lg mb-4">Contact Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 items-center">
          <div className="flex flex-col">
            <label htmlFor="contact_person_name">Contact Person<span className="text-red-500">*</span></label>
            <input
              id="contact_person_name"
              name="contact_person_name"
              value={formData.contact_person_name}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded mt-1"
              required
            />
          </div>

          <div className="flex flex-col">
            <label>Mobile Phone<span className="text-red-500">*</span></label>
            <PhoneInput
              country={'pk'}
              value={formData.contact_person_phone}
              onChange={(value) => handlePhoneChange(value, 'contact_person_phone')}
              inputClass="w-full p-2 border border-gray-300 rounded"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="contact_person_email">Email<span className="text-red-500">*</span></label>
            <input
              type="email"
              id="contact_person_email"
              name="contact_person_email"
              value={formData.contact_person_email}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded mt-1"
              required
            />
          </div>
        </div>
      </div>

      {/* Registration Sections */}
      {['registered_with_chamber', 'member_of_association'].map((field) => (
        <div key={field} className="shadow-md border rounded-xl p-5 mb-5 border-zinc-300 text-sm">
          <p className="mb-4">
            {field === 'registered_with_chamber'
              ? 'Registered with Chamber of Commerce?'
              : 'Member of Association?'}
            <span className="text-red-500">*</span>
          </p>
          <div className="flex gap-4 mb-4">
            {['yes', 'no'].map(option => (
              <label key={option} className="flex items-center gap-2">
                <input
                  type="radio"
                  name={field}
                  value={option}
                  checked={formData[field as keyof FormState] === option}
                  onChange={handleChange}
                  className="accent-[#F76300]"
                />
                {option.charAt(0).toUpperCase() + option.slice(1)}
              </label>
            ))}
          </div>

          {formData[field as keyof FormState] === 'yes' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {field === 'registered_with_chamber' ? (
                <>
                  <div className="flex flex-col">
                    <label>Registration Number<span className="text-red-500">*</span></label>
                    <input
                      name="registration_number"
                      value={formData.registration_number}
                      onChange={handleChange}
                      className="w-full p-2 border border-gray-300 rounded mt-1"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label>Registration Year<span className="text-red-500">*</span></label>
                    <input
                      type="number"
                      name="registration_year"
                      value={formData.registration_year}
                      onChange={handleChange}
                      className="w-full p-2 border border-gray-300 rounded mt-1"
                      min="1900"
                      max="2099"
                    />
                  </div>
                </>
              ) : (
                <>
                  <div className="flex flex-col">
                    <label>Membership Name<span className="text-red-500">*</span></label>
                    <input
                      name="membership_name"
                      value={formData.membership_name}
                      onChange={handleChange}
                      className="w-full p-2 border border-gray-300 rounded mt-1"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label>Membership Number<span className="text-red-500">*</span></label>
                    <input
                      name="membership_number"
                      value={formData.membership_number}
                      onChange={handleChange}
                      className="w-full p-2 border border-gray-300 rounded mt-1"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label>Membership Year<span className="text-red-500">*</span></label>
                    <input
                      type="number"
                      name="membership_year"
                      value={formData.membership_year}
                      onChange={handleChange}
                      className="w-full p-2 border border-gray-300 rounded mt-1"
                      min="1900"
                      max="2099"
                    />
                  </div>
                </>
              )}
            </div>
          )}
        </div>
      ))}

      {/* Sales Network Section */}
      <div className="shadow-md border rounded-xl p-5 border-zinc-300 text-sm">
        <h3 className="mb-4">Sales Network Regions<span className="text-red-500">*</span></h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {regions.map(region => (
            <label key={region} className="flex items-center gap-2">
              <input
                type="checkbox"
                name="sales_network_regions"
                value={region}
                checked={formData.sales_network_regions.includes(region)}
                onChange={handleCheckbox}
                className="w-5 h-5 accent-[#F76300]"
              />
              {region}
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Step2;