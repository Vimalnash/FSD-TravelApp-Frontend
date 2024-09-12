import { useState } from "react";
import Button from "../Layouts/Button";
import { baseurl, userurl } from "../Handlers/BackendUrls";

// Functin for Contact section
const Contact = () => {
    const backgroundColor = "bg-brightColor"
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [show, setShow] = useState(true);
    const [processing, setProcessing] = useState(false);
    const [successMessage, setSuccessMessage] = useState("")
    const [failureMessage, setFailureMessage] = useState("")
    const [count, setCount] = useState("")

    // Form Payload
    let payload = {
        fullName: fullName,
        email: email,
        message: message
    }

    // Reset After Submit Form
    function resetForm(){
        setFullName("");
        setEmail("");
        setMessage("");
    };

    function showForm(){
        let i=10
        const countdown = setInterval(()=> {
            setCount(i);
            if(i < 0) {
                clearInterval(countdown);
                setShow(true);
                setSuccessMessage("");
                setFailureMessage("");
            }
            i--;
        }, 1000)
    };

    // Handling Submit function
    function handleSubmit(e) {
        e.preventDefault();
        setShow(false);
        setProcessing(true);
        fetch(`${baseurl}/${userurl}/usermessage/new`, {
            method: "POST",
            body: JSON.stringify(payload),
            headers: {
                "Content-Type":"application/json"
            }
        })
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            if(data.error) {
                setProcessing(false);
                setSuccessMessage("")
                setFailureMessage(data.error);
                // alert(data.error);
                showForm();
                
            } else {
                setProcessing(false);
                setSuccessMessage(data.message)
                setFailureMessage("");
                // alert(data.message);
                showForm();
                resetForm();
            }
        })
    };

    return (
        <>
            <div className="min-h-screen flex flex-col justify-center items-center gap-4 bg-white p-5 md:px-32 lg:flex-row bgimage">
                <div className="w-full flex flex-col justify-center items-center gap-2 rounded-xl lg:flex-row">
                    {show &&
                    (
                    <form className="w-full flex flex-col space-y-5 p-5 bg-[#F2F2F2] rounded-xl lg:w-2/4" onSubmit={(e) => handleSubmit(e)}>
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
                            <Button butType="submit" title="Submit" backgroundColor={backgroundColor}/>
                        </div>
                        <div className="overflow-x-hidden">
                            <p className="hmarque">We would Love to Hear from you, Please take a moment to submit your details.</p>
                        </div>
                    </form>
                    )
                    }
                    {
                        processing &&
                        (
                            <div className="w-full flex flex-col space-y-5 p-5 pt-64 pb-64 bg-[#F2F2F2] rounded-xl lg:w-2/4 text-center text-xl text-blue-500 font-semibold">
                                Loading Please Wait...
                            </div>
                        )
                    }
                    {
                        successMessage ?
                        (
                            <div className="w-full flex flex-col space-y-5 p-5 pt-64 pb-64 bg-[#F2F2F2] rounded-xl lg:w-2/4 text-center text-xl text-blue-500 font-semibold">
                                <p>{successMessage}</p>
                                <p>Going Back in {count}</p>
                            </div>
                        ):("")
                    }
                    {
                        failureMessage ?
                        (
                            <div className="w-full flex flex-col space-y-5 p-5 pt-64 pb-64 bg-[#F2F2F2] rounded-xl lg:w-2/4 text-center text-xl text-blue-500 font-semibold">
                                  <p>{failureMessage}</p>
                                  <p>Going Back in {count}</p>
                            </div>
                        ):("")
                    }
                </div>
            </div>

        </>

    )
};

export default Contact;