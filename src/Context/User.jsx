import React , { createContext, useState } from "react";

const UserContext = createContext()

const UserProvider =({children})=> {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const value = [isLoggedIn, setIsLoggedIn]

    return(
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    )
}

export {UserContext, UserProvider}