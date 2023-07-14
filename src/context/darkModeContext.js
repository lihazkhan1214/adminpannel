import { createContext, useReducer } from "react";
import DarkModeReducer from "./darkModeReducer";

const initialState={
    darkMode:false,
}


export const DarkModeContext=createContext(initialState);


export const DarkModeProvider=({children})=>{
    const [state,dispatch]=useReducer(DarkModeReducer,initialState);
    return(
        <DarkModeContext.Provider value={{darkMode:state.darkMode,dispatch}}>
        
        
        {children}
        
        </DarkModeContext.Provider>

    )
    
}