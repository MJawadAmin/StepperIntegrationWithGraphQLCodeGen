// components/CustomAccordion.tsx
'use client';

import { useState } from 'react';

interface FAQItem {
    question: string;
    answer: string;
}

interface CustomAccordionProps {
    items: FAQItem[];
}

export const CustomAccordion = ({ items }: CustomAccordionProps) => {
    const [openIndex, setOpenIndex] = useState(-1);

    return (
        <div className="w-full">
            {items.map((item, index) => (
                <div key={index} className="border border-gray-200 mb-0">
                    <button
                        className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                        onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                    >
                        <h3 className="lg:text-xl md:text-lg text-sm font-medium text-gray-600 pr-2">
                            {item.question}
                        </h3>
                        {/* <span className={`transform transition-transform ${openIndex === index ? 'rotate-135' : ''}`}>
                            +
                        </span> */}
                        {
                            openIndex === index ? (
                                <span className="text-gray-600 text-lg font-medium">-</span>
                            ) : (
                                <span className="text-gray-600 text-lg font-medium">+</span>
                            )
                        }
                    </button>
                    {openIndex === index && (
                        <div className="px-6 pb-4 pt-0">
                            <p className="lg:text-base text-xs text-gray-600">
                                {item.answer}
                            </p>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};