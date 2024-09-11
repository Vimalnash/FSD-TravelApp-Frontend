import React from "react";
import { RiFacebookCircleFill } from "react-icons/ri";
import { RiTwitterFill } from "react-icons/ri";
import { RiInstagramFill } from "react-icons/ri";

const Footer = () => {
    return (
        <div className="flex flex-col justify-between gap-10 m-h-[300px] p-10 bg-darkBackground text-white md:flex-row">
            <div className="flex flex-col justify-center items-center gap-2">
                <h2 className="text-xl font-medium">TripAdvisor</h2>
                <p className="text-sm">Experience the best and remarkable Trip</p>
            </div>
            <nav className="flex flex-col justify-center items-center gap-2">
                <h2 className="text-xl font-medium pb-5">Destinations</h2>
                <a className="hover:text-brightColor hover:scale-110 ease-in-out duration-300 t transition-all cursor-pointer" href="/">Paris-France</a>
                <a className="hover:text-brightColor hover:scale-110 ease-in-out duration-300 t transition-all cursor-pointer" href="/">Dubai-UAE</a>
                <a className="hover:text-brightColor hover:scale-110 ease-in-out duration-300 t transition-all cursor-pointer" href="/">Rome-Italy</a>
            </nav>
            <nav className="flex flex-col justify-center items-center gap-2">
                <h2 className="text-xl font-medium pb-5">Others</h2>
                <a className="hover:text-brightColor hover:scale-110 ease-in-out duration-300 t transition-all cursor-pointer" href="/">Contact Us</a>
                <a className="hover:text-brightColor hover:scale-110 ease-in-out duration-300 t transition-all cursor-pointer" href="/">Testimonial</a>
                <a className="hover:text-brightColor hover:scale-110 ease-in-out duration-300 t transition-all cursor-pointer" href="/">Rating</a>
            </nav>
            <nav className="flex flex-col justify-center items-center gap-2">
                <h2 className="text-xl font-medium pb-5">Follow Us on</h2>
                <RiFacebookCircleFill size={24} className="hover:text-brightColor hover:scale-110 ease-in-out duration-300 transition-all cursor-pointer" />
                <RiTwitterFill size={24}  className="hover:text-brightColor hover:scale-110 ease-in-out duration-300 t transition-all cursor-pointer" />
                <RiInstagramFill size={24} className="hover:text-brightColor hover:scale-110 ease-in-out duration-300 t transition-all cursor-pointer" />
            </nav>
        </div>
    )
};

export default Footer;