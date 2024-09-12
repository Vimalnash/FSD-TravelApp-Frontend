import { Link } from "react-scroll";
import Button from "../Layouts/Button";
import imgWelcome from "../assets/img/welcome.jpg"

// Landing Page Loading view Section
const Home = () => {
    const backgroundColor = "bg-brightColor"
    return (
        <div className="min-h-screen lg:h-90vh flex flex-col justify-center bg-white gap-10 p-5 px-5 md:px-32 lg:flex-row items-center">
            <div className="flex flex-col gap-4 text-center lg:text-start">
                <h2 className="text-5xl font-semibold leading-tight">Discover The Best Destinations</h2>
                <p>You Will be Enjoying the detinations which will be your unforgottable memories</p>
                <div className="flex flex-row justify-center lg:justify-start lg:p-5">
                    <Link to="destination" spy={true} smooth={true} >
                        <Button title="Destinations" backgroundColor={backgroundColor} />
                    </Link>
                </div>
            </div>
            <div className="w-full lg:w-2/4">
                <img className="shadow-[0_0_60px_20px_white] md:shadow-[0_0_60px_30px_white] " src={imgWelcome} alt="imgWelcome" />
            </div>
        </div>
    )
};

export default Home;