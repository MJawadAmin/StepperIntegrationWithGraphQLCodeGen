"use client"
import { useState, useEffect } from "react"
import { gql, useMutation } from "@apollo/client"
import Image from "next/image"
import { useRouter } from "next/navigation"
import type React from "react" // Added import for React
import { useUserStore } from "@/store/useUserStore"

const CLIENT_VERIFY_OTP_MUTATION = gql`
  mutation ClientVerifyOtp(
    $email: String!
    $phoneOtp: String!
    $emailOtp: String!
  ) {
    clientVerifyOtp(
      email: $email
      phoneOtp: $phoneOtp
      emailOtp: $emailOtp
    ) {
      emailVerified
      phoneVerified
      status
    }
  }
`

const OTPVerification = () => {
  const router = useRouter()
  const [emailOtp, setEmailOtp] = useState<string[]>(["", "", "", ""])
  const [phoneOtp, setPhoneOtp] = useState<string[]>(["", "", "", ""])
  const [timeLeft, setTimeLeft] = useState<number>(120)
  const [isResendDisabled, setIsResendDisabled] = useState(true)
  const [errorMessage, setErrorMessage] = useState("")
  const [email, setEmail] = useState("")

  const [verifyOtp, { loading }] = useMutation(CLIENT_VERIFY_OTP_MUTATION)

  const { user_email } = useUserStore();
  useEffect(() => {
    // Example: Retrieve email from localStorage
    const storedEmail = user_email;
    if (storedEmail) {
      setEmail(storedEmail);
      console.log("Email found in localStorage");
    }
    else {console.error("Email not found in localStorage")}
  }, [])

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1)
      }, 1000)
      return () => clearInterval(timer)
    } else {
      setIsResendDisabled(false)
    }
  }, [timeLeft])

  const handleOtpChange = (index: number, value: string, type: "email" | "phone") => {
    const newOtp = type === "email" ? [...emailOtp] : [...phoneOtp]
    newOtp[index] = value.replace(/[^0-9]/g, "")
    type === "email" ? setEmailOtp(newOtp) : setPhoneOtp(newOtp)
  }

  const handleResendOtp = () => {
    setTimeLeft(60)
    setIsResendDisabled(true)
    // Add resend OTP mutation here if available
  }

  const verifyOTP = async (e: React.FormEvent) => {
    e.preventDefault()
    setErrorMessage("")

    const combinedEmailOtp = emailOtp.join("")
    const combinedPhoneOtp = phoneOtp.join("")

    if (combinedEmailOtp.length !== 4 || combinedPhoneOtp.length !== 4) {
      setErrorMessage("Please enter complete OTP codes")
      return
    }

    try {
      const { data } = await verifyOtp({
        variables: {
          email: email,
          phoneOtp: combinedPhoneOtp,
          emailOtp: combinedEmailOtp,
        },
      })

      if (data?.clientVerifyOtp?.status == "Approved") {
        router.push("/auth/sign-in")
      } else {
        setErrorMessage("OTP verification failed. Please check the codes.")
      }
    } catch (error: any) {
      setErrorMessage(error.message || "An error occurred during verification")
    }
  }

  return (
    <div className="w-full min-h-screen py-4">
      <div className="w-full flex items-center justify-center">
        <h3 className="text-[#F76300] font-semibold text-lg md:text-[30px] leading-[27px] pt-2 font-poppins">
          Sign Up
        </h3>
      </div>

      <div className="w-11/12 mx-auto shadow-login mt-3 md:mt-4 bg-[#FFFFFF] flex rounded-[10px]">
        <div className="w-full sm:w-[70%] lg:w-1/2 h-[85vh] flex items-center justify-center font-poppins">
          <form className="w-11/12 md:w-[65%] mx-auto" onSubmit={verifyOTP}>
            <div className="flex flex-col items-center justify-center">
              <div className="bg-white w-full">
                <h2 className="text-lg lg:text-2xl font-semibold text-center text-[#F76300]">OTP Verification</h2>
                <p className="mt-2 text-xl tracking-wide text-center text-[#F76300]">We've sent you an OTP code</p>
                <p className="mt-1 text-[10px] tracking-tight lg:mt-2 text-center text-[#828282]">
                  To complete your account setup, enter the code we've sent to
                </p>
                <p className="mt-1 text-center text-[#1E1E1E] lg:mt-2 text-sm font-semibold">
                  {email} and 923333333333
                </p>

                {/* Email OTP */}
                <div
                  style={{ boxShadow: "0px 4px 4px rgba(0,0,0,0.25)" }}
                  className="mt-1 bg-[#FAFAFA] shadow-custom rounded-[10px] w-[65%] mx-auto p-2"
                >
                  <label className="text-[#000000] text-sm font-semibold">Email OTP</label>
                  <div className="flex justify-between space-x-2">
                    {emailOtp.map((digit, index) => (
                      <input
                        key={index}
                        maxLength={1}
                        value={digit}
                        onChange={(e) => handleOtpChange(index, e.target.value, "email")}
                        className="w-10 h-10 text-center border border-orange-600 rounded-md focus:outline-none"
                        type="text"
                      />
                    ))}
                  </div>
                </div>

                {/* Phone OTP */}
                <div
                  style={{ boxShadow: "0px 4px 4px rgba(0,0,0,0.25)" }}
                  className="mt-4 bg-[#FAFAFA] shadow-custom rounded-[10px] p-2 w-[65%] mx-auto"
                >
                  <label className="text-[#000000] text-sm font-semibold">Phone Number OTP</label>
                  <div className="flex justify-between mt-1 space-x-2">
                    {phoneOtp.map((digit, index) => (
                      <input
                        key={index}
                        maxLength={1}
                        value={digit}
                        onChange={(e) => handleOtpChange(index, e.target.value, "phone")}
                        className="w-10 h-10 text-center border border-orange-600 rounded-md focus:outline-none"
                        type="text"
                      />
                    ))}
                  </div>
                </div>

                <p className="mt-4 text-center text-[#F2451C]">
                  {String(Math.floor(timeLeft / 60)).padStart(2, "0")}:{String(timeLeft % 60).padStart(2, "0")}
                </p>

                <div className="flex items-center gap-2 w-4/5 lg:w-11/12 !mx-auto">
                  <p className="text-center text-[#828282] text-xs">Didn't Receive OTP?</p>
                  <button
                    type="button"
                    className="text-[#F76300] text-sm font-semibold"
                    onClick={handleResendOtp}
                    disabled={isResendDisabled}
                  >
                    Resend OTP
                  </button>
                </div>

                {errorMessage && <div className="mt-2 text-center text-red-500 text-sm">{errorMessage}</div>}
              </div>

              <button
                type="submit"
                disabled={loading}
                className={`mt-1 lg:mt-2 w-4/5 lg:w-11/12 !mx-auto bg-[#F76300] text-white h-8 lg:h-10 rounded-[5px] ${
                  loading ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                {loading ? "Verifying..." : "VERIFY"}
              </button>
            </div>
          </form>
        </div>

        <div className="w-0 sm:w-[30%] lg:w-1/2 relative">
          <Image
            src="/login.webp"
            alt="OTP Verification"
            fill
            className="object-cover rounded-r-[10px]"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  )
}

export default OTPVerification

