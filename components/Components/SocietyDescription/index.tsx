import React from "react";

const SocietyDescription = () => {
  return (
    <section className="bg-white py-10 px-6 text-center">
      <div className="max-w-4xl mx-auto">
        <p className="text-lg leading-relaxed text-gray-800">
        Our society is a dynamic and inclusive community committed to fostering growth, collaboration, and innovation across various disciplines. We provide a platform for students and enthusiasts to explore their passions, develop skills, and engage in meaningful projects that create real-world impact. Through workshops, guest lectures, competitions, and social events, we aim to build a space where creativity thrives and every voice is valued. Whether you're a beginner looking to learn or an experienced member eager to share knowledge, our society offers opportunities for everyone. We believe that by working together, we can inspire change, push boundaries, and create a network of future leaders. Our mission goes beyond academics—we strive to nurture well-rounded individuals who are confident, compassionate, and curious. The energy and dedication of our members make this society more than just a group—it’s a growing family driven by passion and purpose.
        You can see the picture below
        </p>

        <div className="my-6 h-[2px] bg-gradient-to-r from-black to-[#FFA016]"></div>

        <div className="mt-4 flex justify-center">
          <img
            src="/Logo.png"
            alt="Society Visual"
            className="w-8 sm:w-14 h-auto object-contain  rounded "
          />
        </div>
      </div>
    </section>
  );
};

export default SocietyDescription;
