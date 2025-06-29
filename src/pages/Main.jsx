import React from 'react';
import MainImg from '../assets/main.webp';
import '../Main.css'; // External CSS file
import NavBar from '../components/NavBar'; // Import NavBar component
const Main = () => {
    return (
        <div className="relative w-full h-full overflow-hidden px-8 py-8">


            {/* IMAGE + GLOW WRAPPER */}
            <div className="relative w-full h-[700px] rounded-[40px] overflow-hidden">
                <img
                    src={MainImg}
                    alt="Main"
                    className="w-full h-full object-cover rounded-[40px]"
                />
                <NavBar />

                {/* RED GLOW OVERLAY (inside image only) */}
                <div className="absolute inset-0 z-10 pointer-events-none red-glow rounded-[40px]"></div>
            </div>


            {/* TEXT OVERLAY */}
            <div className="absolute top-[80%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center max-w-5xl z-30">
                <p className="text-sm md:text-lg font-medium mb-2 opacity-60">
                    Red Light Therapy: proven, safe, and non-invasive
                </p>
                <h1 className="text-5xl md:text-6xl lg:text-6xl noto-sans font-bold leading-tight">
                    Your cells, supercharged
                </h1>
            </div>
        </div>
    );
};

export default Main;
