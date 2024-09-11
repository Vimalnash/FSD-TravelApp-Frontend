
const Button = (props) => {
    return (
        <div className="">
            <button className={`px-6 py-2 ${props.backgroundColor} text-black rounded-full hover:scale-110 hover:bg-gray-200 transition-all ease-in-out duration-300`}>
                {props.title}
            </button>
        </div>
    )
};

export default Button;