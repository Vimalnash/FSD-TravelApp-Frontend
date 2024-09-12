import { createContext, useContext, useEffect, useState } from "react";
import { isAdminLoggedIn, isUserLoggedIn } from "../Helper/auth";

// Creating New Context
const AppCtx = createContext(null);

// Applying Context
export function AppContext({children}) {
    const [theme, setTheme] = useState("cupcake");
    const [loggedInUser, setLoggedInUser] = useState({});

    // Getting is normal user logged in
    const userAccess = isUserLoggedIn();
    if (userAccess) {
        // checking, getting and setting logged in user
        useEffect(() => {
            setLoggedInUser(JSON.parse(localStorage.getItem("user")));
        },[]);
    };
    // getting is admin logged in
    const adminAccess = isAdminLoggedIn();
    if (adminAccess) {
        // Checking, getting and setting the loggedin username
        useEffect(() => {
            setLoggedInUser(JSON.parse(localStorage.getItem("user")));
        },[]);
    };

    const [ currentDate, setCurrentDate ] = useState("");
    useEffect(() => {
        setCurrentDate(new Date().toJSON().slice(0, 10));
    },[])

    return (
        <AppCtx.Provider value={{
            theme, setTheme,
            loggedInUser, setLoggedInUser,
            currentDate, setCurrentDate
        }}>
            {children}
        </AppCtx.Provider>
    )
};

// UseContext Function to get the context vairables
export function useAppContext() {
    return useContext(AppCtx)
}