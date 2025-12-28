import React from 'react';

const ReusableBar = ({ text }) => {
  return (
    <section className="bg-gradient-to-r from-black to-[#FFA016] text-white px-4 sm:px-6 py-16 text-center overflow-x-auto">
      <h2 className="text-xs sm:text-sm md:text-lg lg:text-4xl font-extrabold uppercase tracking-wide animate-typing whitespace-nowrap inline-block min-w-max">
        {text}
      </h2>
    </section>
  );
};

export default ReusableBar;
