"use client";
import React from "react";
import Image from "next/image";
import { CustomAccordion } from "@/components/CustomAccordion";
import ScrollSpy from "react-scrollspy-navigation";
import { useEffect, useState } from "react";
const HomePage: React.FC = () => {
  const tips = [
    "This website (portal) can be used as a: Visitor, Registered Manufacturer, or Supplier of MEPS-compliant LED Lights.",
    "Create a registration with NEECA, which integrates your product's registration, so adding a label and product details are automated and fast. You'll be able to submit your registration in minutes.",
    "Submit electronically; your application, along with the fee, is submitted directly to the state agency's PRO account with the click of a button. Here you can review all details, leave comments, and get your registration approved.",
    "Receive direct approval when all conditions are met. Upon approval of your application, you will receive a verification email and an electronic certificate, which will allow you to start selling your products immediately.",
    "Easily edit. If the application is denied or requires additional information, you can correct the problem and re-submit electronically without having to redo the work you've already completed.",
    "Stay organized. Your dashboard will display all of your approved, pending, and denied registrations.",
  ];
  const faqItems = [
    {
      question: "What is Neeca?",
      answer:
        "NEECA stands for National Energy Efficiency and Conservation Authority, which is a federal entity, which is the focal point for advising the government and driving all energy efficiency and conservation drives.",
    },
    {
      question: "Does Neeca have representation in the provinces?",
      answer:
        "NEECA has designated agencies in all the provinces. Some have already become functional in a few provices, while in the remaining they are under the process of being set-up.",
    },
    {
      question: "What is energy conservation?",
      answer:
        "Energy conservation is the process through which the usage of energy is reduced without reducing the number of appliances using effective measures. In short this means that less energy is consumed which is termed as Energy Conservation.",
    },
    {
      question: "What is meant by energy efficiency?",
      answer:
        "Energy Efficiency is created by replacing the currently used appliances such as Lighting, Air Conditioners, Refrigerators, Electric Fans etc. with appliances which conform to MINIMUM energy Performance Standards (MEPS) as issued by the Pakistan Standards and Quality Control Authority (PSQCA).",
    },
    {
      question: "If MEPS are approved by PSQCA; then what is the role NEECA?",
      answer:
        "As stated above, NEECA is the focal authority regulating the availability of MEPS compliant electrical products in the country.",
    },
    {
      question:
        "Does NEECA have a list of compliant sellers and their corresponding products?",
      answer:
        "Yes, NEECA is regularly updating it's list of approved sellers/manufacturers on it's Web Portal.",
    },
    {
      question: "What is the web Portal?",
      answer:
        "The web portal is a software tool, wherein both the prospective sellers and buyers (consumers) can find lists of approved vendors (sellers/manufacturers) and products. This web portal will also carry news of interest for all regarding conservation activities by NEECA and tips on energy conservation, etc.",
    },
  ];
  const [activeImage, setActiveImage] = useState(1);
  const totalImages = 3; // Update this if you add more images

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImage((prev) => (prev % totalImages) + 1);
    }, 3000);

    return () => clearInterval(interval);
  }, []);
  return (
    <main>
      <ScrollSpy activeClass="nav-active">
        <section className="w-full pb-10 bg-[#FFF6F3]" id="home">
          <div className="pt-6 w-full" id="parent">
            <span className="flex mt-12 justify-center text-center lg:px-0 px-4 w-full lg:text-5xl md:text-3xl text-xl items-center font-semibold text-gray-700">
              Lighten up your life with quality.
            </span>
            <p className="md:text-lg text-sm text-center lg:px-0 px-4 text-gray-700 font-medium mt-7">
              Get the mental satisfaction of&nbsp;
              <span className="border-b-2 border-[#f5631f] border-primary">
                importing
              </span>{" "}
              and&nbsp;
              <span className="border-b-2 border-[#f5631f] border-primary">
                selling
              </span>{" "}
              your product legally, regulated for energy efficiency.
            </p>
            <div className="w-full flex flex-wrap items-center md:flex-row flex-row justify-center gap-3 lg:gap-8 mt-10">
              {[
                "Simple registration",
                "Statistics Dashboard",
                "Products & orders management",
              ].map((text, index) => (
                <div
                  key={index}
                  className="w-[45%] sm:w-[30%] lg:w-auto flex gap-1 justify-center items-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="#f5631f"
                    className="size-6"
                  >
                    <path
                      fillRule="evenodd"
                      d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                      clipRule="evenodd"
                    />
                  </svg>

                  <p className="lg:text-sm text-xs text-gray-700 whitespace-nowrap">
                    {text}
                  </p>
                </div>
              ))}
            </div>
            <div className="lg:w-[80%] w-11/12 flex justify-center items-center mx-auto">
              {/* <div className="bg-white pb-2 rounded-lg shadow-md px-3 lg:mt-20 mt-7">
                                <Image
                                    alt="Hero"
                                    width={1354}
                                    height={642}
                                    src="/hero-1.webp"
                                    className="w-full h-auto"
                                    priority={true} // Only for above-the-fold images
                                    sizes="(max-width: 768px) 100vw, 80vw"
                                />
                            </div> */}
              <div className="bg-white pb-2 rounded-lg shadow-md px-3 lg:mt-20 mt-7">
  <div className="grid grid-cols-1 grid-rows-1">
    {[1, 2, 3].map((index) => (
      <Image
        key={index}
        alt={`Hero ${index}`}
        width={1354}
        height={642}
        src={`/hero-${index}.webp`}
        className={`w-full h-auto col-start-1 row-start-1 transition-opacity duration-300 ${
          activeImage === index ? 'opacity-100' : 'opacity-0'
        }`}
        priority={index === 1}
        sizes="(max-width: 768px) 100vw, 80vw"
      />
    ))}
  </div>
</div>
            </div>
          </div>
        </section>

        <section className="w-full scroll-mt-32" id="about">
          <div className="w-full px-[10px] xxs:px-[20px] sm:px-[40px] md:px-[90px] lg:px-[110px] mt-10 xxs:mt-10 sm:mt-20 lg:mt-32">
            <h1 className="text-5xl lg:text-4xl text-gray-700 font-medium tracking-wide text-center">
              About NEECA
            </h1>
            <div className="w-full flex flex-col items-center sm:flex-row md:flex-row lg:flex-row mt-6">
              <div className="flex-grow w-full px-4">
                <p className="lg:text-lg md:text-base text-sm tracking-wide font-medium">
                  The National Energy Efficiency & Conservation Authority
                  (NEECA) is an attached
                  <span className="border-b-2 border-primary">
                    {" "}
                    Department of the Ministry of Energy
                  </span>
                  (Power Division) and serves as the focal federal agency to
                  capture substantial economic and environmental benefits
                  through energy conservation and efficiency across all sectors
                  of the economy.
                </p>
                <p className="lg:text-lg md:text-base text-sm tracking-wide font-medium mt-6">
                  Delivering the transition to energy-efficient lighting in
                  residential, commercial, industrial, and outdoor sectors in
                  Pakistan.
                  <br />- Project funded by
                  <span className="text-primary lg:text-lg text-base text-[#f5631f]">
                    {" "}
                    GEF/UN Environment
                  </span>
                </p>
              </div>
              <div className="md:w-[300px] w-[190px] relative">
                <Image
                  alt="Light Bulb"
                  width={250}
                  height={250}
                  src="/bulb.webp"
                  className="w-auto h-auto"
                  loading="lazy"
                  sizes="(max-width: 768px) 50vw, 300px"
                />
              </div>
            </div>
          </div>

          {/* Objectives Section */}
          <div className="w-full px-[10px] xxs:px-[20px] sm:px-[40px] md:px-[90px] lg:px-[110px] mt-10 xxs:mt-10 sm:mt-14 lg:mt-2">
            <div className="flex justify-center">
              <h1 className="text-lg font-medium bg-[#ffefe9] text-[#f5631f] rounded-full px-6 text-primary py-1">
                Objectives
              </h1>
            </div>
            <div className="w-full mt-4 px-4">
              <p className="lg:text-base text-sm font-normal tracking-wide text-gray-600 mb-3">
                The objective of the project is to mitigate the effects of
                global climate change by reducing GHG emissions through the use
                of high-efficiency lighting products. This objective will be
                achieved through the implementation of four project components.
              </p>
              {[
                "Developing a National Efficient Lighting Strategy.",
                "Strengthening monitoring, verification, and enforcement (MVE) capacities in Pakistan to ensure an effective transition to efficient lighting.",
                'Design for a "Lighting Funding Window" in Pakistan\'s Revolving Loan Fund (RLF).',
                "Accelerating the use of light-emitting diodes (LEDs) and controls.",
              ].map((item, index) => (
                <p
                  key={index}
                  className="flex items-center lg:text-base text-sm font-medium text-gray-700 mb-3 gap-2"
                >
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={4}
                      stroke="#f5631f"
                      className="w-3 h-3"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                      />
                    </svg>
                  </span>
                  {item}
                </p>
              ))}
            </div>
          </div>
        </section>

        {/* Tips Section */}
        <section className="w-full scroll-mt-28" id="tips">
          <div className="w-full bg-[#15151d] px-[20px] sm:px-[40px] lg:px-[110px] mt-10 py-8">
            <div className="flex flex-col items-center mb-8 mt-8">
              <h1 className="text-md text-primary font-semibold bg-[#312122] text-[#f5631f] px-6 py-1 rounded-full mb-4">
                Tips
              </h1>
              <p className="lg:text-3xl md:text-xl text-lg text-white font-medium">
                Tips that may help
              </p>
            </div>
            <div className="flex flex-wrap">
              {tips.map((tip, index) => (
                <div key={index} className="w-full lg:w-1/2 px-6 py-5">
                  <div className="bg-[#2d2d34] rounded-lg px-5 py-4 h-full flex flex-col lg:flex-row items-center gap-6 mb-4">
                    <Image
                      src={`/image${index + 1}.svg`}
                      alt=""
                      width={40}
                      height={40}
                    />
                    <p className="md:text-md text-sm text-white font-medium">
                      {tip}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="w-full scroll-mt-28" id="faq">
          <div className="w-full px-4 sm:px-10 md:px-20 lg:px-40 mt-10 py-4">
            <div className="flex flex-col justify-center items-center">
              <h1 className="md:text-base text-sm text-primary bg-[#ffefe9] text-[#f5631f] rounded-full px-6 py-1 font-semibold mb-3">
                FAQ&apos;s
              </h1>
              <p className="md:text-xl lg:text-3xl text-base text-gray-800 text-center">
                Frequently Asked Questions
              </p>
            </div>
            <div className="w-full lg:px-52 mt-10 lg:mt-20">
              <CustomAccordion items={faqItems} />
            </div>
          </div>
        </section>
        {/* Add similar structure for Tips and FAQ sections here */}
      </ScrollSpy>
    </main>
  );
};

export default HomePage;
