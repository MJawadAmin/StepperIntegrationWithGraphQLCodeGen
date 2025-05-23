import React from "react";
import Image from "next/image";

const Footer: React.FC = () => {
  return (
    <div className="w-full">
      <div className="bg-[#15151d] w-full px-[10px] xxs:px-[20px] sm:px-[40px] md:px-[90px] lg:px-[120px] mt-10 xxs:mt-10 sm:mt-14 lg:mt-8 py-8">
        <div className="w-full flex flex-col items-center lg:flex-row lg:justify-between lg:items-center border-b border-gray-400 pt-4">
          {/* Logo and Description */}
          <div className="mb-2 flex flex-col items-center lg:items-start">
            <Image
              alt="Neeca Logo"
              loading="eager"
              width="85"
              height="85"
              decoding="async"
              className="w-22 h-22"
              src="/neeca-logo-png.webp"
              style={{ color: "transparent", width: "auto", height: "auto" }}
            />
            <p className="text-gray-400 text-base text-center lg:text-start lg:w-[350px] ml-3.5">
              Legally import and sell a product regulated for energy efficiency.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h1 className="text-gray-200 text-lg font-medium mb-2 text-center lg:text-start">
              Quick Links
            </h1>
            <ul className="w-full flex flex-col lg:flex-wrap items-center lg:flex-row gap-2 lg:gap-0">
              {[
                { name: "Home", href: "/public" },
                { name: "About", href: "/public#about" },
                { name: "Tips", href: "/public#tips" },
                { name: "News", href: "/public/news" },
                { name: "FAQ's", href: "/public#faq" },
                { name: "Products", href: "/public/products-info" },
              ].map((link, index) => (
                <li
                  key={index}
                  className="w-full lg:w-1/2 py-1 flex flex-col items-center lg:items-start"
                >
                  <a
                    className="text-gray-400 font-medium hover:text-white cursor-pointer"
                    href={link.href}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links & Contact Info */}
          <div className="flex flex-col items-center lg:items-start gap-6 lg:pr-20 mt-4 lg:-mt-16">
            <div className="flex gap-3">
              <Image
                alt="Facebook"
                loading="eager"
                width="24"
                height="24"
                decoding="async"
                className="text-gray-200"
                src="/fb.svg"
                style={{ color: "transparent" }}
              />
              <Image
                alt="Twitter"
                loading="eager"
                width="24"
                height="24"
                decoding="async"
                className="text-gray-200"
                src="/tw.svg"
                style={{ color: "transparent" }}
              />
            </div>
            <div className="flex flex-col lg:flex-row items-center gap-3">
              <h1 className="text-gray-400 hover:text-white cursor-pointer">
                info@neeca.gov.pk
              </h1>
              <span className="text-white">|</span>
              <p className="text-gray-400 hover:text-white">051-9206001</p>
            </div>
          </div>
        </div>
        <p className="text-gray-400 text-sm text-end mt-2">
          © Copyright 2022. Neeca Inc.
        </p>
      </div>
    </div>
  );
};

export default Footer;
