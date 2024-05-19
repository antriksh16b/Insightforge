import {createContext, useContext} from "react";

let ThemeContext=createContext(
    {
        themeMode:"light",
        lightTheme:()=>{},
        darktheme:()=>{}
    }
);

export let ThemeProvider=ThemeContext.Provider; //ThemeContext.Provider will provide all variables declared inside ThemeContext to all its childrens

export default function useTheme(){
    return(useContext(ThemeContext)); // through useTheme a particular components can used variables provided by provider
}