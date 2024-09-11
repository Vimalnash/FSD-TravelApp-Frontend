import { useState } from "react";
import Button from "../Layouts/Button";
// import imgContact from "../assets/img/contact.jpg";

// Functin for Contact section
const Contact = () => {
    const backgroundColor = "bg-brightColor"
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    return (
        <div className="min-h-screen flex flex-col justify-center items-center gap-4 bg-white p-5 md:px-32 lg:flex-row bgimage">
            <div className="w-full flex flex-col justify-center items-center gap-2 rounded-xl lg:flex-row">
                <form className="w-full flex flex-col space-y-5 p-5 bg-[#F2F2F2] rounded-xl lg:w-2/4 ">
                    <h2 className="text-4xl font-semibold text-center">Contact Form</h2>
                    <div className="flex flex-col">
                        <lable for="fullname">Enter FullName</lable>
                        <input 
                            required
                            className="p-2 rounded-lg hover:shadow-[0_10px_10px_rgba(0,0,0,0.5)]"
                            id="fullname"
                            name="fullname"
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                            placeholder="FullName"
                        />
                    </div>
                    <div className="flex flex-col">
                        <lable for="email">Enter Email</lable>
                        <input 
                            required
                            className="p-2 rounded-lg hover:shadow-[0_10px_10px_rgba(0,0,0,0.5)]"
                            id="email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Email"
                        />
                    </div>
                    <div className="flex flex-col">
                        <lable for="message">Enter Message</lable>
                        <textarea 
                            required
                            className="p-2 rounded-lg hover:shadow-[0_10px_10px_rgba(0,0,0,0.5)]"
                            id="message"
                            name="message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            rows={5}
                            cols={24}
                            placeholder="Message"
                        >
                        </textarea>
                    </div>
                    <div className="flex flex-row justify-center">
                        <Button title="Submit" backgroundColor={backgroundColor}/>
                    </div>
                    <div className="overflow-x-hidden">
                        <p className="hmarque">We would Love to Hear from you, Please take a moment to submit your details.</p>
                    </div>
                </form>
                {/* <div className="w-full lg:w-2/4 -lg:translate-y-full">
                    <img className="rounded-lg -lg:translate-x-full" src={imgContact} alt="ImageContact" />
                </div> */}
            </div>
        </div>
    )
};

export default Contact;