import React from 'react';
import man from '../assets/man.webp';
import girl1 from '../assets/girl1.webp';
import girl2 from '../assets/girl2.webp';

const categories = [
    {
        title: 'Wellbeing',
        description: 'Stay your best self, always',
        img: man,
        color: 'bg-gradient-to-r from-[#FFCF9D] to-[#FFDFCE]',
        hoverColor: 'from-[#FFCF9D] to-[#FFDFCE]',
    },
    {
        title: "Women's health",
        description: 'Optimize your fertility, cycle and menopause naturally',
        img: girl1,
        color: 'bg-gradient-to-tr from-pink-300 to-pink-500',
        hoverColor: 'from-pink-300 to-pink-500',
    },
    {
        title: 'Longevity',
        description: 'Fuel your cells for a supercharged life',
        img: girl2,
        color: 'bg-gradient-to-tr from-red-400 to-orange-600',
        hoverColor: 'from-red-400 to-orange-600',
    },
]; const CategoryCard = ({ title, description, img, color , hoverColor }) => (
    <div className="bg-[#FCF8F1] rounded-3xl overflow-hidden w-[300px] max-w-sm h-[420px] flex flex-col text-center shadow-lg hover:shadow-2xl transition duration-300 ease-in-out">
        <img src={img} alt={title} className="rounded-3xl w-full h-56 object-cover mb-6" />

        <div className="flex flex-col flex-grow items-center h-20 px-4">
            <p className="text-gray-500 h-20 text-base mb-2 line-clamp-3">{description}</p>

            <button className="group relative overflow-hidden flex w-full gap-2 border border-gray-300 px-6 py-4 rounded-full items-center justify-start shadow-md transition-all duration-500">
                {/* Color Ball */}
                <span className={`w-5 h-5 rounded-full ${color} transition-all duration-300 group-hover:opacity-0`}></span>

                {/* Text */}
                <span className="font-medium text-base text-black z-10 group-hover:text-white transition-all duration-300">
                    {title}
                </span>

                {/* Gradient Swipe Background */}
                <span className={`absolute left-0 top-0 h-full w-0 group-hover:w-full transition-all duration-500 bg-gradient-to-l  ${hoverColor} z-0 rounded-full`}></span>
            </button>
        </div>
    </div>
);




const ApplicationProducts = () => {
    return (
        <div className="py-20 px-4 md:px-20 bg-[#fcf8f1] text-black">
            {/* Heading */}
            <div className="text-center mb-16">
                <p className="text-sm text-gray-400 mb-2">Applications</p>
                <h2 className="text-3xl font-semibold">Start shaping your tomorrow</h2>
            </div>

            {/* Cards */}
            <div className="flex flex-col md:flex-row justify-center gap-4 mb-12">
                {categories.map((cat, index) => (
                    <CategoryCard key={index} {...cat} />
                ))}
            </div>

            {/* Button Centered */}
            <div className="flex justify-center">
                <button className="bg-black text-white px-6 py-3 rounded-full flex items-center gap-2 hover:bg-gray-800 transition">
                    All products <span className="text-xl">→</span>
                </button>
            </div>
        </div>
    );
};

export default ApplicationProducts;
