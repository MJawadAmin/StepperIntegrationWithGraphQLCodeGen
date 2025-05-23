"use client";

import { useState } from "react";
import Image from "next/image";

const SignUp = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phone: "+92",
    password: "",
    confirmPassword: "",
    showPassword: false,
    showConfirmPassword: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const togglePasswordVisibility = (field: "showPassword" | "showConfirmPassword") => {
    setFormData((prevState) => ({ ...prevState, [field]: !prevState[field] }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
  };

  return (
    <div className="w-full h-screen py-4 flex items-center justify-center bg-gray-100">
      <div className="w-11/12 mx-auto shadow-lg mt-3 bg-white flex rounded-lg overflow-hidden">
        
        {/* Form Section */}
        <div className="w-full lg:w-1/2 flex items-center justify-center p-6">
          <form className="w-full sm:w-3/4" onSubmit={handleSubmit}>
            <h3 className="text-[#F76300] font-semibold text-lg lg:text-2xl text-center mb-6 font-poppins">
              Sign Up
            </h3>
            
            {/* Username */}
            <div className="mb-3">
              <label className="text-sm text-gray-900 font-poppins">
                <span className="text-red-500">*</span> User Name
              </label>
              <input
                type="text"
                name="username"
                className="w-full px-3 py-2 border rounded focus:outline-none focus:border-red-400"
                placeholder="Type User Name"
                value={formData.username}
                onChange={handleChange}
                required
              />
            </div>

            {/* Email */}
            <div className="mb-3">
              <label className="text-sm text-gray-900 font-poppins">
                <span className="text-red-500">*</span> Email Address
              </label>
              <input
                type="email"
                name="email"
                className="w-full px-3 py-2 border rounded focus:outline-none focus:border-red-400"
                placeholder="Example@gmail.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            {/* Phone Number */}
            <div className="mb-3">
              <label className="text-sm text-gray-900 font-poppins">
                <span className="text-red-500">*</span> Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                className="w-full px-3 py-2 border rounded focus:outline-none focus:border-red-400"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>

            {/* Password */}
            <div className="mb-3 relative">
              <label className="text-sm text-gray-900 font-poppins">
                <span className="text-red-500">*</span> Password
              </label>
              <div className="relative">
                <input
                  type={formData.showPassword ? "text" : "password"}
                  name="password"
                  className="w-full px-3 py-2 border rounded focus:outline-none focus:border-red-400"
                  placeholder="Use characters & symbols"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-3 flex items-center"
                  onClick={() => togglePasswordVisibility("showPassword")}
                >
                  {formData.showPassword ? "🙈" : "👁️"}
                </button>
              </div>
            </div>

            {/* Confirm Password */}
            <div className="mb-3 relative">
              <label className="text-sm text-gray-900 font-poppins">
                <span className="text-red-500">*</span> Confirm Password
              </label>
              <div className="relative">
                <input
                  type={formData.showConfirmPassword ? "text" : "password"}
                  name="confirmPassword"
                  className="w-full px-3 py-2 border rounded focus:outline-none focus:border-red-400"
                  placeholder="Confirm your password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-3 flex items-center"
                  onClick={() => togglePasswordVisibility("showConfirmPassword")}
                >
                  {formData.showConfirmPassword ? "🙈" : "👁️"}
                </button>
              </div>
            </div>

            {/* Submit Button */}
            <div className="mt-4">
              <button type="submit" className="w-full bg-[#F76300] text-white py-2 rounded font-semibold">
                Next
              </button>
            </div>

            {/* Already a Member? */}
            <div className="flex justify-end mt-2">
              <p className="text-[#F76300] text-xs font-medium cursor-pointer">
                Already a member?
              </p>
            </div>

            {/* Contact Info */}
            <div className="w-full mt-4 py-2 bg-gray-100 text-black text-xs text-center font-semibold">
              In case of any problem contact us on{" "}
              <span className="text-[#F76300] cursor-pointer underline">
                (051) 2272649
              </span>
            </div>
          </form>
        </div>

        {/* Image Section */}
        <div className="hidden lg:block lg:w-1/2">
          <Image
            src="/images/login.png"
            alt="Signup Illustration"
            width={500}
            height={500}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
