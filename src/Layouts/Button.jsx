import { useNavigate } from "react-router-dom";
import { userLogout } from "../Helper/auth";
import { RiLoginBoxFill } from "react-icons/ri";

const Button = (props) => {
    const navigate = useNavigate();
    return (
        <div className="">
            <button 
                type={props.butType} 
                onClick={()=> {navigate(props.path); if(props.title=="Logout") {userLogout();} }}
                className={`px-6 py-2 ${props.backgroundColor} flex flex-row items-center text-black rounded-full hover:scale-110 hover:bg-gray-200 hover:shadow-[inset_0px_0px_5px_3px_gray] hover:text-yellow-800 focus:outline-none focus:scale-110 focus:border-gray-500 focus:shadow-[inset_0px_0px_5px_3px_gray] transition-all ease-in-out duration-300`}
            >
                {props.children}
                {props.title}
            </button>
        </div>
    )
};

export default Button;