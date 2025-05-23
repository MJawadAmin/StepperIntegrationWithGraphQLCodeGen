"use client";
import { useState, Suspense, lazy } from "react";
import { gql, useMutation } from "@apollo/client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useUserStore } from "@/store/useUserStore";

const PhoneInput = lazy(() => import("react-phone-input-2"));
import "react-phone-input-2/lib/style.css";

const CLIENT_SIGNUP_MUTATION = gql`
  mutation ClientSignup(
    $name: String!
    $phone: String!
    $email: String!
    $password: String!
  ) {
    clientSignup(
      name: $name
      phone: $phone
      email: $email
      password: $password
    ) {
      message
      success
    }
  }
`;

const renderLoader = () => <p>Loading</p>;

const SignUpForm = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "+92",
  });
  const [phone, setPhone] = useState("+92");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formError, setFormError] = useState("");

  const [clientSignup, { loading, error }] = useMutation(
    CLIENT_SIGNUP_MUTATION
  );

  const togglePasswordVisibility = () => setShowPassword(!showPassword);
  const toggleConfirmPasswordVisibility = () =>
    setShowConfirmPassword(!showConfirmPassword);

  const { setUserName, setUserEmail, setUserPhone, setJwt } = useUserStore();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    // Basic validation
    if (formData.password !== formData.confirmPassword) {
      setFormError("Passwords do not match");
      return;
    }

    console.log(
      "Sending signup request to:",
      "https://dev-server.neers.com.pk/graphql"
    );

    try {
      const { data } = await clientSignup({
        variables: {
          name: formData.name,
          phone: phone,
          email: formData.email,
          password: formData.password,
        },
      });

      console.log("Signup response:", data);

      if (data?.clientSignup?.success) {
        setUserName(formData.name);
        setUserEmail(formData.email);
        setUserPhone(phone.toString());
        // After successful signup and if API returns token:
        if (data?.clientSignup?.token) {
          localStorage.setItem("NECCA_AUTH_TOKEN", data.clientSignup.token);
          setJwt(data.clientSignup.token);
          console.log("Token stored successfully");
        }
        router.push("/protected/otp");
      } else {
        setFormError(data?.clientSignup?.message || "Registration failed");
      }
    } catch (err) {
      console.error("Signup error:", err);
      setFormError("An error occurred during registration");
    }
  };

  return (
    <Suspense fallback={renderLoader()}>
      <div className="w-full min-h-screen py-4">
        <div className="w-full flex items-center justify-center">
          <h3 className="text-[#F76300] font-semibold text-lg lg:text-[30px] leading-[27px] font-poppins">
            Sign Up
          </h3>
        </div>

        <div className="w-11/12 mx-auto shadow-login mt-3 bg-white flex rounded-[10px]">
          {/* Form Section */}
          <div className="w-full lg:w-1/2 lg:h-[94vh] flex items-center justify-center font-poppins">
            <form
              className="w-11/12 sm:w-[60%] mx-auto"
              onSubmit={handleSubmit}
            >
              <div className="w-full mx-auto flex flex-col gap-4 py-10">
                {/* Username Input */}
                <div className="flex flex-col">
                  <label
                    htmlFor="name"
                    className="text-xs lg:text-sm text-[#1E1E1E]"
                  >
                    <span className="text-[#FB0000]">*</span>User Name
                  </label>
                  <input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="px-2 py-1 w-full focus:outline-none border border-[#e5e7eb] focus:border-red-400 rounded text-black placeholder:font-sans placeholder:font-medium !placeholder:text-greyish-100"
                    placeholder="Type User Name"
                    type="text"
                    required
                  />
                </div>

                {/* Email Input */}
                <div className="flex flex-col">
                  <label
                    htmlFor="email"
                    className="text-xs lg:text-sm text-[#1E1E1E]"
                  >
                    <span className="text-[#FB0000]">*</span>Email Address
                  </label>
                  <input
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="px-2 py-1 w-full focus:outline-none border border-[#e5e7eb] focus:border-red-400 rounded text-black placeholder:font-sans placeholder:font-medium !placeholder:text-greyish-400"
                    placeholder="Example@gmail.com"
                    type="email"
                    required
                  />
                </div>

                {/* Phone Input */}
                <div className="flex flex-col">
                  <label
                    htmlFor="phone"
                    className="text-xs lg:text-sm text-[#1E1E1E]"
                  >
                    <span className="text-[#FB0000]">*</span>Phone Number
                  </label>
                  <PhoneInput
                    country={"pk"}
                    value={phone}
                    onChange={(value) => setPhone(value)}
                    inputProps={{
                      required: true,
                      className:
                        "px-2 pl-12 py-1 w-full focus:outline-none border border-[#e5e7eb] focus:border-red-400 rounded text-black placeholder:font-sans placeholder:font-medium !placeholder:text-greyish-400",
                    }}
                    buttonStyle={{
                      border: "1px solid #e5e7eb",
                      borderRadius: "0.375rem 0 0 0.375rem",
                    }}
                    dropdownStyle={{
                      borderRadius: "0.375rem",
                      boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
                    }}
                  />
                </div>

                {/* Password Input */}
                <div className="flex flex-col">
                  <label
                    htmlFor="password"
                    className="text-xs lg:text-sm text-[#1E1E1E]"
                  >
                    <span className="text-[#FB0000]">*</span>Password
                  </label>
                  <div className="relative flex items-center w-full  border rounded-md border-solid border-[#D4D7E3] focus:border-red-400">
                    <input
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      className=" px-2 py-1 w-full focus:outline-none  rounded text-black  placeholder:font-sans placeholder:font-medium !placeholder:text-greyish-400"
                      placeholder="Please use characters & symbols"
                      type={showPassword ? "text" : "password"}
                      required
                    />
                    <button
                      type="button"
                      onClick={togglePasswordVisibility}
                      className="absolute right-2 text-gray-400 hover:text-black"
                    >
                      {showPassword ? (
                        <EyeIcon className="w-5 h-5" />
                      ) : (
                        <EyeSlashIcon className="w-5 h-5" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Confirm Password Input */}
                <div className="flex flex-col">
                  <label
                    htmlFor="confirmPassword"
                    className="text-xs lg:text-sm text-[#1E1E1E]"
                  >
                    <span className="text-[#FB0000]">*</span>Confirm Password
                  </label>
                  <div className="relative flex items-center w-full border rounded-md border-solid border-[#D4D7E3] focus:border-red-400">
                    <input
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      className=" px-2 py-1 w-full focus:outline-none  rounded text-black  placeholder:font-sans placeholder:font-medium !placeholder:text-greyish-400"
                      placeholder="Please use characters & symbols"
                      type={showConfirmPassword ? "text" : "password"}
                      required
                    />
                    <button
                      type="button"
                      onClick={toggleConfirmPasswordVisibility}
                      className="absolute right-2 text-gray-400 hover:text-black"
                    >
                      {showConfirmPassword ? (
                        <EyeIcon className="w-5 h-5" />
                      ) : (
                        <EyeSlashIcon className="w-5 h-5" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Error display */}
                {(error || formError) && (
                  <div className="text-red-500 text-sm text-center">
                    {error?.message || formError}
                  </div>
                )}

                {/* Submit Button */}
                <div className="flex flex-col mt-4">
                  <button
                    type="submit"
                    disabled={loading}
                    className="bg-[#F76300] w-full focus:outline-none rounded-[3px] text-white h-8 font-semibold text-lg hover:bg-[#e55b00] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loading ? "Processing..." : "Next"}
                  </button>
                  <div className="flex mt-1 justify-end">
                    <p className="text-[#F76300] text-[11px] font-medium cursor-pointer hover:underline">
                      Already a member?
                    </p>
                  </div>
                </div>

                {/* Contact Info */}
                <div
                  style={{ boxShadow: "0px 4px 4px rgba(0,0,0,0.25)" }}
                  className="w-full mb-2 lg:mb-0 h-8 bg-[#FAFAFA] shadow-custom text-[#000000] font-semibold text-[10px] md:text-xs leading-6 flex items-center justify-center"
                >
                  In case of any problem contact us on{" "}
                  <span className="text-[#F76300] underline pl-1">
                    (051) 2272649
                  </span>
                </div>
              </div>
            </form>
          </div>

          {/* Image Section */}
          <div className="hidden md:block lg:w-1/2 relative">
            <Image
              src="/login.webp"
              alt="Signup Illustration"
              fill
              className="object-cover rounded-r-[10px]"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </Suspense>
  );
};

// Eye Icons remain the same
const EyeIcon = ({ className }: { className?: string }) => (
  <Suspense fallback={renderLoader()}>
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      className={className}
    >
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  </Suspense>
);

const EyeSlashIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    className={className}
  >
    <path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19m-6.72-1.07a3 3 0 11-4.24-4.24" />
    <path d="M1 1l22 22" />
  </svg>
);

export default SignUpForm;
