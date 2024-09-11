import React from "react";
import Button from "./Button";


const DestinationCard = (props) => {
    const backgroundColor="bg-brightColor";

    return (
        <div className="w-full cursor-pointer hover:shadow-[0_35px_30px_-15px_rgba(0,0,0,0.3)] lg:w-2/6 ]">
            <div className="rounded-t-lg destinationImg">
                <img className="rounded-t-lg" src={props.img} alt="CountryDestination"/>
            </div>
            <div className="bg-[#F2F2F2] p-5 space-y-3 rounded-b-lg">
                <h2 className="text-xl font-medium text-center">{props.title}</h2>
                <p className="text-sm">{props.para}</p>
                <div className="flex flex-row justify-center">
                    <Button title="Book Tickets" backgroundColor={backgroundColor} />
                </div>
            </div>
        </div>
    )
};

export default DestinationCard;