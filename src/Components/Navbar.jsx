import React, { useState } from "react";
import { Link } from "react-scroll";
import Button from "../Layouts/Button";
import { AiOutlineMenu } from "react-icons/ai";

// Function for Navbar section
const Navbar = () => {
    const [menu, setMenu] = useState(false)
    const backgroundColor = "bg-white"

    const handleChange = () => {
        console.log("menu", menu)
        setMenu(!menu)
    }

    return (
        <div>
            <div className="flex flex-row justify-between item-center bg-darkBackground text-white p-5 px-5 md:px-32">
            {/* <div className="p-2 flex flex-row justify-between item-center bg-darkBackground text-white"> */}
                <div className="flex items-center">
                    <Link to="/" spy={true} smooth={true} duration={500}>
                        <h3 className="text-xl font-semibold cursor-pointer">TravelManagement</h3>
                    </Link>
                </div>
                <nav className="hidden lg:flex flex-row items-center gap-6">
                    <Link to="home" spy={true} smooth={true} duration={500} 
                        className="cursor-pointer hover:scale-110 hover:text-brightColor transition-all ease-in-out duration-300"
                        >Home
                    </Link>
                    <Link to="features" spy={true} smooth={true} duration={500} 
                        className="cursor-pointer hover:scale-110 hover:text-brightColor transition-all ease-in-out duration-300"
                        >Features
                    </Link>
                    <Link to="destination" spy={true} smooth={true} duration={500} 
                        className="cursor-pointer hover:scale-110 hover:text-brightColor transition-all ease-in-out duration-300"
                        >Destination
                    </Link>
                    <Link to="about" spy={true} smooth={true} duration={500} 
                        className="cursor-pointer hover:scale-110 hover:text-brightColor transition-all ease-in-out duration-300"
                        >About
                    </Link>
                    <Link to="contact" spy={true} smooth={true} duration={500} 
                        className="cursor-pointer hover:scale-110 hover:text-brightColor transition-all ease-in-out duration-300"
                        >Contact
                    </Link>
                </nav>
                <div className="hidden lg:flex flex-wrap justify-center items-center gap-2">
                    <h3 
                        className="cursor-pointer hover:scale-110 hover:text-brightColor transition-all ease-in-out duration-300"
                        >Register
                    </h3>
                    <Button title="Login" backgroundColor={backgroundColor} />
                </div>
                <div className="cursor-pointer flex items-center lg:hidden " onClick={handleChange}>
                    <AiOutlineMenu size={25}/>
                    {/* <AiOutlineMenu className="size-[24px]"/> //or */}
                </div>
                <div className={`${menu ? "translate-x-0" : "-translate-x-full"} w-full h-fit pt-8 pb-4 flex flex-col gap-8 bg-darkBackground text-white text-center text-xl font-semibold absolute left-0 top-20 lg:hidden transition-transform duration-300`}>
                    <Link to="home" spy={true} smooth={true} duration={500} 
                        className="cursor-pointer hover:scale-110 hover:text-brightColor transition-all ease-in-out duration-300"
                        >Home
                    </Link>
                    <Link to="features" spy={true} smooth={true} duration={500} 
                        className="cursor-pointer hover:scale-110 hover:text-brightColor transition-all ease-in-out duration-300"
                        >Features
                    </Link>
                    <Link to="destination" spy={true} smooth={true} duration={500} 
                        className="cursor-pointer hover:scale-110 hover:text-brightColor transition-all ease-in-out duration-300"
                        >Destination
                    </Link>
                    <Link to="about" spy={true} smooth={true} duration={500} 
                        className="cursor-pointer hover:scale-110 hover:text-brightColor transition-all ease-in-out duration-300"
                        >About
                    </Link>
                    <Link to="contact" spy={true} smooth={true} duration={500} 
                        className="cursor-pointer hover:scale-110 hover:text-brightColor transition-all ease-in-out duration-300"
                        >Contact
                    </Link>
                    <div className="flex flex-wrap justify-center items-center gap-2">
                        <h3 
                            className="cursor-pointer hover:scale-110 hover:text-brightColor transition-all ease-in-out duration-300"
                            >
                            <Button title="Register" backgroundColor={backgroundColor} />
                        </h3>
                        <Button title="Login" backgroundColor={backgroundColor} />
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Navbar;
            