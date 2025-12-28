import React from 'react';
import { FaPhoneAlt } from 'react-icons/fa';

const Contactcomp = () => {
  const contacts = [
    {
      title: 'Chair',
      name: 'Muhammad Zafar ul Haq',
      phone: '+92 324 1557130',
    },
    {
      title: 'Vice Chair',
      name: 'Ali Usman Khan Durani',
      phone: '+92 321 5353105',
    },
    {
      title: 'General Secretary',
      name: 'Abdul Moiez Majid Khan',
      phone: '+92 304 4869577',
    },
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 pt-10 pb-16 text-black">
      <h1 className="text-4xl font-bold mb-6">Contact Information</h1>

      <div className="space-y-8">
        {contacts.map(({ title, name, phone }, index) => (
          <div key={index} className="p-6 bg-white rounded-2xl shadow-md border border-gray-200">
            <h2 className="text-2xl font-semibold mb-2">{title}</h2>
            <p className="text-lg mb-1">{name}</p>
            <div className="flex items-center text-[#FFA016] gap-2 text-lg">
              <FaPhoneAlt />
              <a href={`tel:${phone.replace(/\s+/g, '')}`} className="hover:underline">
                {phone}
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Gradient Divider */}
      <div className="h-[2px] bg-gradient-to-r from-black to-[#FFA016] mt-10"></div>
    </div>
  );
};

export default Contactcomp;
