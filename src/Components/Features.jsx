import React from "react";
import imgFeature from "../assets/img/about.jpg";
import imgServices from "../assets/img/services.png"
import imgUser from "../assets/img/user.png"
import imgWallet from "../assets/img/wallet.png"

// Trip Feature Details Functionality
const Features = () => {
    return (
        <div className="min-h-screen shadow-lg shadow-white">
        <h2 className="text-4xl font-medium text-center mt-16 lg:mt-4">Features</h2>
        <div className="flex flex-col justify-center items-center gap-2 m-5 md:mx-32 lg:flex-row">
            <div className="w-full space-y-10 lg:w-2/4">
                <div className="w-full space-y-4">
                    <h2 className="text-4xl font-medium text-center leading-tight md:text-start">Get Ready to Explore</h2>
                    <p className="text-center leading-tight md:text-start">Discover the Best Holiday Experience with TripWorld</p>
                </div>
                <div className="w-full mt-10 md:w-4/5 lg:w-4/5 lg:ml-14">
                    <img className="rounded-2xl shadow-2xl shadow-white" src={imgFeature} alt="ImageFeatures" />
                </div>
            </div>

            <div className="w-full space-y-10 mt-10 lg:w-2/4">
                <div className="flex flex-row gap-5">
                    <div className="flex flex-row items-center w-24">
                        <img src={imgServices} alt="ServicesImage" width="30px" height="30px"  />
                    </div>
                    <div className="space-y-3">
                        <h3 className="font-semibold text-xl">Services</h3>
                        <p className="text-[#898878]">Providing Best Services</p>
                    </div>
                </div>

                <div className="flex flex-row gap-5">
                    <div className="flex flex-row items-center w-24">
                        <img src={imgUser} alt="UserImage" width="30px" height="30px" />
                    </div>
                    <div className="space-y-3">
                        <h3 className="font-semibold text-xl">UserExperience</h3>
                        <p className="text-[#898878]">We are Providing Unforgottable Trip Experiences</p>
                    </div>
                </div>

                <div className="flex flex-row gap-5">
                    <div className="flex flex-row items-center w-24">
                        <img src={imgWallet} alt="WalletImage" width="30px" height="30px"  />
                    </div>
                    <div className="space-y-3">
                        <h3 className="font-semibold text-xl">Budget</h3>
                        <p className="text-[#898878]">Comes Under All Budget</p>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
};

export default Features;