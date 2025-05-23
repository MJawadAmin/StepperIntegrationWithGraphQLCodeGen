"use client";
import { useState, Suspense } from "react";
import { gql, useMutation } from "@apollo/client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useUserStore } from "@/store/useUserStore";
import Link from "next/link";
import { toast, ToastContainer } from "react-toastify"; // ✅ Import Toastify
import 'react-toastify/dist/ReactToastify.css'; // ✅ Import CSS

const renderLoader = () => <p>Loading</p>;

const CLIENT_LOGIN_MUTATION = gql`
  mutation ClientLogin($email: String!, $password: String!) {
    clientLogin(email: $email, password: $password) {
      id
      email
      token
      status
      success
      message
    }
  }
`;

const LoginForm = () => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });
  const [errorMessage, setErrorMessage] = useState("");

  const [clientLogin, { loading }] = useMutation(CLIENT_LOGIN_MUTATION);

  const { setUserId, setUserEmail, setJwt } = useUserStore();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    try {
      const { data } = await clientLogin({
        variables: {
          email: formData.email,
          password: formData.password
        }
      });

      if (data?.clientLogin?.success) {
        setUserId(data.clientLogin.id);
        setUserEmail(data.clientLogin.email);
        setJwt(data.clientLogin.token);
        localStorage.setItem("NECCA_AUTH_TOKEN", data.clientLogin.token);
        console.log("Login successful");
        toast.success("Login successful"); // ✅ Toast instead of alert
        router.push("/protected/productList");
      } else {
        setErrorMessage(data?.clientLogin?.message || "Login failed");
      }
    } catch (error) {
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "An error occurred during login"
      );
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, checked, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }));
  };

  return (
    <Suspense fallback={renderLoader()}>
      <ToastContainer /> {/* ✅ Toast container added once at top */}
      <div className="w-full h-screen py-4">
        <div className="w-full flex items-center justify-center">
          <h3 className="text-[#F76300] font-semibold text-lg md:text-[30px] leading-[27px] pt-2 font-poppins">
            Login
          </h3>
        </div>

        <div className="w-11/12 mx-auto shadow-login mt-3 md:mt-8 bg-[#FFFFFF] flex rounded-[10px]">
          <div className="w-full sm:w-[70%] lg:w-1/2 h-[80vh] flex items-center justify-center font-poppins">
            <form className="w-11/12 sm:w-[60%] mx-auto" onSubmit={handleSubmit}>
              <div className="w-full mx-auto flex flex-col gap-4">

                {/* Email Input */}
                <div className="flex flex-col font-poppins">
                  <label htmlFor="email" className="text-sm text-[#1E1E1E]">
                    <span className="text-[#FB0000] text-sm">*</span> Email Address
                  </label>
                  <input
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="px-2 py-1 w-full focus:outline-none border border-[#e5e7eb] focus:border-red-400 rounded text-black placeholder:font-sans placeholder:font-medium !placeholder:text-greyish-100"
                    required
                    placeholder="Example@gmail.com"
                    type="email"
                  />
                </div>

                {/* Password Input */}
                <div className="flex flex-col font-poppins">
                  <div className="w-full flex justify-between">
                    <label htmlFor="password" className="text-sm text-[#1E1E1E]">
                      <span className="text-[#FB0000] text-sm">*</span> Password
                    </label>
                  </div>
                  <div className="relative flex items-center w-full border rounded-md border-solid border-[#D4D7E3] focus:border-red-400">
                    <input
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      className="px-2 py-1 w-full focus:outline-none rounded text-black placeholder:font-sans placeholder:font-medium !placeholder:text-greyish-400"
                      required
                      placeholder="use character & Symbol"
                      type={showPassword ? "text" : "password"}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="flex items-center justify-center cursor-pointer mr-2"
                    >
                      {showPassword ? (
                        <EyeIcon className="w-5 h-5" />
                      ) : (
                        <EyeSlashIcon className="w-5 h-5" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Remember Me Checkbox */}
                <div className="flex mt-1 items-center gap-3">
                  <input
                    id="rememberMe"
                    name="rememberMe"
                    type="checkbox"
                    checked={formData.rememberMe}
                    onChange={handleChange}
                    className="relative h-5 w-5 appearance-none border border-[#D4D7E3] rounded-xs cursor-pointer checked:bg-[#F76300] checked:border-[#F76300] checked:before:content-['✓'] checked:before:absolute checked:before:text-white checked:before:text-sm checked:before:flex checked:before:justify-center checked:before:items-center checked:before:inset-0"
                  />
                  <label htmlFor="rememberMe" className="text-[#1E1E1E] cursor-pointer text-[11px] leading-3">
                    Remember me
                  </label>
                </div>

                {/* Error Message */}
                {errorMessage && (
                  <div className="text-red-500 text-sm text-center">
                    {errorMessage}
                  </div>
                )}

                {/* Submit Button */}
                <button 
                  type="submit" 
                  disabled={loading}
                  className="bg-[#F76300] w-full rounded-[3px] text-white h-10 font-semibold text-lg leading-[18px] disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? "Logging in..." : "Login"}
                </button>

                {/* Links Section */}
                <div className="w-full flex items-center justify-between">
                  <p className="font-poppins font-semibold text-[11px] leading-3">
                    Don&apos;t have an Account?{" "}
                    <Link href="/auth/sign-up">
                      <span className="text-[#F76300] cursor-pointer">Sign up</span>
                    </Link>
                  </p>
                  <span className="text-[11px] cursor-pointer leading-3 font-poppins text-[#F76300]">
                    Forgot Password?
                  </span>
                </div>

                {/* Contact Section */}
                <label className="text-[15px] leading-[24px] text-[#000000] font-semibold">
                  Contact Us
                </label>
                <div style={{boxShadow: "0px 4px 4px rgba(0,0,0,0.25)"}} className="w-full h-[34px] bg-[#FAFAFA] shadow-custom text-[#000000] font-semibold text-[10px] md:text-xs leading-6 flex items-center justify-center">
                  In case of any problem contact us on
                  <span className="text-[#F76300] cursor-pointer underline pl-1">(051)2272649</span>
                </div>
              </div>
            </form>
          </div>

          <div className="hidden sm:block lg:w-1/2 relative">
            <Image
              src="/login.webp"
              alt="Login illustration"
              fill
              className="w-full h-[80vh]"
              priority
            />
          </div>
        </div>
      </div>
    </Suspense>
  );
};

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
  <Suspense fallback={renderLoader()}>
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      className={className}
    >
      <path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19m-6.72-1.07a3 3 0 11-4.24-4.24" />
      <path d="M1 1l22 22" />
    </svg>
  </Suspense>
);

export default LoginForm;
