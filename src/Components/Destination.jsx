import DestinationCard from "../Layouts/DestinationCard";
import imgFrance from "../assets/img/France.jpg"
import imgDubai from "../assets/img/Dubai.jpg"
import imgItaly from "../assets/img/Italy.jpg"

// Function for Destination Section
const Destination = () => {
    return (
        <div className="min-h-screen flex flex-col justify-center gap-2 m-5 mx-5 md:mx-32">
            <h3 className="text-4xl font-medium text-center mt-16 lg:mt-4"> Popular Destinations</h3>
            <div className="flex flex-col justify-center gap-8 lg:flex-row mt-14">
                <DestinationCard img={imgFrance} title="Paris-France" para="Paris Offers Iconic Landmarks" />
                <DestinationCard img={imgDubai} title={"Dubai-UAE"} para={"A City of Tallest Buildings"} />
                <DestinationCard img={imgItaly} title={"Rome-Italy"} para={"Explore the Cities of Architechture"} />
            </div>
        </div>
    )
};

export default Destination;