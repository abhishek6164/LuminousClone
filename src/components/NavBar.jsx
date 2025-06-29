import Logo from '../assets/logo.png';
import bag from '../assets/bag.png';

const Navbar = () => {
    const navLinks = [
        { label: "Technology", hoverClass: "hover:border-red-500 hover:text-red-500" },
        { label: "Commercial", hoverClass: "hover:border-red-400 hover:text-red-400" },
        { label: "Company", hoverClass: "hover:border-red-300 hover:text-red-300" },
        { label: "Blog", hoverClass: "hover:border-red-200 hover:text-red-200" },
        { label: "Shop",  hoverClass: "hover:border-red-100 hover:text-red-100" },
    ];

    return (
        <div className="absolute top-0 left-0 w-full z-50 px-10 py-8 flex items-center justify-between text-white">

            {/* LEFT: Logo with Text */}
            <div className="w-1/3 flex items-center space-x-3">
                <img src={Logo} alt="Luminous Labs Logo" className="h-8 w-auto" />
                <span className="text-xl font-bold">luminous labs</span>
            </div>

            {/* CENTER: Navigation Links */}
            <div className="w-1/3 flex justify-center">
                <div className="flex space-x-14">
                    {navLinks.map(({ label, hoverClass }) => (
                        <a
                            key={label}
                            href="#"
                            className={`px-3 py-1 border border-transparent rounded-full transition-all duration-300 ${hoverClass}`}
                        >
                            {label}
                        </a>
                    ))}
                </div>
            </div>

            {/* RIGHT: Language + Cart */}
            <div className="w-1/3 flex justify-end items-center space-x-4">
                <select className="bg-transparent text-white px-2 py-1 rounded">
                    <option value="en">EN</option>
                    <option value="fr">FR</option>
                </select>

                <div className="flex items-center space-x-2 cursor-pointer group transition duration-300">
                    <a href="#" className="group-hover:text-red-300 transition">Cart</a>
                    <div className="flex items-center justify-center h-10 w-10 border border-white rounded-full bg-transparent hover:bg-white hover:scale-105 transition-all duration-300">
                        <img src={bag} alt="Cart Icon" className="h-5 w-5 hover:invert" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
