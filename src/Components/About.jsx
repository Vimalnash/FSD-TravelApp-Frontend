import { Link } from "react-scroll";
import Button from "../Layouts/Button";
import imgabout from "../assets/img/about.jpg";

// Function for About Section
const About = () => {
    const backgroundColor = "bg-white";

    return (
        <div className="min-h-screen flex flex-col justify-center gap-10 bg-darkBackground p-5 px-5 md:px-32 lg:flex flex-row items-center gap-10">
            <div className="w-full space-y-5 lg:w-2/4">
                <h3 className="text-4xl font-semibold text-white">At TripAdvisor, We are ready to give the best trip of your life!</h3>
                <p className="pb-5 text-[#bdbdbd]">Your Dream Vacation Starts Here</p>
                <Link to="contact" spy={true} smooth={true} duration={500}>
                    <Button title="Contact Now" backgroundColor={backgroundColor} />
                </Link>
            </div>
            <div className="w-full lg:w-2/4 space-y-5">
                <img className="rounded-2xl shadow" src={imgabout} alt="aboutImage"/>
            </div>
        </div>
    )
};

export default About;