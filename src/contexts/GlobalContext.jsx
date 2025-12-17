import { createContext,useState } from "react";

const GlobalContext=createContext();

export const GlobalProvider = (props) => {        //Provider conject the value to the child
    const {children} = props;
    const [currentPage,setCurrentPage]=useState(1);
    return (
        <GlobalContext.Provider value={{currentPage,setCurrentPage}}>
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalContext;